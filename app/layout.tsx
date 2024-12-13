import type { Metadata } from "next";
import "./globals.css";
import ScrollUp from "@/components/ScrollUp";
import localFont from "next/font/local";

const cairo = localFont({
  src: "./fonts/Cairo-Bold.woff2",
  variable: "--cairo",
});

export const metadata: Metadata = {
  title: "Younes Sellimi's Portfolio",
  description: "a portfolio website for Younes Sellimi ",
  icons: ["/favicon.ico"],
  keywords: [
    "portfolio",
    "Full stack developer",
    "Younes Sellimi",
    "Younes Sellimi's Portfolio",
    "React Developer",
    "Python Developer",
    "Next.js Developer",
    "Formakt_bac",
    "web development", "MERN stack developer", "tunisian web developer",
    "an agilest, full stack Developer with experience in designing and developing scalable websites and dashboards to support the digital growth of leading brands in Tunisia. Skilled in creating dynamic, responsive user interfaces with a focus on performance optimization and user-centered designs that enhance engagement and achieve business goals.",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={` ${cairo.variable} antialiased`}>
        <ScrollUp />
        {children}
      </body>
    </html>
  );
}
