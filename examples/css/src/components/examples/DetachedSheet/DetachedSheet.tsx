"use client";
import React from "react";
import { Sheet, SheetViewProps, useClientMediaQuery } from "@silk-hq/components";
import "./DetachedSheet.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   presentTrigger: React.ReactNode;
   sheetContent: React.ReactNode;
}

const DetachedSheet = ({ presentTrigger, sheetContent, ...restProps }: Props) => {
   const largeViewport = useClientMediaQuery("(min-width: 650px)");
   const contentPlacement = largeViewport ? "center" : "bottom";
   const tracks: SheetViewProps["tracks"] = largeViewport ? ["top", "bottom"] : "bottom";

   return (
      <Sheet.Root license="commercial" {...restProps}>
         {presentTrigger}
         <Sheet.Portal>
            <Sheet.View
               className={`DetachedSheet-view contentPlacement-${contentPlacement}`}
               contentPlacement={contentPlacement}
               tracks={tracks}
               nativeEdgeSwipePrevention={true}
            >
               <Sheet.Backdrop
                  travelAnimation={{
                     opacity: ({ progress }) => Math.min(progress * 0.2, 0.2),
                  }}
                  themeColorDimming="auto"
               />
               <Sheet.Content className="DetachedSheet-content">
                  <div className="DetachedSheet-innerContent">{sheetContent}</div>
               </Sheet.Content>
            </Sheet.View>
         </Sheet.Portal>
      </Sheet.Root>
   );
};

export { DetachedSheet };
