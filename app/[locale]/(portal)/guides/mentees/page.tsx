import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const tMenteesGuide = await getScopedI18n("menteesGuide");

  return {
    title: tMenteesGuide("title"),
    description: tMenteesGuide("description"),
  };
}

const MenteesGuide = async () => {
  const tMenteesGuide = await getScopedI18n("menteesGuide");

  return (
    <main className="mx-auto mb-1 mt-6 flex max-w-md flex-col gap-8 rounded-lg bg-white p-9 shadow-md md:max-w-3xl lg:max-w-4xl">
      <section className="prose max-w-none dark:prose-invert">
        <h1 className="text-center">{tMenteesGuide("welcome.title")}</h1>
        <p>{tMenteesGuide("welcome.content")}</p>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tMenteesGuide("gettingStarted.title")}</h2>
        <h3>{tMenteesGuide("gettingStarted.signUpAndProfileSetup.title")}</h3>
        <ul>
          <li>
            <span className="font-bold">
              {tMenteesGuide("gettingStarted.signUpAndProfileSetup.content.point1.head")}
            </span>{" "}
            {tMenteesGuide("gettingStarted.signUpAndProfileSetup.content.point1.content")}
          </li>
          <li>
            <span className="font-bold">
              {tMenteesGuide("gettingStarted.signUpAndProfileSetup.content.point2.head")}
            </span>{" "}
            {tMenteesGuide("gettingStarted.signUpAndProfileSetup.content.point2.content")}
          </li>
        </ul>

        <h3>{tMenteesGuide("gettingStarted.findingMentor.title")}</h3>
        <ul>
          <li>
            <span className="font-bold">{tMenteesGuide("gettingStarted.findingMentor.content.point1.head")}</span>{" "}
            {tMenteesGuide("gettingStarted.findingMentor.content.point1.content")}
          </li>
          <li>
            <span className="font-bold">{tMenteesGuide("gettingStarted.findingMentor.content.point2.head")}</span>{" "}
            {tMenteesGuide("gettingStarted.findingMentor.content.point2.content")}
          </li>
        </ul>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tMenteesGuide("makingTheMost.title")}</h2>
        <h3>{tMenteesGuide("makingTheMost.settingGoals.title")}</h3>
        <ul>
          <li>
            <span className="font-bold">{tMenteesGuide("makingTheMost.settingGoals.content.point1.head")}</span>{" "}
            {tMenteesGuide("makingTheMost.settingGoals.content.point1.content")}
          </li>
          <li>
            <span className="font-bold">{tMenteesGuide("makingTheMost.settingGoals.content.point2.head")}</span>{" "}
            {tMenteesGuide("makingTheMost.settingGoals.content.point2.content")}
          </li>
        </ul>

        <h3>{tMenteesGuide("makingTheMost.schedulingSessions.title")}</h3>
        <ul>
          <li>
            <span className="font-bold">{tMenteesGuide("makingTheMost.schedulingSessions.content.point1.head")}</span>{" "}
            {tMenteesGuide("makingTheMost.schedulingSessions.content.point1.content")}
          </li>
          <li>
            <span className="font-bold">{tMenteesGuide("makingTheMost.schedulingSessions.content.point2.head")}</span>{" "}
            {tMenteesGuide("makingTheMost.schedulingSessions.content.point2.content")}
          </li>
        </ul>

        <h3>{tMenteesGuide("makingTheMost.feedbackAndReflection.title")}</h3>
        <ul>
          <li>
            <span className="font-bold">
              {tMenteesGuide("makingTheMost.feedbackAndReflection.content.point1.head")}
            </span>{" "}
            {tMenteesGuide("makingTheMost.feedbackAndReflection.content.point1.content")}
          </li>
          <li>
            <span className="font-bold">
              {tMenteesGuide("makingTheMost.feedbackAndReflection.content.point2.head")}
            </span>{" "}
            {tMenteesGuide("makingTheMost.feedbackAndReflection.content.point2.content")}
          </li>
        </ul>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tMenteesGuide("unlockingPotential.title")}</h2>

        <div>
          <h3>{tMenteesGuide("unlockingPotential.mockInterviews.title")}</h3>
          <p>{tMenteesGuide("unlockingPotential.mockInterviews.content")}</p>
        </div>
        <div>
          <h3>{tMenteesGuide("unlockingPotential.cvReviews.title")}</h3>
          <p>{tMenteesGuide("unlockingPotential.cvReviews.content")}</p>
        </div>
        <div>
          <h3>{tMenteesGuide("unlockingPotential.skillSessions.title")}</h3>
          <p>{tMenteesGuide("unlockingPotential.skillSessions.content")}</p>
        </div>
      </section>
    </main>
  );
};

export default MenteesGuide;
