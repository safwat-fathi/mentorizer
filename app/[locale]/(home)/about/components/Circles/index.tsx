import { getScopedI18n } from "@/locales/server";
import Image from "next/image";

const Circles = async () => {
  const tAbout = await getScopedI18n("about");
  const tGlobal = await getScopedI18n("global");

  return (
    <section className="container mx-auto mb-16">
      <div className="flex justify-center mb-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-2 h-auto bg-primary" />
            <h2 className="text-5xl capitalize font-bold">
              {tAbout("circles.heading")}
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl italic max-w-md text-justify">
              {tAbout("circles.subheading.youDoNotKnow")}
            </h3>
            <h3 className="text-2xl px-2 py-1 max-w-md text-justify bg-primary text-primary-content">
              {tAbout("circles.subheading.youDoKnow")}
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:flex justify-center hidden">
          <Image
            src="/coding.png"
            className="object-contain w-[300px] h-auto"
            width={518}
            height={750}
            alt="person-coding"
          />
        </div>

        <div className="card shadow-lg bg-base-100 py-6 px-10">
          <ul className="list-disc flex flex-col gap-4 text-xl">
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
