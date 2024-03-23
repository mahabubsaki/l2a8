import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/custom/ui/Navbar/Navbar";
import classNames from "classnames";
import HeroBanner from "@/custom/ui/HeroBanner/HeroBanner";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shinemart",
  description: "Discover the ultimate solution for a spotless kitchen! Explore our range of powerful kitchen cleaners designed to tackle grease, grime, and stains effortlessly. Elevate your cleaning routine and achieve sparkling surfaces with our trusted products. Shop now for a cleaner, healthier kitchen!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={classNames(inter.className)}>

        <HeroBanner />
        <main className='max-w-screen-xl mx-auto '>
          {children}
        </main>
      </body>
    </html>
  );
}
