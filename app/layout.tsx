import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exodia",
  description: "All Kerala Tech Gala",
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
