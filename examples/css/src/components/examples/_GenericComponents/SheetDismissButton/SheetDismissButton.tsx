"use client";
import { VisuallyHidden } from "@silk-hq/components";
import "./SheetDismissButton.css";
import React from "react";

const SheetDismissButton = ({ className, variant, ref, ...restProps }: any) => {
   return (
      <button className={`SheetDismissButton-root variant-${variant} ${className}`} {...restProps} ref={ref}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`SheetDismissButton-icon variant-${variant}`}
         >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
         </svg>
         <VisuallyHidden.Root>Dismiss Sheet</VisuallyHidden.Root>
      </button>
   );
};

export { SheetDismissButton };
