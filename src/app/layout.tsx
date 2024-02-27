import "../styles/globals.css";

// import "../assets/css/bootstrap.min.css";
// import "../assets/css/magnific-popup.css";
// import "../assets/css/swiper-bundle.min.css";
// import "../assets/css/animate.css";
// // import "../assets/css/custom-font.css";
// // import "../assets/css/fontawesome.css";
// import "../assets/css/aos.css";
// import "../assets/css/icomoon.css";
// import "../assets/css/main.css";
// import "../assets/css/app.min.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/layout/site-header";
import { cn } from "@/lib/utils";
import SiteFooter from "@/components/layout/site-footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TWC",
  description: "Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:wght@600;700&family=Familjen+Grotesk:wght@600;700&family=Inter:wght@400;600&family=Libre+Baskerville:wght@700&family=Syne:wght@600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="assets/css/animate.css" />
        <link rel="stylesheet" href="assets/css/custom-font.css" />
        <link rel="stylesheet" href="assets/css/fontawesome.css" />
        <link rel="stylesheet" href="assets/css/aos.css" />
        <link rel="stylesheet" href="assets/css/icomoon.css" />

        <link rel="stylesheet" href="assets/css/main.css" />
        <link rel="stylesheet" href="assets/css/app.min.css" />
      </head>
      <body className={cn("light", inter.className)}>
        <SiteHeader />
        {children}
        <SiteFooter />

        <Script src="assets/js/jquery-3.6.0.min.js" />
        <Script src="assets/js/bootstrap.bundle.min.js" />
        <Script src="assets/js/aos.js" />
        <Script src="assets/js/menu/menu.js" />
        <Script src="assets/js/gsap.min.js" />
        <Script src="assets/js/isotope.pkgd.min.js" />
        <Script src="assets/js/jquery.magnific-popup.min.js" />
        <Script src="assets/js/swiper-bundle.min.js" />
        <Script src="assets/js/countdown.js" />
        <Script src="assets/js/wow.min.js" />
        <Script src="assets/js/SplitText.min.js" />
        <Script src="assets/js/ScrollTrigger.min.js" />
        <Script src="assets/js/ScrollSmoother.min.js" />
        <Script src="assets/js/skill-bar.js" />

        <Script src="assets/js/faq.js" />
        <Script src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyArZVfNvjnLNwJZlLJKuOiWHZ6vtQzzb1Y" />

        <Script src="assets/js/app.js" />
      </body>
    </html>
  );
}
