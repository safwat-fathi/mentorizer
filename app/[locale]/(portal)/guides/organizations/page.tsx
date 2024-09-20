import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import CorporatesCTA from "./components/CorporatesCTA";

export async function generateMetadata(): Promise<Metadata> {
  const torganizationsGuide = await getScopedI18n("organizationsGuide");

  return {
    title: torganizationsGuide("title"),
    description: torganizationsGuide("description"),
  };
}

const organizationsGuide = async () => {
  const torganizationsGuide = await getScopedI18n("organizationsGuide");

  return (
    <main className="mx-auto mb-1 mt-6 flex max-w-md flex-col gap-8 rounded-lg bg-white p-9 shadow-md md:max-w-3xl lg:max-w-4xl">
      <section className="prose max-w-none dark:prose-invert">
        <h1 className="text-center">{torganizationsGuide("title")}</h1>
        <p>{torganizationsGuide("introduction")}</p>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{torganizationsGuide("benefitsForOrganizations.sectionTitle")}</h2>
        <div>
          <div>
            <h3>{torganizationsGuide("benefitsForOrganizations.unlockingPotential.title")}</h3>
            <p>{torganizationsGuide("benefitsForOrganizations.unlockingPotential.content")}</p>
          </div>
          <div>
            <h3>{torganizationsGuide("benefitsForOrganizations.fosteringInnovation.title")}</h3>
            <p>{torganizationsGuide("benefitsForOrganizations.fosteringInnovation.content")}</p>
          </div>
          <div>
            <h3>{torganizationsGuide("benefitsForOrganizations.buildingTalent.title")}</h3>
            <p>{torganizationsGuide("benefitsForOrganizations.buildingTalent.content")}</p>
          </div>
        </div>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{torganizationsGuide("services.sectionTitle")}</h2>
        <div>
          <div>
            <h3>{torganizationsGuide("services.postInternships.title")}</h3>
            <p>{torganizationsGuide("services.postInternships.content")}</p>
          </div>
          <div>
            <h3>{torganizationsGuide("services.hostMeetups.title")}</h3>
            <p>{torganizationsGuide("services.hostMeetups.content")}</p>
          </div>
          <div>
            <h3>{torganizationsGuide("services.organizeHackathons.title")}</h3>
            <p>{torganizationsGuide("services.organizeHackathons.content")}</p>
          </div>
          <div>
            <h3>{torganizationsGuide("services.customMentorshipPrograms.title")}</h3>
            <p>{torganizationsGuide("services.customMentorshipPrograms.content")}</p>
          </div>
          <div>
            <h3>{torganizationsGuide("services.workshopsAndSessions.title")}</h3>
            <p>{torganizationsGuide("services.workshopsAndSessions.content")}</p>
          </div>
        </div>
      </section>

      <CorporatesCTA />
    </main>
  );
};

export default organizationsGuide;
