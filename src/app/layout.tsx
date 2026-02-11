import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rilo | Your AI Payday Spending Coach for Australians",
  description:
    "Stop guessing if you can afford it. Rilo is an AI coach that checks in on payday, paces your spending, and nudges you before you blow the budget. Join the waitlist.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Rilo | Your AI Payday Spending Coach for Australians",
    description:
      "Stop guessing if you can afford it. Rilo is an AI coach that checks in on payday, paces your spending, and nudges you before you blow the budget.",
    type: "website",
  },
  other: {
    "theme-color": "#76a345",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
