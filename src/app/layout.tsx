import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolioMeta } from "@/data/portfolio";
import { buildRootMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={portfolioMeta.lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07090d] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
