import { getScopedI18n } from "@/locales/server";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { El_Messiri, Inter, Rubik } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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
  params: { locale: "ar" | "en" };
  children: ReactNode;
}>) {
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      data-theme="light"
      translate="no"
      className={clsx(inter.variable, messiri.variable, rubik.variable)}
    >
      <body
        className={clsx("bg-base-200", {
          "font-rubik": locale === "ar",
          "font-inter": locale === "en",
        })}
      >
        {children}
      </body>
    </html>
  );
}
