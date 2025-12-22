import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Is My Dog Okay? | 24/7 Vet Answers in Minutes",
  description:
    "Warm, trustworthy dog veterinary bridge page that connects stressed pet parents to a certified JustAnswer Dog Vet in minutes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}

