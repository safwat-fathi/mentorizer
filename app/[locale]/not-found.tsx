import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getScopedI18n } from "@/locales/server";

export async function generateMetaData(): Promise<Metadata> {
  const tGlobalError = await getScopedI18n("global.error");

  return {
    title: tGlobalError("notFound"),
    description: tGlobalError("notFound"),
  };
}

export default async function NotFound() {
  const tGlobalError = await getScopedI18n("global.error");
  const tGlobalActions = await getScopedI18n("global.actions");

  return (
    <main className="container mx-auto h-screen flex items-center justify-center">
      <div className="flex flex-wrap justify-center lg:items-start lg:justify-normal lg:gap-8">
        <div className="flex items-center justify-center">
          <Image
            src="/404.png"
            alt="404-Error"
            width={424}
            height={205}
            className="object-contain"
          />
        </div>

        <div className="max-w-sm flex flex-col gap-4 justify-between">
          <h1 className="text-7xl font-bold">{tGlobalError("notFound")}</h1>

          <div className="flex">
            <Link href="/" className="btn btn-outline">
              {tGlobalActions("goHome")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
