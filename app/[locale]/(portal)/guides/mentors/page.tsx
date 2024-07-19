import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // const tAbout = await getScopedI18n("about");

  return {
    title: "Mentors Guide",
    description: "A guide to help mentors understand the platform and their role",
  };
}

const MentorsGuide = async () => {
  const tMentorsGuide = await getScopedI18n("mentorsGuide");

  return (
    <main className="mx-auto mb-1 mt-6 flex max-w-md flex-col gap-8 rounded-lg bg-white p-9 shadow-md md:max-w-3xl lg:max-w-4xl">
      <section className="prose max-w-none dark:prose-invert">
        <h1>{tMentorsGuide("welcome")}</h1>
        <p>{tMentorsGuide("thankYou")}</p>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tMentorsGuide("aboutMentorizer")}</h2>
        <p>
          {tMentorsGuide("aboutMentorizerContent")}
          {/* Mentorizer is an online education platform designed to connect mentors with individuals seeking guidance in
          various areas. Our mission is to provide a supportive environment where knowledge and skills can be shared
          effectively. */}

          {/* Mentorizer is an online platform that empowers the next generation of programmers through mentorship. We
          connect experienced programmers (mentors) with beginners (mentees) to foster knowledge sharing, skill
          development, and career growth. Companies can leverage Mentorizer to discover new talent and build strong
          programming teams */}
        </p>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tMentorsGuide("whatCanHelp")}</h2>
        <ul>
          <li>{tMentorsGuide("whatCanHelpContent.point1")}</li>
          <li>{tMentorsGuide("whatCanHelpContent.point2")}</li>
          <li>{tMentorsGuide("whatCanHelpContent.point3")}</li>
          <li>{tMentorsGuide("whatCanHelpContent.point4")}</li>
        </ul>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tMentorsGuide("servicesOffer")}</h2>
        <div>
          <div>
            <h3>{tMentorsGuide("mockInterviews.title")}</h3>
            <p>{tMentorsGuide("mockInterviews.content")}</p>
          </div>
          <div>
            <h3>{tMentorsGuide("softSkills.title")}</h3>
            <p>{tMentorsGuide("softSkills.content")}</p>
          </div>
          <div>
            <h3>{tMentorsGuide("techSkills.title")}</h3>
            <p>{tMentorsGuide("techSkills.content")}</p>
          </div>
          <div>
            <h3>{tMentorsGuide("cvReview.title")}</h3>
            <p>{tMentorsGuide("cvReview.content")}</p>
          </div>
        </div>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tMentorsGuide("requirements")}</h2>
        <ul>
          <li>{tMentorsGuide("requirementsContent.point1")}</li>
          <li>{tMentorsGuide("requirementsContent.point2")}</li>
          <li>{tMentorsGuide("requirementsContent.point3")}</li>
          <li>{tMentorsGuide("requirementsContent.point4")}</li>
          <li>{tMentorsGuide("requirementsContent.point5")}</li>
        </ul>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tMentorsGuide("gettingStarted")}</h2>
        <ol>
          <li>{tMentorsGuide("gettingStartedContent.point1")}</li>
          <li>{tMentorsGuide("gettingStartedContent.point2")}</li>
          <li>{tMentorsGuide("gettingStartedContent.point3")}</li>
        </ol>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tMentorsGuide("conclusion")}</h2>
        <p>{tMentorsGuide("conclusionContent")}</p>
      </section>
    </main>
  );
};

export default MentorsGuide;
