import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const MainFont = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multi-Vendor : E-Commerce ",
  description:
    "It is a platform where different vendors will create there e-commerce software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MainFont.className} antialiased`}>{children}</body>
    </html>
  );
}

/***
 * Very Important file, Go to this file and add your layout, header, footer, sidebar, etc. in this file. This file will be used in all pages.
 */
