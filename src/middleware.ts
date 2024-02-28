import createMiddleware from "next-intl/middleware";
import { localePrefix, locales, pathnames } from "@/configs/site";

export default createMiddleware({
  defaultLocale: "vi",
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  matcher: ["/", "/(vi|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
