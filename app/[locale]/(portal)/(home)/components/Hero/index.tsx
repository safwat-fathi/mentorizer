import Select from "@/lib/components/Inputs/Select";
import { getScopedI18n } from "@/locales/server";
import Image from "next/image";
import Link from "next/link";

const SKILLS = [
  { value: "All", label: "All" },
  { value: "OOP", label: "OOP" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "Database", label: "Database" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Python", label: "Python" },
  { value: "Java", label: "Java" },
  { value: "C#", label: "C#" },
  { value: "C++", label: "C++" },
  { value: "Ruby", label: "Ruby" },
  { value: "PHP", label: "PHP" },
  { value: "Swift", label: "Swift" },
  { value: "Kotlin", label: "Kotlin" },
  { value: "Go", label: "Go" },
  { value: "Rust", label: "Rust" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "React", label: "React" },
  { value: "Angular", label: "Angular" },
  { value: "Vue.js", label: "Vue.js" },
  { value: "Node.js", label: "Node.js" },
  { value: "Django", label: "Django" },
  { value: "Flask", label: "Flask" },
  { value: "Spring", label: "Spring" },
  { value: "Laravel", label: "Laravel" },
  { value: "ASP.NET", label: "ASP.NET" },
  { value: "SQL", label: "SQL" },
  { value: "NoSQL", label: "NoSQL" },
  { value: "Git", label: "Git" },
  { value: "Docker", label: "Docker" },
  { value: "Kubernetes", label: "Kubernetes" },
  { value: "AWS", label: "AWS" },
  { value: "Azure", label: "Azure" },
  { value: "Google Cloud", label: "Google Cloud" },
  { value: "Machine Learning", label: "Machine Learning" },
  { value: "Testing", label: "Testing" },
  { value: "QA", label: "QA" },
  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
  { value: "DevOps", label: "DevOps" },
  { value: "Blockchain", label: "Blockchain" },
  { value: "Big Data", label: "Big Data" },
  { value: "Cybersecurity", label: "Cybersecurity" },
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "Mobile Development", label: "Mobile Development" },
  { value: "Embedded Systems", label: "Embedded Systems" },
];

const Hero = async () => {
  const tAbout = await getScopedI18n("about");
  const tGlobal = await getScopedI18n("global");

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
              options={[
                { label: tGlobal("mentor.label"), value: "mentors" },
                { label: tGlobal("circles.label"), value: "circles" },
                { value: "Internships", label: tGlobal("internships.label") },
              ]}
              placeholder={`${tGlobal("actions.searchFor")}...`}
              defaultValue=""
            />

            <Select options={SKILLS} placeholder={tAbout("actions.selectSkill")} defaultValue="" />

            <Link href="/coming-soon" className="btn btn-primary">
              {tAbout("actions.getStarted")}
            </Link>
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
