"use client";
import React, { useRef, useState, useMemo, useCallback } from "react";
import { Sheet, useClientMediaQuery, type SheetViewProps } from "@silk-hq/components";

import "./SheetWithKeyboard.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   presentTrigger: React.ReactNode;
   sheetContent: React.ReactNode;
}

const SheetWithKeyboard = ({ presentTrigger, sheetContent, ...restProps }: Props) => {
   const viewRef = useRef<HTMLElement>(null);
   const largeViewport = useClientMediaQuery("(min-width: 800px)");
   const contentPlacement = largeViewport ? "center" : "bottom";
   const tracks: SheetViewProps["tracks"] = largeViewport ? ["top", "bottom"] : "bottom";

   //
   // On-screen keyboard dismiss

   const travelHandler = useCallback<Exclude<SheetViewProps["onTravel"], undefined>>(({ progress }) => {
      if (!viewRef.current) return;

      // Dismiss the on-screen keyboard as soon as travel
      // occurs by focusing the view element.
      if (progress < 0.999) {
         viewRef.current.focus();
      }
   }, []);

   //
   // Return

   return (
      <Sheet.Root license="commercial" {...restProps}>
         {presentTrigger}
         <Sheet.Portal>
            <Sheet.View
               className="SheetWithKeyboard-view"
               contentPlacement={contentPlacement}
               tracks={tracks}
               swipeOvershoot={false}
               nativeEdgeSwipePrevention={true}
               onTravel={travelHandler}
               ref={viewRef}
            >
               <Sheet.Backdrop themeColorDimming="auto" />
               <Sheet.Content className="SheetWithKeyboard-content">{sheetContent}</Sheet.Content>
            </Sheet.View>
         </Sheet.Portal>
      </Sheet.Root>
   );
};

export { SheetWithKeyboard };
