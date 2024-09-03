import Button from "@/lib/components/Button";
import Select from "@/lib/components/Inputs/Select";
import { getScopedI18n } from "@/locales/server";
import Image from "next/image";

const Hero = async () => {
  const tAbout = await getScopedI18n("about");
  const tGlobal = await getScopedI18n("global");

  const SEARCH_OPTIONS = [
    { value: "Mentors", label: "Mentors" },
    { value: "Circles", label: "Circles" },
    { value: "Internships", label: "Internships" },
  ];

  const SKILLS_OPTIONS = [
    { value: "All", label: "All" },
    { value: "OOP", label: "OOP" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "Database", label: "Database" },
  ];

  return (
    <section className="hero min-h-[calc(100vh-68px)]">
      <div className="container hero-content mx-auto flex items-center justify-between text-center">
        <div className="max-w-prose">
          <h1 className="text-start text-5xl font-bold">{tAbout("heading")}</h1>
          <h2 className="py-6 text-start text-xl">
            {tAbout("subheading.getPersonalized")}{" "}
            <span className="font-bold">{tAbout("subheading.mentorGuidance")}</span> {tAbout("subheading.from")}{" "}
            <span className="font-bold">{tAbout("subheading.circles")}</span> {tAbout("subheading.toGrow")}{" "}
            <span className="font-bold">{tAbout("subheading.internships")}</span>,{tAbout("subheading.and")}{" "}
            <span className="font-bold">{tAbout("subheading.accelerate")} </span> {tAbout("subheading.yourCareer")}.
          </h2>

          <div className="flex justify-start gap-2">
            <Select
              className="max-w-xs"
              options={SEARCH_OPTIONS}
              placeholder={`${tGlobal("actions.searchFor")}...`}
              defaultValue=""
            />

            <Select
              className="max-w-xs"
              options={SKILLS_OPTIONS}
              placeholder={tAbout("actions.selectSkill")}
              defaultValue=""
            />

            <Button variant="primary">{tAbout("actions.getStarted")}</Button>
          </div>
        </div>

        <div className="hidden flex-col gap-4 lg:flex">
          <Image src="/hero.png" alt="hero" width={300} height={300} className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
