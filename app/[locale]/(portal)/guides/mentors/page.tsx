import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const tMentorsGuide = await getScopedI18n("mentorsGuide");

  return {
    title: tMentorsGuide("title"),
    description: tMentorsGuide("description"),
  };
}

const MentorsGuide = async () => {
  const tMentorsGuide = await getScopedI18n("mentorsGuide");

  return (
    <main className="mx-auto mb-1 mt-6 flex max-w-md flex-col gap-8 rounded-lg bg-white p-9 shadow-md md:max-w-3xl lg:max-w-4xl">
      <section className="prose max-w-none dark:prose-invert">
        <h1 className="text-center">{tMentorsGuide("title")}</h1>
        <p className="text-center">{tMentorsGuide("description")}</p>
        {/* <p>{tMentorsGuide("thankYou")}</p> */}
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tMentorsGuide("aboutMentorizer")}</h2>
        <p>{tMentorsGuide("aboutMentorizerContent")}</p>
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
            <h3>{tMentorsGuide("circles.title")}</h3>
            <p>{tMentorsGuide("circles.content")}</p>
          </div>
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
          <li>
            <span className="font-bold">{tMentorsGuide("requirementsContent.point1.head")}</span>{" "}
            {tMentorsGuide("requirementsContent.point1.content")}
          </li>
          <li>
            <span className="font-bold">{tMentorsGuide("requirementsContent.point2.head")}</span>{" "}
            {tMentorsGuide("requirementsContent.point2.content")}
          </li>
          <li>
            <span className="font-bold">{tMentorsGuide("requirementsContent.point3.head")}</span>{" "}
            {tMentorsGuide("requirementsContent.point3.content")}
          </li>
          <li>
            <span className="font-bold">{tMentorsGuide("requirementsContent.point4.head")}</span>{" "}
            {tMentorsGuide("requirementsContent.point4.content")}
          </li>
          <li>
            <span className="font-bold">{tMentorsGuide("requirementsContent.point5.head")}</span>{" "}
            {tMentorsGuide("requirementsContent.point5.content")}
          </li>
        </ul>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tMentorsGuide("gettingStarted")}</h2>
        <ol>
          <li>
            <span className="font-bold">{tMentorsGuide("gettingStartedContent.point1.head")}</span>{" "}
            {tMentorsGuide("gettingStartedContent.point1.content")}
          </li>
          <li>
            <span className="font-bold">{tMentorsGuide("gettingStartedContent.point2.head")}</span>{" "}
            {tMentorsGuide("gettingStartedContent.point2.content")}
          </li>
          <li>
            <span className="font-bold">{tMentorsGuide("gettingStartedContent.point3.head")}</span>{" "}
            {tMentorsGuide("gettingStartedContent.point3.content")}
          </li>
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
