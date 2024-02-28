import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "@/configs/site";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === "vi"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../messages/vi.json")
        : import(`../messages/${locale}.json`))
    ).default,
  };
});
