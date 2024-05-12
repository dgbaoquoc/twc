import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Faster_One } from "next/font/google";
import Script from "next/script";

import SiteFooter from "@/components/layout/site-footer";
import BackgroundImage from "../../public/assets/images/twc_background.webp";
import { gta } from "@/configs/fonts";

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
      <head>
        <link rel="stylesheet" href="assets/css/app.min.css" />
      </head>
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
