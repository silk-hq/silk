"use client";
import { DetachedSheet } from "./DetachedSheet";
import "./ExampleDetachedSheet.css";

const ExampleDetachedSheet = () => {
  return (
    <DetachedSheet.Root>
      <DetachedSheet.Trigger className="ExampleDetachedSheet-presentTrigger">
        Detached Sheet
      </DetachedSheet.Trigger>
      <DetachedSheet.Portal>
        <DetachedSheet.View>
          <DetachedSheet.Backdrop />
          <DetachedSheet.Content>
            <div className="ExampleDetachedSheet-root">
              <DetachedSheet.Handle className="ExampleDetachedSheet-handle" />
              <div className="ExampleDetachedSheet-illustration" />
              <div className="ExampleDetachedSheet-information">
                <DetachedSheet.Title className="ExampleDetachedSheet-title">
                  Your Meal is Coming
                </DetachedSheet.Title>
                <DetachedSheet.Description className="ExampleDetachedSheet-description">
                  Your food is on its way and will arrive soon! Sit back and get ready to enjoy your
                  meal.
                </DetachedSheet.Description>
              </div>
              <DetachedSheet.Trigger
                className="ExampleDetachedSheet-validateTrigger"
                action="dismiss"
              >
                Got it
              </DetachedSheet.Trigger>
            </div>
          </DetachedSheet.Content>
        </DetachedSheet.View>
      </DetachedSheet.Portal>
    </DetachedSheet.Root>
  );
};

export { ExampleDetachedSheet };
