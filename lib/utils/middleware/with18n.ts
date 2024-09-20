import { NextRequest } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";
import { AppLocale } from "@/types";
import { MiddlewareFactory } from "./stack";

const locales: AppLocale[] = ["ar", "en"];

const defaultLocale: AppLocale = "ar";

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale,
  urlMappingStrategy: "rewriteDefault",
});

export const withI18n: MiddlewareFactory = () => {
  return async (request: NextRequest) => {
    return I18nMiddleware(request);
  };
};
