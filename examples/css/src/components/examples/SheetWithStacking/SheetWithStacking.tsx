"use client";
import React from "react";
import {
  Sheet,
  SheetStack,
  SheetViewProps,
  useClientMediaQuery,
  VisuallyHidden,
  type SheetContentProps,
} from "@silk-hq/components";
import "./SheetWithStacking.css";

//
// The Sheet Stack

const SheetWithStackingStack = (props: any) => {
  return <SheetStack.Root asChild {...props} />;
};

//
// The Sheet Root

const SheetWithStackingRoot = (props: any) => (
  <Sheet.Root license="commercial" forComponent="closest" {...props} />
);

//
// The Sheet View and its content

interface ExampleSheetWithStackingViewProps
  extends SheetViewProps,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SheetWithStackingView = ({
  children,
  onTravelStatusChange,
}: ExampleSheetWithStackingViewProps) => {
  const largeViewport = useClientMediaQuery("(min-width: 700px)");
  const contentPlacement = largeViewport ? "right" : "bottom";

  const stackingAnimation: SheetContentProps["stackingAnimation"] =
    largeViewport
      ? {
          translateX: ({ progress }: { progress: number }) =>
            progress <= 1
              ? progress * -10 + "px"
              : // prettier-ignore
                "calc(-12.5px + 2.5px *" + progress + ")",
          scale: [1, 0.933],
          transformOrigin: "0 50%",
        }
      : {
          translateY: ({ progress }: { progress: number }) =>
            progress <= 1
              ? progress * -10 + "px"
              : // prettier-ignore
                "calc(-12.5px + 2.5px *" + progress + ")",
          scale: [1, 0.933],
          transformOrigin: "50% 0",
        };

  return (
    <Sheet.Portal>
      <Sheet.View
        className={`SheetWithStacking-view contentPlacement-${contentPlacement}`}
        contentPlacement={contentPlacement}
        nativeEdgeSwipePrevention={true}
        onTravelStatusChange={onTravelStatusChange}
      >
        <Sheet.Backdrop
          travelAnimation={{ opacity: [0, 0.33] }}
          themeColorDimming="auto"
        />
        <Sheet.Content
          className={`SheetWithStacking-content contentPlacement-${contentPlacement}`}
          stackingAnimation={stackingAnimation}
        >
          <div className="SheetWithStacking-innerContent">{children}</div>
        </Sheet.Content>
      </Sheet.View>
    </Sheet.Portal>
  );
};

export { SheetWithStackingStack, SheetWithStackingRoot, SheetWithStackingView };
