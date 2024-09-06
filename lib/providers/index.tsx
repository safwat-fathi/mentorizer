"use client";

import { PropsWithChildren } from "react";

import { I18nProviderClient } from "@/locales/client";

import { ToastContainer } from "react-toastify";
import Loading from "@/app/[locale]/loading";

export default function Providers({
  children,
  params,
}: PropsWithChildren<{
  params: { locale: string };
}>) {
  const isRTL = params.locale === "ar";
  const toastPosition = isRTL ? "top-left" : "top-right";

  return (
    <>
      <ToastContainer rtl={isRTL} position={toastPosition} />
      <I18nProviderClient locale={params.locale} fallback={<Loading />}>
        {children}
      </I18nProviderClient>
    </>
  );
}
