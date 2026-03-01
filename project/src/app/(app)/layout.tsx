import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";

const MainFont = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ekādhāra",
  description:
    "It is a platform where different vendors will create their e-commerce software.",
};

/**
 * Root layout component that renders the top-level HTML structure and provides tooltip context to descendants.
 *
 * @param children - The page content to render inside the layout; it will be wrapped by a TooltipProvider.
 * @returns The root `<html lang="en">` element containing a `<body>` with the configured font and `antialiased` class, where `children` are wrapped by the TooltipProvider.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MainFont.className} antialiased`}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}