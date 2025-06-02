"use client";
import React, { useMemo, useRef, useState } from "react";
import { Sheet, type SheetViewProps } from "@silk-hq/components";
import "./SheetWithDetent.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   presentTrigger: React.ReactNode;
   sheetContent: ({
      setActiveDetent,
      reachedLastDetent,
   }: {
      setActiveDetent: React.Dispatch<React.SetStateAction<number>>;
      reachedLastDetent: boolean;
   }) => React.ReactNode;
}

const SheetWithDetent = ({ presentTrigger, sheetContent, ...restProps }: Props) => {
   const viewRef = useRef<HTMLElement>(null);
   const [activeDetent, setActiveDetent] = useState(1);
   const [reachedLastDetent, setReachedLastDetent] = useState(false);

   //
   // On-screen keyboard dismiss

   const travelHandler = useMemo(() => {
      if (!reachedLastDetent) return undefined;

      const handler: SheetViewProps["onTravel"] = ({ progress }) => {
         if (!viewRef.current) return;

         // Dismiss the on-screen keyboard.
         if (progress < 0.999) {
            viewRef.current.focus();
         }
      };
      return handler;
   }, [reachedLastDetent]);

   //
   // Return

   return (
      <Sheet.Root
         license="commercial"
         activeDetent={activeDetent}
         onActiveDetentChange={setActiveDetent}
         {...restProps}
      >
         {presentTrigger}
         <Sheet.Portal>
            <Sheet.View
               className="SheetWithDetent-view"
               detents={!reachedLastDetent ? "66vh" : undefined}
               swipeOvershoot={false}
               nativeEdgeSwipePrevention={true}
               onTravelStatusChange={(travelStatus) => {
                  if (travelStatus === "idleOutside") setReachedLastDetent(false);
               }}
               onTravelRangeChange={(range) => {
                  if (range.start === 2) setReachedLastDetent(true);
               }}
               onTravel={travelHandler}
               ref={viewRef}
            >
               <Sheet.Backdrop themeColorDimming="auto" />
               <Sheet.Content className="SheetWithDetent-content">
                  {sheetContent({ setActiveDetent, reachedLastDetent })}
               </Sheet.Content>
            </Sheet.View>
         </Sheet.Portal>
      </Sheet.Root>
   );
};

export { SheetWithDetent };
