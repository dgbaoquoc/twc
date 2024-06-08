import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Faster_One, Inter } from "next/font/google";

import SiteFooter from "@/components/layout/site-footer";
import { gta } from "@/configs/fonts";
import BackgroundImage from "../../public/assets/images/twc_background.webp";
import { siteConfig } from "@/configs/site";

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
  metadataBase: new URL(siteConfig.publicUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  robots: {
    follow: true,
    index: true,
  },
  keywords: [
    "twc",
    "marketting",
    "media",
    "agency",
    "marketing agency",
    "branding",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.publicUrl,
    siteName: siteConfig.title,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" suppressHydrationWarning className="scrollbar-hide">
      <head />
      <body
        className={cn(
          `${inter.className} ${gta.variable} ${fasterOne.variable}`,
        )}
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
