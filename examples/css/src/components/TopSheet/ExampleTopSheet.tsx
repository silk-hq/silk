"use client";
import { TopSheet } from "./TopSheet";
import { VisuallyHidden } from "@silk-hq/components";
import "./ExampleTopSheet.css";

const ExampleTopSheet = () => {
  return (
    <TopSheet.Root>
      <TopSheet.Trigger className="ExampleTopSheet-presentTrigger">Top Sheet</TopSheet.Trigger>
      <TopSheet.Portal>
        <TopSheet.View>
          <TopSheet.Backdrop />
          <TopSheet.Content className="ExampleTopSheet-content">
            <TopSheet.Trigger className="ExampleTopSheet-dismissTrigger" action="dismiss">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ExampleTopSheet-dismissIcon"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <VisuallyHidden.Root>Dismiss Sheet</VisuallyHidden.Root>
            </TopSheet.Trigger>
            <div className="ExampleTopSheet-information">
              <TopSheet.Title className="ExampleTopSheet-title">
                Serene Haven is Available
              </TopSheet.Title>
              <div className="ExampleTopSheet-illustration" />
              <TopSheet.Description className="ExampleTopSheet-description">
                Your dream home, Serene Haven, is ready for you. A rare blend of luxury and
                charm—don't miss it!
              </TopSheet.Description>
              <TopSheet.Trigger className="ExampleTopSheet-validateTrigger" action="dismiss">
                Book it Now
              </TopSheet.Trigger>
            </div>
          </TopSheet.Content>
        </TopSheet.View>
      </TopSheet.Portal>
    </TopSheet.Root>
  );
};

export { ExampleTopSheet };
