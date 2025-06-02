"use client";
import React from "react";
import { Sheet } from "@silk-hq/components";
import "./TopSheet.css";

// ================================================================================================
// Root
// ================================================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type TopSheetRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const TopSheetRoot = React.forwardRef<React.ElementRef<typeof Sheet.Root>, TopSheetRootProps>(
  ({ children, ...restProps }, ref) => {
    return (
      <Sheet.Root license="commercial" {...restProps} ref={ref}>
        {children}
      </Sheet.Root>
    );
  }
);
TopSheetRoot.displayName = "TopSheet.Root";

// ================================================================================================
// View
// ================================================================================================

const TopSheetView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ children, className, ...restProps }, ref) => {
  return (
    <Sheet.View
      className={`TopSheet-view ${className ?? ""}`.trim()}
      contentPlacement="top"
      nativeEdgeSwipePrevention={true}
      {...restProps}
      ref={ref}
    >
      {children}
    </Sheet.View>
  );
});
TopSheetView.displayName = "TopSheet.View";

// ================================================================================================
// Backdrop
// ================================================================================================

const TopSheetBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Backdrop
      className={`TopSheet-backdrop ${className ?? ""}`.trim()}
      {...restProps}
      ref={ref}
    />
  );
});
TopSheetBackdrop.displayName = "TopSheet.Backdrop";

// ================================================================================================
// Content
// ================================================================================================

const TopSheetContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ children, className, ...restProps }, ref) => {
  return (
    <Sheet.Content
      className={`TopSheet-content ${className ?? ""}`.trim()}
      {...restProps}
      ref={ref}
    >
      <Sheet.BleedingBackground className="TopSheet-bleedingBackground" />
      {children}
    </Sheet.Content>
  );
});
TopSheetContent.displayName = "TopSheet.Content";

// ================================================================================================
// Unchanged Components
// ================================================================================================

const TopSheetPortal = Sheet.Portal;
const TopSheetTrigger = Sheet.Trigger;
const TopSheetHandle = Sheet.Handle;
const TopSheetOutlet = Sheet.Outlet;
const TopSheetTitle = Sheet.Title;
const TopSheetDescription = Sheet.Description;

export const TopSheet = {
  Root: TopSheetRoot,
  Portal: TopSheetPortal,
  View: TopSheetView,
  Backdrop: TopSheetBackdrop,
  Content: TopSheetContent,
  Trigger: TopSheetTrigger,
  Handle: TopSheetHandle,
  Outlet: TopSheetOutlet,
  Title: TopSheetTitle,
  Description: TopSheetDescription,
};
