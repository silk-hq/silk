"use client";
import React, { useRef, useCallback } from "react";
import { Sheet, useClientMediaQuery, type SheetViewProps } from "@silk-hq/components";
import "./SheetWithKeyboard.css";

// ================================================================================================
// Root
// ================================================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type SheetWithKeyboardRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const SheetWithKeyboardRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  SheetWithKeyboardRootProps
>(({ children, ...restProps }, ref) => {
  return (
    <Sheet.Root license="commercial" {...restProps} ref={ref}>
      {children}
    </Sheet.Root>
  );
});
SheetWithKeyboardRoot.displayName = "SheetWithKeyboard.Root";

// ================================================================================================
// View
// ================================================================================================

const SheetWithKeyboardView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ children, className, onTravel, ...restProps }, ref) => {
  const viewRef = useRef<HTMLElement>(null);
  const largeViewport = useClientMediaQuery("(min-width: 800px)");
  const contentPlacement = largeViewport ? "center" : "bottom";
  const tracks: SheetViewProps["tracks"] = largeViewport ? ["top", "bottom"] : "bottom";

  //

  const travelHandler = useCallback<NonNullable<SheetViewProps["onTravel"]>>(
    ({ progress, ...rest }) => {
      if (!viewRef.current) return onTravel?.({ progress, ...rest });

      // Dismiss the on-screen keyboard as soon as travel
      // occurs by focusing the view element.
      if (progress < 0.999) {
        viewRef.current.focus();
      }
      onTravel?.({ progress, ...rest });
    },
    [onTravel]
  );

  //

  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      // @ts-ignore - intentionally breaking the readonly nature for compatibility
      viewRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [ref]
  );

  return (
    <Sheet.View
      className={`SheetWithKeyboard-view ${className ?? ""}`.trim()}
      contentPlacement={contentPlacement}
      tracks={tracks}
      swipeOvershoot={false}
      nativeEdgeSwipePrevention={true}
      onTravel={travelHandler}
      ref={setRefs}
      {...restProps}
    >
      {children}
    </Sheet.View>
  );
});
SheetWithKeyboardView.displayName = "SheetWithKeyboard.View";

// ================================================================================================
// Backdrop
// ================================================================================================

const SheetWithKeyboardBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Backdrop
      className={`SheetWithKeyboard-backdrop ${className ?? ""}`.trim()}
      themeColorDimming="auto"
      {...restProps}
      ref={ref}
    />
  );
});
SheetWithKeyboardBackdrop.displayName = "SheetWithKeyboard.Backdrop";

// ================================================================================================
// Content
// ================================================================================================

const SheetWithKeyboardContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ children, className, ...restProps }, ref) => {
  return (
    <Sheet.Content
      className={`SheetWithKeyboard-content ${className ?? ""}`.trim()}
      {...restProps}
      ref={ref}
    >
      {children}
    </Sheet.Content>
  );
});
SheetWithKeyboardContent.displayName = "SheetWithKeyboard.Content";

// ================================================================================================
// Unchanged Components
// ================================================================================================

const SheetWithKeyboardPortal = Sheet.Portal;
const SheetWithKeyboardTrigger = Sheet.Trigger;
const SheetWithKeyboardHandle = Sheet.Handle;
const SheetWithKeyboardOutlet = Sheet.Outlet;
const SheetWithKeyboardTitle = Sheet.Title;
const SheetWithKeyboardDescription = Sheet.Description;

export const SheetWithKeyboard = {
  Root: SheetWithKeyboardRoot,
  Portal: SheetWithKeyboardPortal,
  View: SheetWithKeyboardView,
  Backdrop: SheetWithKeyboardBackdrop,
  Content: SheetWithKeyboardContent,
  Trigger: SheetWithKeyboardTrigger,
  Handle: SheetWithKeyboardHandle,
  Outlet: SheetWithKeyboardOutlet,
  Title: SheetWithKeyboardTitle,
  Description: SheetWithKeyboardDescription,
};
