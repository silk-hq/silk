"use client";
import { useContext } from "react";
import { Sheet } from "@silk-hq/components";
import { Toast } from "./Toast";
import "./ExampleToast.css";

import { SheetTriggerCard } from "@/components/app/SheetTriggerCard/SheetTriggerCard";

const ExampleToast = () => {
  return (
    <Toast
      presentTrigger={<SheetTriggerCard color="blue">Toast</SheetTriggerCard>}
      sheetContent={
        <div className="ExampleToast-root">
          <div className="ExampleToast-illustration" />
          <Sheet.Title className="ExampleToast-title">
            Message from Luca
          </Sheet.Title>
          <Sheet.Description className="ExampleToast-description">
            How about Japanese? I’m good to meet up at 8.
          </Sheet.Description>
        </div>
      }
    />
  );
};

export { ExampleToast };
