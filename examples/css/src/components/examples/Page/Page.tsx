"use client";
import { Sheet } from "@silk-hq/components";
import "./Page.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   presentTrigger: React.ReactNode;
   sheetContent: React.ReactNode;
}

const Page = ({ presentTrigger, sheetContent, ...restProps }: Props) => {
   return (
      <Sheet.Root license="commercial" {...restProps}>
         {presentTrigger}
         <Sheet.Portal>
            <Sheet.View
               className="Page-view"
               contentPlacement="right"
               swipeOvershoot={false}
               nativeEdgeSwipePrevention={true}
            >
               <Sheet.Backdrop className="Page-backdrop" />
               <Sheet.Content className="Page-content">{sheetContent}</Sheet.Content>
            </Sheet.View>
         </Sheet.Portal>
      </Sheet.Root>
   );
};

export { Page };
