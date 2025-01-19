import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./_components/Footer";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Young Laywers' Forum | Abuja Branch",
  description: "The website of the Nigeria Bar Association Young Laywers' Forum in Abuja",
  metadataBase: new URL("https://www.nbaylfabuja.org/"),
};

export const revalidate = 1800 // revalidate at most every 30 mins

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`)}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
