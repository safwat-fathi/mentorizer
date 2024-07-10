import { getScopedI18n } from "@/locales/server";
import Image from "next/image";

const Internships = async () => {
  const tAbout = await getScopedI18n("about");
  // const tGlobal = await getScopedI18n("global");

  return (
    <section className="container mx-auto mb-16">
      <div className="flex justify-center mb-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-2 h-auto bg-primary" />
            <h2 className="text-5xl capitalize font-bold">
              {tAbout("internships.heading")}
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl italic max-w-md text-justify">
              One place. Plenty of opportunities.
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="card shadow-lg bg-base-100 py-6 px-10">
          <ul className="list-disc flex flex-col gap-4 text-xl">
            <li>
              Kickstart your journey by finding internships that suit your
              skills and interests.
            </li>
            <li>
              Mentors recommendations can boost your success to get internships.
            </li>
            <li>
              Grow where you are allowed to make mistakes, learn, gain
              experience and build your network with leading tech companies.
            </li>
            <li>
              Be mentored by experienced professionals and gain insights from
              the real world of software development.
            </li>
            <li>Get paid while you learn.</li>
            <li>
              Gain practical experience and feel empowered to take on new
              challenges in your professional career.
            </li>
            <li>
              Develop communication, teamwork, and collaboration skills
              alongside your technical expertise.
            </li>
          </ul>
        </div>

        <div className="lg:flex justify-center hidden">
          <Image
            src="/super-hero.png"
            className="object-contain w-[300px] h-auto"
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
