"use client";
import React, { useContext } from "react";
import { Sheet } from "@silk-hq/components";
import { TopSheet } from "./TopSheet";
import "./ExampleTopSheet.css";

import { SheetDismissButton } from "@/components/examples/_GenericComponents/SheetDismissButton/SheetDismissButton";
import { SheetTriggerCard } from "@/components/app/SheetTriggerCard/SheetTriggerCard";

const ExampleTopSheet = () => {
  return (
    <TopSheet
      presentTrigger={
        <SheetTriggerCard color="red">Top Sheet</SheetTriggerCard>
      }
      sheetContent={
        <div className="ExampleTopSheet-root">
          <Sheet.Trigger action="dismiss" asChild>
            <SheetDismissButton className="ExampleTopSheet-dismissTrigger" />
          </Sheet.Trigger>
          <div className="ExampleTopSheet-information">
            <Sheet.Title className="ExampleTopSheet-title">
              Serene Haven is Available
            </Sheet.Title>
            <div className="ExampleTopSheet-illustration" />
            <Sheet.Description className="ExampleTopSheet-description">
              Your dream home, Serene Haven, is ready for you. A rare blend of
              luxury and charm—don’t miss it!
            </Sheet.Description>
            <Sheet.Trigger
              className="ExampleTopSheet-validateTrigger"
              action="dismiss"
            >
              Book it Now
            </Sheet.Trigger>
          </div>
        </div>
      }
    />
  );
};

export { ExampleTopSheet };
