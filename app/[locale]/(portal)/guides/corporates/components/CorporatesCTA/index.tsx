import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

const CorporatesCTA = async () => {
  const tCorporatesGuide = await getScopedI18n("corporatesGuide");
  const tFooter = await getScopedI18n("global.footer");

  return (
    <section className="mx-auto mb-1 mt-6 flex max-w-md flex-col gap-8 rounded-lg bg-primary p-9 text-primary-content shadow-md md:max-w-3xl lg:max-w-4xl">
      <div className="prose max-w-none dark:prose-invert">
        <h1 className="text-center text-white">{tCorporatesGuide("cta.title")}</h1>
      </div>
      <div className="prose max-w-none dark:prose-invert">
        <p className="text-white">
          <b>{tCorporatesGuide("cta.subtitle.title")}</b> {tCorporatesGuide("cta.subtitle.content")}
        </p>
        <p className="text-white">
          <b>{tCorporatesGuide("cta.takeTheFirstStep.title")}</b> {tCorporatesGuide("cta.takeTheFirstStep.content")}
        </p>
      </div>
      <Link href="/contact-us" className="btn btn-accent flex w-fit items-center capitalize text-white">
        {tFooter("contactUs")} <span className="text-xl rtl:rotate-180">&rarr;</span>
      </Link>
    </section>
  );
};

export default CorporatesCTA;
