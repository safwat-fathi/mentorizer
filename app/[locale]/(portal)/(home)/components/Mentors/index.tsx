import { getScopedI18n } from "@/locales/server";
import Image from "next/image";

const Mentors = async () => {
  const tAbout = await getScopedI18n("about");

  return (
    <section className="container mx-auto mb-16">
      <div className="mb-10 flex justify-center">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="h-auto w-2 bg-primary" />
            <h2 className="text-5xl font-bold capitalize">{tAbout("mentors.heading")}</h2>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="max-w-md text-justify text-2xl italic">{tAbout("mentors.subheading.teaching")}</h3>
            <h3 className="max-w-md bg-primary px-2 py-1 text-justify text-2xl text-primary-content">
              {tAbout("mentors.subheading.empower")}
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden justify-center lg:flex">
          <Image src="/launch.png" className="h-auto w-[400px] object-contain" width={518} height={750} alt="launch" />
        </div>

        <div className="card prose max-w-none bg-base-100 px-10 py-6 shadow-lg dark:prose-invert">
          <ul className="flex list-disc flex-col gap-4 text-xl">
            <li>{tAbout("mentors.schedule")}</li>
            <li>{tAbout("mentors.share")}</li>
            <li>{tAbout("mentors.trends")}</li>
            <li>{tAbout("mentors.develop")}</li>
            <li>{tAbout("mentors.connect")}</li>
            <li>{tAbout("mentors.learnFrom")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
