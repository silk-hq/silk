"use client";
import { VisuallyHidden } from "@silk-hq/components";
import { Card } from "./Card";
import "./ExampleCard.css";

const ExampleCard = () => {
  return (
    <Card.Root>
      <Card.Trigger className="ExampleCard-presentTrigger">Card</Card.Trigger>
      <Card.Portal>
        <Card.View>
          <Card.Backdrop />
          <Card.Content className="ExampleCard-content">
            <Card.Trigger className="ExampleCard-dismissTrigger" action="dismiss">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ExampleCard-dismissIcon"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <VisuallyHidden.Root>Dismiss Sheet</VisuallyHidden.Root>
            </Card.Trigger>
            <div className="ExampleCard-illustration" />
            <div className="ExampleCard-information">
              <Card.Title className="ExampleCard-title">Paint and Sip</Card.Title>
              <Card.Description className="ExampleCard-description">
                Join our art workshop and let your imagination flow. Paint, create, and have fun.
              </Card.Description>
              <Card.Trigger className="ExampleCard-validateTrigger" action="dismiss">
                Reserve Spot
              </Card.Trigger>
            </div>
          </Card.Content>
        </Card.View>
      </Card.Portal>
    </Card.Root>
  );
};

export { ExampleCard };
