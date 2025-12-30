import { Metadata } from "next";

import "./globals.css";
import { rubik } from "./fonts";

export const metadata: Metadata = {
  title: "what i building",
  description: "A sleek, modern platform for building things.",
  icons: {
    icon: "/favicon.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <div className="bg-stone-200 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
