import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CredLaw - AI Powered Legal & Credit Repair Platform",
  description: "Advanced dashboard for attorneys, agencies, and clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
