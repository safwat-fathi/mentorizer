import { getScopedI18n } from "@/locales/server";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { El_Messiri, Rubik } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { AppLocale } from "@/types";
import Script from "next/script";

const messiri = El_Messiri({ subsets: ["latin"], variable: "--font-messiri" });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export async function generateMetadata(): Promise<Metadata> {
  const tGlobal = await getScopedI18n("global");

  return {
    title: {
      template: `%s | ${tGlobal("title")}`,
      default: tGlobal("title"),
    },
    description: tGlobal("description"),
  };
}

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  params: { locale: AppLocale };
  children: ReactNode;
}>) {
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} data-theme="light" translate="no" className={clsx(messiri.variable, rubik.variable)}>
      <body className="bg-base-200 font-rubik">
        {children}
        {/* <noscript>
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript> */}
      </body>
      <Script
        id="simple-analytics"
        strategy="afterInteractive"
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      />
    </html>
  );
}
