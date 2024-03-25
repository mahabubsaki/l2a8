import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
;


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
  if (!process.env.BASE_API_URL) {
    return null;
  }
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={classNames(inter.className)}>
        <main >
          {children}
        </main>
      </body>
    </html>
  );
}
