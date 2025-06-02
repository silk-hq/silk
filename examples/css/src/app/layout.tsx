import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Silk Examples – CSS",
   description: "Examples for Silk using CSS for styling",
   other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
   },
};
export const viewport: Viewport = {
   themeColor: "rgb(255, 255, 255)",
   width: "device-width",
   initialScale: 1,
   viewportFit: "cover",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" className={inter.className} suppressHydrationWarning>
         <body>{children}</body>
      </html>
   );
}
