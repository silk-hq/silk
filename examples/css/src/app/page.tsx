"use client";
import React from "react";

import "./page.css";
import { ExampleBottomSheet } from "@/components/BottomSheet/ExampleBottomSheet";
import { ExampleToast } from "@/components/Toast/ExampleToast";
import { ExampleSheetWithKeyboard } from "@/components/SheetWithKeyboard/ExampleSheetWithKeyboard";
import { ExampleSheetWithDetent } from "@/components/SheetWithDetent/ExampleSheetWithDetent";
import { ExampleDetachedSheet } from "@/components/DetachedSheet/ExampleDetachedSheet";
import { ExampleTopSheet } from "@/components/TopSheet/ExampleTopSheet";
import { ExampleLongSheet } from "@/components/LongSheet/ExampleLongSheet";
import { ExamplePage } from "@/components/Page/ExamplePage";
import { ExamplePageFromBottom } from "@/components/PageFromBottom/ExamplePageFromBottom";
import { ExampleSheetWithStacking } from "@/components/SheetWithStacking/ExampleSheetWithStacking";
import { ExampleSidebar } from "@/components/Sidebar/ExampleSidebar";
import { ExampleCard } from "@/components/Card/ExampleCard";

export default function Home() {
  return (
    <main className="Home-main">
      <ExampleBottomSheet />
      <ExampleTopSheet />
      <ExampleDetachedSheet />
      <ExampleCard />
      <ExampleSidebar />
      <ExampleToast />
      <ExampleSheetWithStacking />
      <ExampleSheetWithDetent />
      <ExampleSheetWithKeyboard />
      <ExampleLongSheet />
      <ExamplePage />
      <ExamplePageFromBottom />

      <div className="Home-topBar">
        <div className="Home-topBarContent">Silk</div>
      </div>
    </main>
  );
}
