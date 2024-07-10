import Collapse from "@/lib/components/Collapse";

const FAQ = () => {
  return (
    <section className="container mx-auto mb-16">
      <h2 className="font-bold text-5xl mb-8 text-center">FAQs</h2>
      <div className="flex justify-center mt-12">
        <div className="w-1/2 flex flex-col gap-4 justify-center">
          <Collapse
            group="faq"
            defaultOpen={true}
            title="What are the benefits of posting internships on your platform?"
            content={
              <ul className="list-disc flex flex-col gap-4 px-4">
                <li>
                  Reach a pool of pre-vetted, motivated software engineering
                  students and recent graduates actively seeking internship
                  opportunities.
                </li>
                <li>
                  Reduce time spent on recruitment. Our platform streamlines the
                  process of finding qualified candidates.
                </li>
                <li>
                  Mentorship opportunities. Our platform can connect you with
                  experienced mentors to guide your interns.
                </li>
              </ul>
            }
          />

          <Collapse
            group="faq"
            title="What are the qualifications to become a mentor?"
            content="We typically require experience as a software engineer and a passion for guiding others."
          />

          <Collapse
            group="faq"
            title="What kind of support do you offer mentors?"
            content="We provide resources and training materials to help you become an effective mentor. You'll also be part of a supportive community of mentors where you can share experiences and best practices."
          />

          <Collapse
            group="faq"
            title="Is there a cost associated with finding an internship through your platform?"
            content="No, It is FREE."
          />

          <Collapse
            group="faq"
            title="How do I apply for an internship?"
            content="Create a profile highlighting your skills and experience. Search for internships and submit your applications directly through our platform. But we recommend that you join circles or be mentored by one of our mentors first to build a robust profile reinforced with history of your journey in our platform."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
