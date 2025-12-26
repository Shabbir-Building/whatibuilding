import { Metadata } from "next";

export const metadata: Metadata = {
  title: "whatibuilding",
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
      <body>{children}</body>
    </html>
  );
}
