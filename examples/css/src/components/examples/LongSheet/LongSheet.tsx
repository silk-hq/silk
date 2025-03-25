"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Sheet, Scroll } from "@silk-hq/components";
import "./LongSheet.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   presentTrigger: React.ReactNode;
   sheetContent: React.ReactNode;
}

const LongSheet = ({ presentTrigger, sheetContent, ...restProps }: Props) => {
   const [presented, setPresented] = useState(false);
   const [restingOutside, setRestingOutside] = useState(false);

   //
   // Track switching based on scroll position & presented

   const scrollRef = useRef<any>(null);

   const [track, setTrack] = useState<"top" | "bottom">("bottom");

   const scrollHandler = useCallback(
      ({ progress }: any) => {
         if (restingOutside) return; // ! Checking because it may scroll to 1 when outside
         setTrack(progress < 0.5 ? "bottom" : "top");
      },
      [restingOutside]
   );

   useEffect(() => {
      if (restingOutside) {
         setTrack("bottom");
      }
   }, [restingOutside]);

   return (
      <Sheet.Root license="commercial" presented={presented} onPresentedChange={setPresented} {...restProps}>
         {presentTrigger}
         <Sheet.Portal>
            <Sheet.View
               className="LongSheet-view"
               contentPlacement="center"
               tracks={track}
               swipeOvershoot={false}
               nativeEdgeSwipePrevention={true}
               enteringAnimationSettings={{
                  easing: "spring",
                  stiffness: 480,
                  damping: 45,
                  mass: 1.5,
               }}
               onTravelStatusChange={(status) => setRestingOutside(status === "idleOutside")}
            >
               <Sheet.Backdrop themeColorDimming="auto" />
               <Sheet.Content asChild>
                  <Scroll.Root className="LongSheet-content" componentRef={scrollRef} asChild>
                     <Scroll.View className="LongSheet-scrollRoot" onScroll={scrollHandler}>
                        <Scroll.Content className="LongSheet-scrollContent">
                           <div className="LongSheet-innerContent">{sheetContent}</div>
                        </Scroll.Content>
                     </Scroll.View>
                  </Scroll.Root>
               </Sheet.Content>
            </Sheet.View>
         </Sheet.Portal>
      </Sheet.Root>
   );
};

export { LongSheet };
