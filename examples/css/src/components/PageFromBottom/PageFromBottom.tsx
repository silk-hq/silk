"use client";
import React from "react";
import { Sheet } from "@silk-hq/components";
import "./PageFromBottom.css";

// ================================================================================================
// Root
// ================================================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type PageFromBottomRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const PageFromBottomRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  PageFromBottomRootProps
>((props, ref) => {
  return <Sheet.Root license="commercial" {...props} ref={ref}></Sheet.Root>;
});
PageFromBottomRoot.displayName = "PageFromBottom.Root";

// ================================================================================================
// View
// ================================================================================================

const PageFromBottomView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ children, className, ...restProps }, ref) => {
  return (
    <Sheet.View
      className={`PageFromBottom-view ${className ?? ""}`.trim()}
      contentPlacement="bottom"
      swipe={false}
      nativeEdgeSwipePrevention={true}
      {...restProps}
      ref={ref}
    >
      {children}
    </Sheet.View>
  );
});
PageFromBottomView.displayName = "PageFromBottom.View";

// ================================================================================================
// Backdrop
// ================================================================================================

const PageFromBottomBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Backdrop
      className={`PageFromBottom-backdrop ${className ?? ""}`.trim()}
      travelAnimation={{ opacity: [0, 0.1] }}
      {...restProps}
      ref={ref}
    />
  );
});
PageFromBottomBackdrop.displayName = "PageFromBottom.Backdrop";

// ================================================================================================
// Content
// ================================================================================================

const PageFromBottomContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ children, className, ...restProps }, ref) => {
  return (
    <Sheet.Content
      className={`PageFromBottom-content ${className ?? ""}`.trim()}
      {...restProps}
      ref={ref}
    >
      <div className="PageFromBottom-topBar">
        <Sheet.Trigger className="PageFromBottom-dismissTrigger" action="dismiss">
          Close
        </Sheet.Trigger>
      </div>
      {children}
    </Sheet.Content>
  );
});
PageFromBottomContent.displayName = "PageFromBottom.Content";

// ================================================================================================
// Unchanged Components
// ================================================================================================

const PageFromBottomPortal = Sheet.Portal;
const PageFromBottomTrigger = Sheet.Trigger;
const PageFromBottomHandle = Sheet.Handle;
const PageFromBottomOutlet = Sheet.Outlet;
const PageFromBottomTitle = Sheet.Title;
const PageFromBottomDescription = Sheet.Description;

export const PageFromBottom = {
  Root: PageFromBottomRoot,
  Portal: PageFromBottomPortal,
  View: PageFromBottomView,
  Backdrop: PageFromBottomBackdrop,
  Content: PageFromBottomContent,
  Trigger: PageFromBottomTrigger,
  Handle: PageFromBottomHandle,
  Outlet: PageFromBottomOutlet,
  Title: PageFromBottomTitle,
  Description: PageFromBottomDescription,
};
