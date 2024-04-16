import { Pathnames } from "next-intl/navigation";

export const locales = ["vi", "en"] as const;

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;

export const contacts = {
  facebook: "https://www.facebook.com/thewannabecommercial",
  instagram: "https://www.instagram.com/i.twc.i",
  email: "bookus@twccom.co",
  phone: "84866422784",
}
