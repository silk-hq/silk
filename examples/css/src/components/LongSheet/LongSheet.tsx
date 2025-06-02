"use client";
import React, { useCallback, useEffect, useRef, useState, createContext, useContext } from "react";
import { Sheet, Scroll } from "@silk-hq/components";
import "./LongSheet.css";

// ================================================================================================
// Context
// ================================================================================================

type LongSheetContextType = {
  setTrack: (track: "top" | "bottom") => void;
  restingOutside: boolean;
};

const LongSheetContext = createContext<LongSheetContextType | null>(null);

// ================================================================================================
// Root
// ================================================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type LongSheetRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const LongSheetRoot = React.forwardRef<React.ElementRef<typeof Sheet.Root>, LongSheetRootProps>(
  ({ children, ...restProps }, ref) => {
    return (
      <Sheet.Root license="commercial" {...restProps} ref={ref}>
        {children}
      </Sheet.Root>
    );
  }
);
LongSheetRoot.displayName = "LongSheet.Root";

// ================================================================================================
// View
// ================================================================================================

const LongSheetView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ children, className, onTravelStatusChange, ...restProps }, ref) => {
  const [restingOutside, setRestingOutside] = useState(false);
  const [track, setTrack] = useState<"top" | "bottom">("bottom");

  useEffect(() => {
    if (restingOutside) {
      setTrack("bottom");
    }
  }, [restingOutside]);

  return (
    <LongSheetContext.Provider value={{ setTrack, restingOutside }}>
      <Sheet.View
        className={`LongSheet-view ${className ?? ""}`.trim()}
        contentPlacement="center"
        tracks={track}
        swipeOvershoot={false}
        nativeEdgeSwipePrevention={true}
        enteringAnimationSettings={{
          easing: "spring",
          stiffness: 480,
          damping: 45,
          mass: 1.5,
        }}
        onTravelStatusChange={(status) => {
          setRestingOutside(status === "idleOutside");
          onTravelStatusChange?.(status);
        }}
        {...restProps}
        ref={ref}
      >
        {children}
      </Sheet.View>
    </LongSheetContext.Provider>
  );
});
LongSheetView.displayName = "LongSheet.View";

// ================================================================================================
// Backdrop
// ================================================================================================

const LongSheetBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Backdrop
      className={`LongSheet-backdrop ${className ?? ""}`.trim()}
      themeColorDimming="auto"
      {...restProps}
      ref={ref}
    />
  );
});
LongSheetBackdrop.displayName = "LongSheet.Backdrop";

// ================================================================================================
// Content
// ================================================================================================

const LongSheetContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ children, className, ...restProps }, ref) => {
  const scrollRef = useRef<any>(null);
  const context = useContext(LongSheetContext);
  if (!context) {
    throw new Error("LongSheetContent must be used within a LongSheetContext.Provider");
  }
  const { setTrack, restingOutside } = context;

  const scrollHandler = useCallback(
    ({ progress }: any) => {
      if (restingOutside) return; // ! Checking because it may scroll to 1 when outside
      setTrack(progress < 0.5 ? "bottom" : "top");
    },
    [restingOutside, setTrack]
  );

  return (
    <Sheet.Content
      className={`LongSheet-content ${className ?? ""}`.trim()}
      asChild
      {...restProps}
      ref={ref}
    >
      <Scroll.Root className="LongSheet-scrollRoot" componentRef={scrollRef} asChild>
        <Scroll.View className="LongSheet-scrollView" onScroll={scrollHandler}>
          <Scroll.Content className="LongSheet-scrollContent">
            <div className="LongSheet-innerContent">{children}</div>
          </Scroll.Content>
        </Scroll.View>
      </Scroll.Root>
    </Sheet.Content>
  );
});
LongSheetContent.displayName = "LongSheet.Content";

// ================================================================================================
// Unchanged Components
// ================================================================================================

const LongSheetPortal = Sheet.Portal;
const LongSheetTrigger = Sheet.Trigger;
const LongSheetHandle = Sheet.Handle;
const LongSheetOutlet = Sheet.Outlet;
const LongSheetTitle = Sheet.Title;
const LongSheetDescription = Sheet.Description;

export const LongSheet = {
  Root: LongSheetRoot,
  Portal: LongSheetPortal,
  View: LongSheetView,
  Backdrop: LongSheetBackdrop,
  Content: LongSheetContent,
  Trigger: LongSheetTrigger,
  Handle: LongSheetHandle,
  Outlet: LongSheetOutlet,
  Title: LongSheetTitle,
  Description: LongSheetDescription,
};
