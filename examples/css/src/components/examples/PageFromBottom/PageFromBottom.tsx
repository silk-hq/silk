"use client";
import { Sheet } from "@silk-hq/components";
import "./PageFromBottom.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   presentTrigger: React.ReactNode;
   sheetContent: React.ReactNode;
}

const PageFromBottom = ({ presentTrigger, sheetContent, ...restProps }: Props) => {
   return (
      <Sheet.Root license="commercial" {...restProps}>
         {presentTrigger}
         <Sheet.Portal>
            <Sheet.View
               className="PageFromBottom-view"
               contentPlacement="bottom"
               swipe={false}
               nativeEdgeSwipePrevention={true}
            >
               <Sheet.Backdrop className="PageFromBottom-backdrop" travelAnimation={{ opacity: [0, 0.1] }} />
               <Sheet.Content className="PageFromBottom-content">
                  <div className="PageFromBottom-topBar">
                     <Sheet.Trigger className="PageFromBottom-dismissTrigger" action="dismiss">
                        Close
                     </Sheet.Trigger>
                  </div>
                  {sheetContent}
               </Sheet.Content>
            </Sheet.View>
         </Sheet.Portal>
      </Sheet.Root>
   );
};

export { PageFromBottom };
