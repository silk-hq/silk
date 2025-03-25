"use client";
import { Sheet } from "@silk-hq/components";
import { Card } from "./Card";
import "./ExampleCard.css";

import { SheetTriggerCard } from "@/components/app/SheetTriggerCard/SheetTriggerCard";
import { SheetDismissButton } from "../_GenericComponents/SheetDismissButton/SheetDismissButton";

const ExampleCard = () => {
  return (
    <Card
      presentTrigger={<SheetTriggerCard color="blue">Card</SheetTriggerCard>}
      sheetContent={
        <div className="ExampleCard-root">
          <Sheet.Trigger action="dismiss" asChild>
            <SheetDismissButton className="ExampleCard-dismissTrigger" />
          </Sheet.Trigger>
          <div className="ExampleCard-illustration" />
          <div className="ExampleCard-information">
            <Sheet.Title className="ExampleCard-title">
              Paint and Sip
            </Sheet.Title>
            <Sheet.Description className="ExampleCard-description">
              Join our art workshop and let your imagination flow. Paint,
              create, and have fun.
            </Sheet.Description>
            <Sheet.Trigger
              className="ExampleCard-validateTrigger"
              action="dismiss"
            >
              Reserve Spot
            </Sheet.Trigger>
          </div>
        </div>
      }
    />
  );
};

export { ExampleCard };
