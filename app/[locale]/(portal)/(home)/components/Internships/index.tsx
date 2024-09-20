import { getScopedI18n } from "@/locales/server";
import Image from "next/image";

const Internships = async () => {
  const tAbout = await getScopedI18n("about");

  return (
    <section className="container mx-auto mb-16 px-2">
      <div className="mb-10 flex justify-center">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="h-auto w-2 bg-primary" />
            <h2 className="text-5xl font-bold capitalize">{tAbout("internships.heading")}</h2>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="max-w-md text-justify text-2xl italic">{tAbout("internships.subheading")}</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="card bg-base-100 px-10 py-6 shadow-lg">
          <ul className="prose flex max-w-none list-disc flex-col gap-4 text-xl dark:prose-invert">
            <li> {tAbout("internships.kickStart")}</li>
            <li> {tAbout("internships.getPaid")}</li>
            <li>{tAbout("internships.grow")}</li>
            <li> {tAbout("internships.mentorsRecommendation")}</li>
            <li> {tAbout("internships.beMentored")}</li>
            <li>{tAbout("internships.gain")}</li>
            <li> {tAbout("internships.develop")}</li>
          </ul>
        </div>

        <div className="hidden justify-center lg:flex">
          <Image
            src="/super-hero.png"
            className="h-auto w-[400px] object-contain"
            width={518}
            height={750}
            alt="super-hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Internships;
