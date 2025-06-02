"use client";
import React from "react";
import { Sheet, SheetViewProps, useClientMediaQuery } from "@silk-hq/components";
import "./DetachedSheet.css";

// ================================================================================================
// Root
// ================================================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type DetachedSheetRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const DetachedSheetRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  DetachedSheetRootProps
>(({ children, ...restProps }, ref) => {
  return (
    <Sheet.Root license="commercial" {...restProps} ref={ref}>
      {children}
    </Sheet.Root>
  );
});
DetachedSheetRoot.displayName = "DetachedSheet.Root";

// ================================================================================================
// View
// ================================================================================================

const DetachedSheetView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ children, className, ...restProps }, ref) => {
  const largeViewport = useClientMediaQuery("(min-width: 650px)");
  const contentPlacement = largeViewport ? "center" : "bottom";
  const tracks: SheetViewProps["tracks"] = largeViewport ? ["top", "bottom"] : "bottom";

  return (
    <Sheet.View
      className={`DetachedSheet-view contentPlacement-${contentPlacement} ${className ?? ""}`}
      contentPlacement={contentPlacement}
      tracks={tracks}
      nativeEdgeSwipePrevention={true}
      {...restProps}
      ref={ref}
    >
      {children}
    </Sheet.View>
  );
});
DetachedSheetView.displayName = "DetachedSheet.View";

// ================================================================================================
// Backdrop
// ================================================================================================

const DetachedSheetBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Backdrop
      className={`DetachedSheet-backdrop ${className ?? ""}`.trim()}
      travelAnimation={{
        opacity: ({ progress }) => Math.min(progress * 0.2, 0.2),
      }}
      themeColorDimming="auto"
      {...restProps}
      ref={ref}
    />
  );
});
DetachedSheetBackdrop.displayName = "DetachedSheet.Backdrop";

// ================================================================================================
// Content
// ================================================================================================

const DetachedSheetContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ children, className, ...restProps }, ref) => {
  return (
    <Sheet.Content
      className={`DetachedSheet-content ${className ?? ""}`.trim()}
      {...restProps}
      ref={ref}
    >
      <div className="DetachedSheet-innerContent">{children}</div>
    </Sheet.Content>
  );
});
DetachedSheetContent.displayName = "DetachedSheet.Content";

// ================================================================================================
// Handle
// ================================================================================================

const DetachedSheetHandle = React.forwardRef<
  React.ElementRef<typeof Sheet.Handle>,
  React.ComponentPropsWithoutRef<typeof Sheet.Handle>
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Handle
      className={`DetachedSheet-handle ${className ?? ""}`.trim()}
      action="dismiss"
      {...restProps}
      ref={ref}
    />
  );
});
DetachedSheetHandle.displayName = "DetachedSheet.Handle";

// ================================================================================================
// Unchanged Components
// ================================================================================================

const DetachedSheetPortal = Sheet.Portal;
const DetachedSheetTrigger = Sheet.Trigger;
const DetachedSheetOutlet = Sheet.Outlet;
const DetachedSheetTitle = Sheet.Title;
const DetachedSheetDescription = Sheet.Description;

export const DetachedSheet = {
  Root: DetachedSheetRoot,
  Portal: DetachedSheetPortal,
  View: DetachedSheetView,
  Backdrop: DetachedSheetBackdrop,
  Content: DetachedSheetContent,
  Trigger: DetachedSheetTrigger,
  Handle: DetachedSheetHandle,
  Outlet: DetachedSheetOutlet,
  Title: DetachedSheetTitle,
  Description: DetachedSheetDescription,
};
