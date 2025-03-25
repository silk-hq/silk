"use client";
import { Sheet } from "@silk-hq/components";
import { DetachedSheet } from "./DetachedSheet";
import "./ExampleDetachedSheet.css";

import { SheetTriggerCard } from "@/components/app/SheetTriggerCard/SheetTriggerCard";

const ExampleDetachedSheet = () => {
  return (
    <DetachedSheet
      presentTrigger={
        <SheetTriggerCard color="green">Detached Sheet</SheetTriggerCard>
      }
      sheetContent={
        <div className={"ExampleDetachedSheet-root"}>
          <Sheet.Handle
            className="ExampleDetachedSheet-handle"
            action="dismiss"
          />
          <div className="ExampleDetachedSheet-illustration" />
          <div className="ExampleDetachedSheet-information">
            <Sheet.Title className="ExampleDetachedSheet-title">
              Your Meal is Coming
            </Sheet.Title>
            <Sheet.Description className="ExampleDetachedSheet-description">
              Your food is on its way and will arrive soon! Sit back and get
              ready to enjoy your meal.
            </Sheet.Description>
          </div>
          <Sheet.Trigger
            className="ExampleDetachedSheet-validateTrigger"
            action="dismiss"
          >
            Got it
          </Sheet.Trigger>
        </div>
      }
    />
  );
};

export { ExampleDetachedSheet };
