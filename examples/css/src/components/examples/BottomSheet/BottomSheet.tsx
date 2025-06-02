"use client";
import React from "react";
import { Sheet } from "@silk-hq/components";
import "./BottomSheet.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   presentTrigger: React.ReactNode;
   sheetContent: React.ReactNode;
}

const BottomSheet = ({ presentTrigger, sheetContent, ...restProps }: Props) => {
   return (
      <Sheet.Root license="commercial" {...restProps}>
         {presentTrigger}
         <Sheet.Portal>
            <Sheet.View className="BottomSheet-view" nativeEdgeSwipePrevention={true}>
               <Sheet.Backdrop themeColorDimming="auto" />
               <Sheet.Content className="BottomSheet-content">
                  <Sheet.BleedingBackground className="BottomSheet-bleedingBackground" />
                  {sheetContent}
               </Sheet.Content>
            </Sheet.View>
         </Sheet.Portal>
      </Sheet.Root>
   );
};

export { BottomSheet };
