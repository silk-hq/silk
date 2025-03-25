"use client";
import React from "react";
import { Fixed, Island } from "@silk-hq/components";

import "./page.css";
import { ExampleBottomSheet } from "@/components/examples/BottomSheet/ExampleBottomSheet";
import { ExampleToast } from "@/components/examples/Toast/ExampleToast";
import { ExampleSheetWithKeyboard } from "@/components/examples/SheetWithKeyboard/ExampleSheetWithKeyboard";
import { ExampleSheetWithDetent } from "@/components/examples/SheetWithDetent/ExampleSheetWithDetent";
import { ExampleDetachedSheet } from "@/components/examples/DetachedSheet/ExampleDetachedSheet";
import { ExampleTopSheet } from "@/components/examples/TopSheet/ExampleTopSheet";
import { ExampleLongSheet } from "@/components/examples/LongSheet/ExampleLongSheet";
import { ExamplePage } from "@/components/examples/Page/ExamplePage";
import { ExamplePageFromBottom } from "@/components/examples/PageFromBottom/ExamplePageFromBottom";
import { ExampleSheetWithStackingData } from "@/components/examples/SheetWithStacking/ExampleSheetWithStackingData";
import { ExampleSheetWithStacking } from "@/components/examples/SheetWithStacking/ExampleSheetWithStacking";
import { ExampleSidebar } from "@/components/examples/Sidebar/ExampleSidebar";
import { ExampleCard } from "@/components/examples/Card/ExampleCard";

export default function Home() {
  return (
    <React.StrictMode>
      <body className="Home-root">
        <main className="Home-main">
          <ExampleBottomSheet />
          <ExampleTopSheet />
          <ExampleDetachedSheet />
          <ExampleCard />
          <ExampleSidebar />
          <ExampleToast />
          <ExampleSheetWithStacking data={ExampleSheetWithStackingData} />
          <ExampleSheetWithDetent />
          <ExampleSheetWithKeyboard />
          <ExampleLongSheet />
          <ExamplePage />
          <ExamplePageFromBottom />

          <div className="Home-topBar">
            <div className="Home-topBarContent">Silk</div>
          </div>
        </main>
      </body>
    </React.StrictMode>
  );
}
