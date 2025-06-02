"use client";
import { useState } from "react";
import { VisuallyHidden } from "@silk-hq/components";
import { SheetWithDetent } from "./SheetWithDetent";
import "./ExampleSheetWithDetent.css";

// ================================================================================================
// Data
// ================================================================================================

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

// ================================================================================================
// Component
// ================================================================================================

const ExampleSheetWithDetent = () => {
  const [activeDetent, setActiveDetent] = useState(0);

  const [searchText, setSearchText] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    `${contact.username} ${contact.company}`.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SheetWithDetent.Root activeDetent={activeDetent} onActiveDetentChange={setActiveDetent}>
      <SheetWithDetent.Trigger className="ExampleSheetWithDetent-presentTrigger">
        Sheet with Detent
      </SheetWithDetent.Trigger>
      <SheetWithDetent.Portal>
        <SheetWithDetent.View>
          <SheetWithDetent.Backdrop />
          <SheetWithDetent.Content className="ExampleSheetWithDetent-content">
            <div className="ExampleSheetWithDetent-header">
              <SheetWithDetent.Handle className="ExampleSheetWithDetent-handle" />
              <VisuallyHidden.Root asChild>
                <SheetWithDetent.Title className="ExampleSheetWithDetent-title">
                  Sheet with Detent
                </SheetWithDetent.Title>
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
            <SheetWithDetent.ScrollRoot asChild>
              <SheetWithDetent.ScrollView className="ExampleSheetWithDetent-scrollView">
                <SheetWithDetent.ScrollContent className="ExampleSheetWithDetent-scrollContent">
                  {filteredContacts.map((contact) => (
                    <div key={contact.id} className="ExampleSheetWithDetent-contactContainer">
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
                </SheetWithDetent.ScrollContent>
              </SheetWithDetent.ScrollView>
            </SheetWithDetent.ScrollRoot>
          </SheetWithDetent.Content>
        </SheetWithDetent.View>
      </SheetWithDetent.Portal>
    </SheetWithDetent.Root>
  );
};

export { ExampleSheetWithDetent };
