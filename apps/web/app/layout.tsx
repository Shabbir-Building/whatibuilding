import { Metadata } from "next";

import "./globals.css";
import { rubik } from "./fonts";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "what i building",
  description: "A sleek, modern platform for building things.",
  icons: {
    icon: [{ url: "/profile-image.jpg", type: "image/jpeg" }],
    apple: [{ url: "/profile-image.jpg", type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B6NHK4DN9F"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B6NHK4DN9F');
          `}
        </Script>
      </head>
      <body className={`${rubik.className} antialiased`}>
        <div className="bg-stone-200 min-h-screen">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
