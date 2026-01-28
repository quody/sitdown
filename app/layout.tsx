import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700"] });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  title: "Sitdown — Lose the standup, keep the updates",
  description: "Sitdown transforms tedious standups into entertaining micro-updates your team actually reads.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
