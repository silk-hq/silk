"use client";
import { BottomSheet } from "./BottomSheet";
import "./ExampleBottomSheet.css";

const ExampleBottomSheet = () => {
  return (
    <BottomSheet.Root>
      <BottomSheet.Trigger className="ExampleBottomSheet-presentTrigger">
        Bottom Sheet
      </BottomSheet.Trigger>
      <BottomSheet.Portal>
        <BottomSheet.View>
          <BottomSheet.Backdrop />
          <BottomSheet.Content className="ExampleBottomSheet-content">
            <BottomSheet.Handle className="ExampleBottomSheet-handle" />
            <div className="ExampleBottomSheet-illustration" />
            <div className="ExampleBottomSheet-information">
              <BottomSheet.Title className="ExampleBottomSheet-title">
                Activity Added to Your Calendar
              </BottomSheet.Title>
              <BottomSheet.Description className="ExampleBottomSheet-description">
                Your activity has been successfully scheduled. We'll send you a reminder as the date
                approaches.
              </BottomSheet.Description>
            </div>
            <BottomSheet.Trigger className="ExampleBottomSheet-validateTrigger" action="dismiss">
              Got it
            </BottomSheet.Trigger>
          </BottomSheet.Content>
        </BottomSheet.View>
      </BottomSheet.Portal>
    </BottomSheet.Root>
  );
};

export { ExampleBottomSheet };
