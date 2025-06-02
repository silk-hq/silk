"use client";
import { useContext, useState } from "react";
import {
  Sheet,
  Scroll,
  VisuallyHidden,
  useClientMediaQuery,
} from "@silk-hq/components";

import { SheetWithDetent } from "./SheetWithDetent";
import { SheetTriggerCard } from "@/components/app/SheetTriggerCard/SheetTriggerCard";
import "./ExampleSheetWithDetent.css";

const contacts = [
  {
    id: 1,
    username: "Emma Schmidt",
    company: "Blue Horizon",
  },
  {
    id: 2,
    username: "Liam Müller",
    company: "Evergreen Solutions",
  },
  {
    id: 3,
    username: "Olivia Dupont",
    company: "Nova Ventures",
  },
  {
    id: 4,
    username: "Noah García",
    company: "Bridges Collective",
  },
  {
    id: 5,
    username: "Ava Rossi",
    company: "Vivid Ideas",
  },
  {
    id: 6,
    username: "Sophia Ivanova",
    company: "Rise Solutions",
  },
  {
    id: 7,
    username: "Mason Petrov",
    company: "Infinite Horizons",
  },
  {
    id: 8,
    username: "Isabella Silva",
    company: "Lumen Ventures",
  },
  {
    id: 9,
    username: "James Nielsen",
    company: "NextWave Enterprises",
  },
  {
    id: 10,
    username: "Amelia Leclair",
    company: "Momentum Group",
  },
  {
    id: 11,
    username: "Elijah Kowalski",
    company: "Prime Solutions",
  },
  {
    id: 12,
    username: "Charlotte Bernard",
    company: "Strive Collective",
  },
  {
    id: 13,
    username: "Benjamin Svensson",
    company: "VenturePoint",
  },
  {
    id: 14,
    username: "Mia Fernández",
    company: "Pioneer Collective",
  },
  {
    id: 15,
    username: "Henry Novak",
    company: "Horizon Enterprises",
  },
];

const ExampleSheetWithDetent = () => {
  //
  // Contact search

  const [searchText, setSearchText] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    `${contact.username} ${contact.company}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <SheetWithDetent
      presentTrigger={
        <SheetTriggerCard color="green">Sheet with Detent</SheetTriggerCard>
      }
      sheetContent={({ setActiveDetent, reachedLastDetent }) => (
        <div className="ExampleSheetWithDetent-root">
          <div className="ExampleSheetWithDetent-header">
            <Sheet.Handle className="ExampleSheetWithDetent-handle" />
            <VisuallyHidden.Root asChild>
              <Sheet.Title className="ExampleSheetWithDetent-title">
                Sheet with Detent
              </Sheet.Title>
            </VisuallyHidden.Root>
            <input
              className="ExampleSheetWithDetent-input"
              type="text"
              placeholder="Search for a contact"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setActiveDetent(2)}
            />
          </div>
          <Scroll.Root asChild>
            <Scroll.View
              className="ExampleSheetWithDetent-scrollView"
              scrollGestureTrap={{ yEnd: true }}
              scrollGesture={!reachedLastDetent ? false : "auto"}
              safeArea="layout-viewport"
              onScrollStart={{
                dismissKeyboard: true,
              }}
            >
              <Scroll.Content className="ExampleSheetWithDetent-scrollContent">
                {filteredContacts.map((contact: any) => (
                  <div
                    key={contact.id}
                    className="ExampleSheetWithDetent-contactContainer"
                  >
                    <div className="ExampleSheetWithDetent-contactAvatar" />
                    <div className="ExampleSheetWithDetent-contactDetails">
                      <div className="ExampleSheetWithDetent-contactFullname">
                        {contact.username}
                      </div>
                      <div className="ExampleSheetWithDetent-contactCompany">
                        {contact.company}
                      </div>
                    </div>
                  </div>
                ))}
              </Scroll.Content>
            </Scroll.View>
          </Scroll.Root>
        </div>
      )}
    />
  );
};

export { ExampleSheetWithDetent };
