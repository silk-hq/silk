"use client";
import React, { useEffect, useState, useRef } from "react";
import { Sheet, useClientMediaQuery } from "@silk-hq/components";
import "./Toast.css";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
   presentTrigger: React.ReactNode;
   sheetContent: React.ReactNode;
}

const Toast = ({ presentTrigger, sheetContent, ...restProps }: Props) => {
   const largeViewport = useClientMediaQuery("(min-width: 1000px)");
   const contentPlacement = largeViewport ? "right" : "top";

   //
   // Auto-close timeout

   const [presented, setPresented] = useState(false);
   const [pointerOver, setPointerOver] = useState(false);
   const [travelStatus, setTravelStatus] = useState("idleOutside");
   const autoCloseTimeout = useRef<ReturnType<typeof setTimeout> | undefined>();
   useEffect(() => {
      const startAutoCloseTimeout = () => {
         autoCloseTimeout.current = setTimeout(() => setPresented(false), 5000);
      };

      const clearAutoCloseTimeout = () => {
         clearTimeout(autoCloseTimeout.current);
      };

      if (presented) {
         if (travelStatus === "idleInside" && !pointerOver) {
            startAutoCloseTimeout();
         } else {
            clearAutoCloseTimeout();
         }
      }
      return clearAutoCloseTimeout;
   }, [presented, travelStatus, pointerOver]);

   //
   // Return

   return (
      <Sheet.Root
         license="commercial"
         presented={presented}
         onPresentedChange={setPresented}
         sheetRole=""
         {...restProps}
      >
         {presentTrigger}
         <Sheet.Portal>
            <div className="Toast-container" role="status" aria-live="polite">
               <Sheet.View
                  className="Toast-view"
                  contentPlacement={contentPlacement}
                  inertOutside={false}
                  onPresentAutoFocus={{ focus: false }}
                  onDismissAutoFocus={{ focus: false }}
                  onClickOutside={{
                     dismiss: false,
                     stopOverlayPropagation: false,
                  }}
                  onEscapeKeyDown={{
                     dismiss: false,
                     stopOverlayPropagation: false,
                  }}
                  onTravelStatusChange={setTravelStatus}
               >
                  <Sheet.Content asChild>
                     <Sheet.SpecialWrapper.Root className="Toast-content">
                        <Sheet.SpecialWrapper.Content>
                           <div
                              className="Toast-innerContent"
                              onPointerEnter={() => setPointerOver(true)}
                              onPointerLeave={() => setPointerOver(false)}
                           >
                              {sheetContent}
                           </div>
                        </Sheet.SpecialWrapper.Content>
                     </Sheet.SpecialWrapper.Root>
                  </Sheet.Content>
               </Sheet.View>
            </div>
         </Sheet.Portal>
      </Sheet.Root>
   );
};

export { Toast };
