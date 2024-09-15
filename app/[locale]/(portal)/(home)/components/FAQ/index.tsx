import Collapse from "@/lib/components/Collapse";
import { getScopedI18n } from "@/locales/server";

const FAQ = async () => {
  const tAbout = await getScopedI18n("about");

  return (
    <section className="container mx-auto mb-16">
      <h2 className="mb-8 text-center text-5xl font-bold">{tAbout("faq.heading")}</h2>
      <div className="mt-12 flex justify-center">
        {/* <div className="flex w-1/2 flex-col justify-center gap-4"> */}
        <div className="grid w-4/5 grid-cols-1 gap-4 lg:w-1/2">
          <Collapse
            group="faq"
            title={tAbout("faq.questions.question1")}
            content={
              <div className="flex flex-col gap-2">
                <p>{tAbout("faq.questions.answer1.title")}:</p>
                <ul className="list-disc px-4">
                  <li className="list-item">
                    <span className="font-bold">{tAbout("faq.questions.answer1.point1.head")}</span>
                    {": "}
                    {tAbout("faq.questions.answer1.point1.body")}
                  </li>
                  <li className="list-item">
                    <span className="font-bold">{tAbout("faq.questions.answer1.point2.head")}</span>
                    {": "}
                    {tAbout("faq.questions.answer1.point2.body")}
                  </li>
                  <li className="list-item">
                    <span className="font-bold">{tAbout("faq.questions.answer1.point3.head")}</span>
                    {": "}
                    {tAbout("faq.questions.answer1.point3.body")}
                  </li>
                </ul>
              </div>
            }
          />
          <Collapse group="faq" title={tAbout("faq.questions.question2")} content={tAbout("faq.questions.answer2")} />
          <Collapse group="faq" title={tAbout("faq.questions.question3")} content={tAbout("faq.questions.answer3")} />
          <Collapse group="faq" title={tAbout("faq.questions.question4")} content={tAbout("faq.questions.answer4")} />
          <Collapse
            group="faq"
            title={tAbout("faq.questions.question5")}
            content={
              <div className="flex flex-col gap-2">
                <p>{tAbout("faq.questions.answer5.title")}:</p>
                <ul className="list-disc px-4">
                  <li className="list-item">
                    <span className="font-bold">{tAbout("faq.questions.answer5.point1.head")}</span>
                    {": "}
                    {tAbout("faq.questions.answer5.point1.body")}
                  </li>
                  <li className="list-item">
                    <span className="font-bold">{tAbout("faq.questions.answer5.point2.head")}</span>
                    {": "}
                    {tAbout("faq.questions.answer5.point2.body")}
                  </li>
                  <li className="list-item">
                    <span className="font-bold">{tAbout("faq.questions.answer5.point3.head")}</span>
                    {": "}
                    {tAbout("faq.questions.answer5.point3.body")}
                  </li>
                  <li className="list-item">
                    <span className="font-bold">{tAbout("faq.questions.answer5.point4.head")}</span>
                    {": "}
                    {tAbout("faq.questions.answer5.point4.body")}
                  </li>
                  <li className="list-item">{tAbout("faq.questions.answer5.point5")}</li>
                </ul>
              </div>
            }
          />
          <Collapse
            group="faq"
            title={tAbout("faq.questions.question6")}
            content={
              <div className="flex flex-col gap-2">
                <p>{tAbout("faq.questions.answer6.title")}:</p>
                <ul className="list-disc px-4">
                  <li className="list-item">
                    <span className="font-bold">{tAbout("faq.questions.answer6.point1.head")}</span>
                    {": "}
                    {tAbout("faq.questions.answer6.point1.body")}
                  </li>
                  <li className="list-item">
                    <span className="font-bold">{tAbout("faq.questions.answer6.point2.head")}</span>
                    {": "}
                    {tAbout("faq.questions.answer6.point2.body")}
                  </li>
                  <li className="list-item">
                    <span className="font-bold">{tAbout("faq.questions.answer6.point3.head")}</span>
                    {": "}
                    {tAbout("faq.questions.answer6.point3.body")}
                  </li>
                  <li className="list-item">
                    <span className="font-bold">{tAbout("faq.questions.answer6.point4.head")}</span>
                    {": "}
                    {tAbout("faq.questions.answer6.point4.body")}
                  </li>
                  <li className="list-item">
                    <span className="font-bold">{tAbout("faq.questions.answer6.point5.head")}</span>
                    {": "}
                    {tAbout("faq.questions.answer6.point5.body")}
                  </li>
                </ul>
              </div>
            }
          />

          {/* <Collapse
            group="faq"
            defaultOpen={true}
            title="What are the benefits of posting internships on your platform?"
            content={
              <ul className="flex list-disc flex-col gap-4 px-4">
                <li>
                  Reach a pool of pre-vetted, motivated software engineering students and recent graduates actively
                  seeking internship opportunities.
                </li>
                <li>
                  Reduce time spent on recruitment. Our platform streamlines the process of finding qualified
                  candidates.
                </li>
                <li>
                  Mentorship opportunities. Our platform can connect you with experienced mentors to guide your interns.
                </li>
              </ul>
            }
          /> */}

          {/* <Collapse
            group="faq"
            title="Is there a cost associated with finding an internship through your platform?"
            content="No, It is FREE."
          />

          <Collapse
            group="faq"
            title="How do I apply for an internship?"
            content="Create a profile highlighting your skills and experience. Search for internships and submit your applications directly through our platform. But we recommend that you join circles or be mentored by one of our mentors first to build a robust profile reinforced with history of your journey in our platform."
          /> */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
