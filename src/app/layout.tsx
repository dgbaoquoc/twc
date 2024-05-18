import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Faster_One, Inter } from "next/font/google";

import SiteFooter from "@/components/layout/site-footer";
import { gta } from "@/configs/fonts";
import BackgroundImage from "../../public/assets/images/twc_background.webp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const fasterOne = Faster_One({
  subsets: ["latin"],
  variable: "--font-faster-one",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "TWC",
  description: "Agency",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          `${inter.className} ${gta.variable} ${fasterOne.variable}`
        )}
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
