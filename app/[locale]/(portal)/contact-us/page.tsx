import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import ContactUsForm from "./components/ContactUsForm";

export async function generateMetadata(): Promise<Metadata> {
  const tContactUs = await getScopedI18n("contactUs");

  return {
    title: tContactUs("title"),
    description: tContactUs("description"),
  };
}

const ContactUs = async () => {
  const tGlobal = await getScopedI18n("global");

  return (
    <main className="container mx-auto">
      <section className="flex min-h-[calc(100vh-68px)] flex-col items-center justify-center gap-8">
        <div className="border-8 border-solid border-primary p-4">
          <h1 className="text-7xl font-semibold">{tGlobal("title")}</h1>
        </div>

        <div className="prose dark:prose-invert">
          <h2>Contact Us</h2>
        </div>

        <ContactUsForm />
      </section>
    </main>
  );
};

export default ContactUs;
