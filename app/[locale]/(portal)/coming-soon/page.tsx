import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const tComingSoon = await getScopedI18n("comingSoon");

  return {
    title: tComingSoon("title"),
    description: tComingSoon("description"),
  };
}

const ComingSoon = async () => {
  const tComingSoon = await getScopedI18n("comingSoon");
  const tGlobal = await getScopedI18n("global");

  return (
    <main>
      <section className="container mx-auto flex min-h-[calc(100vh-68px)] items-center justify-center">
        <div className="flex items-center gap-8">
          <div>
            <Image src="/delivery-vespa.png" width={251} height={148} alt="" />
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="border-8 border-solid border-primary p-4">
              <h1 className="text-7xl font-semibold">{tGlobal("title")}</h1>
              <h2 className="flex items-center whitespace-nowrap text-4xl font-medium">
                {tComingSoon("heading.one")}
                <span className="block h-1.5 w-6 self-end bg-primary"></span>
                {tComingSoon("heading.two")}
              </h2>
            </div>

            <p className="text-2xl">{tComingSoon("subheading")}</p>

            <Link href="/" className="btn btn-outline flex">
              {tGlobal("actions.goHome")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ComingSoon;
