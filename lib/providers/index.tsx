"use client";

import { PropsWithChildren } from "react";

import { I18nProviderClient } from "@/locales/client";

import Loading from "@/app/[locale]/loading";

export default function Providers({
  children,
  params,
}: PropsWithChildren<{
  params: { locale: string };
}>) {
  return (
    <I18nProviderClient locale={params.locale} fallback={<Loading />}>
      {children}
    </I18nProviderClient>
  );
}
