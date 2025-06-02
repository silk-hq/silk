"use client";
import React from "react";
import { Sheet } from "@silk-hq/components";
import "./TopSheet.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   presentTrigger: React.ReactNode;
   sheetContent: React.ReactNode;
}

const TopSheet = ({ presentTrigger, sheetContent, ...restProps }: Props) => {
   return (
      <Sheet.Root license="commercial" {...restProps}>
         {presentTrigger}
         <Sheet.Portal>
            <Sheet.View className="TopSheet-view" contentPlacement="top" nativeEdgeSwipePrevention={true}>
               <Sheet.Backdrop className="TopSheet-backdrop" />
               <Sheet.Content className="TopSheet-content">
                  <Sheet.BleedingBackground className="TopSheet-bleedingBackground" />
                  {sheetContent}
               </Sheet.Content>
            </Sheet.View>
         </Sheet.Portal>
      </Sheet.Root>
   );
};

export { TopSheet };
