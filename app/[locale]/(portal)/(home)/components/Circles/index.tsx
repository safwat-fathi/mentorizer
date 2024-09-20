import { getScopedI18n } from "@/locales/server";
import Image from "next/image";

const Circles = async () => {
  const tAbout = await getScopedI18n("about");

  return (
    <section className="container mx-auto mb-16 px-2">
      <div className="mb-10 flex justify-center">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="h-auto w-2 bg-primary" />
            <h2 className="text-5xl font-bold capitalize">{tAbout("circles.heading")}</h2>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="max-w-md text-justify text-2xl italic">{tAbout("circles.subheading.youDoNotKnow")}</h3>
            <h3 className="max-w-md bg-primary px-2 py-1 text-justify text-2xl text-primary-content">
              {tAbout("circles.subheading.youDoKnow")}
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden justify-center lg:flex">
          <Image
            src="/coding.png"
            className="h-auto w-[400px] object-contain"
            width={518}
            height={750}
            alt="person-coding"
          />
        </div>

        <div className="card prose max-w-none bg-base-100 px-10 py-6 shadow-lg dark:prose-invert">
          <ul className="flex list-disc flex-col gap-4 text-xl">
            <li>{tAbout("circles.groupOfPeople")}.</li>
            <li>{tAbout("circles.leadBy")}.</li>
            <li>{tAbout("circles.getHelp")}.</li>
            <li>{tAbout("circles.shareYourKnowledge")}.</li>
            <li>{tAbout("circles.earnAchievements")}.</li>
            <li>{tAbout("circles.roadmap")}.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Circles;
