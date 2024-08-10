import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const tCirclesGuide = await getScopedI18n("circlesGuide");

  return {
    title: tCirclesGuide("title"),
    description: tCirclesGuide("description"),
  };
}

const CirclesGuide = async () => {
  const tCirclesGuide = await getScopedI18n("circlesGuide");

  return (
    <main className="mx-auto mb-1 mt-6 flex max-w-md flex-col gap-8 rounded-lg bg-white p-9 shadow-md md:max-w-3xl lg:max-w-4xl">
      <section className="prose max-w-none dark:prose-invert">
        <h1 className="text-center">{tCirclesGuide("title")}</h1>
        <p>{tCirclesGuide("description")}</p>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tCirclesGuide("forMentors.sectionTitle")}</h2>
        <div>
          <div>
            <h3>{tCirclesGuide("forMentors.whatAreCircles.title")}</h3>
            <p>{tCirclesGuide("forMentors.whatAreCircles.content")}</p>
          </div>
          <div>
            <h3>{tCirclesGuide("forMentors.howCanYouContribute.title")}</h3>
            <ul>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.howCanYouContribute.point1.head")}</span>{" "}
                {tCirclesGuide("forMentors.howCanYouContribute.point1.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.howCanYouContribute.point2.head")}</span>{" "}
                {tCirclesGuide("forMentors.howCanYouContribute.point2.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.howCanYouContribute.point3.head")}</span>{" "}
                {tCirclesGuide("forMentors.howCanYouContribute.point3.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.howCanYouContribute.point4.head")}</span>{" "}
                {tCirclesGuide("forMentors.howCanYouContribute.point4.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.howCanYouContribute.point5.head")}</span>{" "}
                {tCirclesGuide("forMentors.howCanYouContribute.point5.content")}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h3>{tCirclesGuide("forMentors.creatingARoadmap.title")}</h3>
            <p>{tCirclesGuide("forMentors.creatingARoadmap.content")}</p>
          </div>
          <div>
            <ul>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.creatingARoadmap.point1.head")}</span>{" "}
                {tCirclesGuide("forMentors.creatingARoadmap.point1.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.creatingARoadmap.point2.head")}</span>{" "}
                {tCirclesGuide("forMentors.creatingARoadmap.point2.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.creatingARoadmap.point3.head")}</span>{" "}
                {tCirclesGuide("forMentors.creatingARoadmap.point3.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.creatingARoadmap.point4.head")}</span>{" "}
                {tCirclesGuide("forMentors.creatingARoadmap.point4.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.creatingARoadmap.point5.head")}</span>{" "}
                {tCirclesGuide("forMentors.creatingARoadmap.point5.content")}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h3>{tCirclesGuide("forMentors.buildingAGoodCircle.title")}</h3>
            <p>{tCirclesGuide("forMentors.buildingAGoodCircle.content")}</p>
          </div>
          <div>
            <ul>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.buildingAGoodCircle.point1.head")}</span>{" "}
                {tCirclesGuide("forMentors.buildingAGoodCircle.point1.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.buildingAGoodCircle.point2.head")}</span>{" "}
                {tCirclesGuide("forMentors.buildingAGoodCircle.point2.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.buildingAGoodCircle.point3.head")}</span>{" "}
                {tCirclesGuide("forMentors.buildingAGoodCircle.point3.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.buildingAGoodCircle.point4.head")}</span>{" "}
                {tCirclesGuide("forMentors.buildingAGoodCircle.point4.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentors.buildingAGoodCircle.point5.head")}</span>{" "}
                {tCirclesGuide("forMentors.buildingAGoodCircle.point5.content")}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tCirclesGuide("forMentees.sectionTitle")}</h2>
        <div>
          <div>
            <h3>{tCirclesGuide("forMentees.whatAreCircles.title")}</h3>
            <p>{tCirclesGuide("forMentees.whatAreCircles.content")}</p>
          </div>
          <div>
            <h3>{tCirclesGuide("forMentees.howCanYouBenefit.title")}</h3>
            <ul>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.howCanYouBenefit.point1.head")}</span>{" "}
                {tCirclesGuide("forMentees.howCanYouBenefit.point1.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.howCanYouBenefit.point2.head")}</span>{" "}
                {tCirclesGuide("forMentees.howCanYouBenefit.point2.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.howCanYouBenefit.point3.head")}</span>{" "}
                {tCirclesGuide("forMentees.howCanYouBenefit.point3.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.howCanYouBenefit.point4.head")}</span>{" "}
                {tCirclesGuide("forMentees.howCanYouBenefit.point4.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.howCanYouBenefit.point5.head")}</span>{" "}
                {tCirclesGuide("forMentees.howCanYouBenefit.point5.content")}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h3>{tCirclesGuide("forMentees.expectations.title")}</h3>
          </div>
          <div>
            <ul>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.expectations.point1.head")}</span>{" "}
                {tCirclesGuide("forMentees.expectations.point1.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.expectations.point2.head")}</span>{" "}
                {tCirclesGuide("forMentees.expectations.point2.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.expectations.point3.head")}</span>{" "}
                {tCirclesGuide("forMentees.expectations.point3.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.expectations.point4.head")}</span>{" "}
                {tCirclesGuide("forMentees.expectations.point4.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.expectations.point5.head")}</span>{" "}
                {tCirclesGuide("forMentees.expectations.point5.content")}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h3>{tCirclesGuide("forMentees.gettingStarted.title")}</h3>
          </div>
          <div>
            <ul>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.gettingStarted.point1.head")}</span>{" "}
                {tCirclesGuide("forMentees.gettingStarted.point1.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.gettingStarted.point2.head")}</span>{" "}
                {tCirclesGuide("forMentees.gettingStarted.point2.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.gettingStarted.point3.head")}</span>{" "}
                {tCirclesGuide("forMentees.gettingStarted.point3.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.gettingStarted.point4.head")}</span>{" "}
                {tCirclesGuide("forMentees.gettingStarted.point4.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.gettingStarted.point5.head")}</span>{" "}
                {tCirclesGuide("forMentees.gettingStarted.point5.content")}
              </li>
              <li>
                <span className="font-bold">{tCirclesGuide("forMentees.gettingStarted.point6.head")}</span>{" "}
                {tCirclesGuide("forMentees.gettingStarted.point6.content")}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tCirclesGuide("additionalFeatures.title")}</h2>
        <ul>
          <li>
            <span className="font-bold">{tCirclesGuide("additionalFeatures.point1.head")}</span>{" "}
            {tCirclesGuide("additionalFeatures.point1.content")}
          </li>
          <li>
            <span className="font-bold">{tCirclesGuide("additionalFeatures.point2.head")}</span>{" "}
            {tCirclesGuide("additionalFeatures.point2.content")}
          </li>
          <li>
            <span className="font-bold">{tCirclesGuide("additionalFeatures.point3.head")}</span>{" "}
            {tCirclesGuide("additionalFeatures.point3.content")}
          </li>
          <li>
            <span className="font-bold">{tCirclesGuide("additionalFeatures.point4.head")}</span>{" "}
            {tCirclesGuide("additionalFeatures.point4.content")}
          </li>
          <li>
            <span className="font-bold">{tCirclesGuide("additionalFeatures.point5.head")}</span>{" "}
            {tCirclesGuide("additionalFeatures.point5.content")}
          </li>
        </ul>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tCirclesGuide("conclusion.title")}</h2>
        <p>{tCirclesGuide("conclusion.content")}</p>
      </section>
    </main>
  );
};

export default CirclesGuide;
