"use client";
import { Toast } from "./Toast";
import "./ExampleToast.css";

const ExampleToast = () => {
  return (
    <Toast.Root>
      <Toast.Trigger className="ExampleToast-presentTrigger">Toast</Toast.Trigger>
      <Toast.Portal>
        <Toast.View>
          <Toast.Content>
            <div className="ExampleToast-root">
              <div className="ExampleToast-illustration" />
              <Toast.Title className="ExampleToast-title">Message from Luca</Toast.Title>
              <Toast.Description className="ExampleToast-description">
                How about Japanese? I'm good to meet up at 8.
              </Toast.Description>
            </div>
          </Toast.Content>
        </Toast.View>
      </Toast.Portal>
    </Toast.Root>
  );
};

export { ExampleToast };
