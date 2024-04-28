import localFont from "next/font/local";

export const gta = localFont({
  variable: "--font-gta",
  src: [
    // Extrabold
    {
      path: "../../public/assets/twc_fonts/GTAmericaLCG-ExpBd.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/assets/twc_fonts/GTAmericaLCG-ExpBdIt.otf",
      weight: "900",
      style: "italic",
    },
    // Bold
    {
      path: "../../public/assets/twc_fonts/GTAmericaLCG-ExpBl.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/twc_fonts/GTAmericaLCG-ExpBlIt.otf",
      weight: "700",
      style: "italic",
    },
    // Medium
    {
      path: "../../public/assets/twc_fonts/GTAmericaLCG-ExpMd.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/twc_fonts/GTAmericaLCG-ExpMdIt.otf",
      weight: "500",
      style: "italic",
    },
    // Regular
    {
      path: "../../public/assets/twc_fonts/GTAmericaLCG-ExpRg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/twc_fonts/GTAmericaLCG-ExpRgIt.otf",
      weight: "400",
      style: "italic",
    },
    // Light
    {
      path: "../../public/assets/twc_fonts/GTAmericaLCG-ExpLt.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/twc_fonts/GTAmericaLCG-ExpLtIt.otf",
      weight: "300",
      style: "italic",
    },
  ],
});
