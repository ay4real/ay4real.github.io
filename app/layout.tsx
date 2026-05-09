import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayomide Ogbede, C.itp, MCPN",
  description: "Ayomide Ogbede's Portfolio",
  generator: "Ay4real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
