import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Supreme Nimble Aid Foundation - Creating Change Together",
  description: "Official website of Supreme Nimble Aid Foundation (SNAID). Empowering lives and building brighter futures.",
  icons: {
    icon: '/SNAFpng09.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${nunitoSans.variable} antialiased font-sans flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
