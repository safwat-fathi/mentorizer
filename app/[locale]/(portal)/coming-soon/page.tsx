import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";

import ContactUsForm from "../contact-us/components/ContactUsForm";

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
    <main className="container mx-auto">
      <section className="flex min-h-[calc(100vh-68px)] flex-col items-center justify-center gap-8">
        <div className="border-8 border-solid border-primary p-4">
          <h1 className="text-7xl font-semibold">{tGlobal("title")}</h1>
          <h2 className="mt-4 flex items-center whitespace-nowrap text-4xl font-medium">
            {tComingSoon("heading.one")}
            <span className="block h-1.5 w-6 self-end bg-primary"></span>
            {tComingSoon("heading.two")}
          </h2>
        </div>

        {/* <div className="prose dark:prose-invert">
          <h2>{tComingSoon("subheading")}</h2>
        </div> */}

        <div className="prose dark:prose-invert">
          <h4>{tComingSoon("suggestionsLabel")}</h4>
        </div>

        <ContactUsForm />
      </section>
    </main>
  );
};

export default ComingSoon;
