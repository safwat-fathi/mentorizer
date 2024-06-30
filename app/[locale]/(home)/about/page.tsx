import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import Circles from "./components/Circles";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Internships from "./components/Internships";
import Mentors from "./components/Mentors";

export async function generateMetadata(): Promise<Metadata> {
  const tAbout = await getScopedI18n("about");

  return {
    title: tAbout("title"),
  };
}

const AboutUs = () => {
  return (
    <main>
      <Hero />
      <Circles />
      <Internships />
      <Mentors />
      <FAQ />
      <CTA />
    </main>
  );
};

export default AboutUs;
