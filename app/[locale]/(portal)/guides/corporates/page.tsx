import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import CorporatesCTA from "./components/CorporatesCTA";

export async function generateMetadata(): Promise<Metadata> {
  const tCorporatesGuide = await getScopedI18n("corporatesGuide");

  return {
    title: tCorporatesGuide("title"),
    description: tCorporatesGuide("description"),
  };
}

const CorporatesGuide = async () => {
  const tCorporatesGuide = await getScopedI18n("corporatesGuide");

  return (
    <main className="mx-auto mb-1 mt-6 flex max-w-md flex-col gap-8 rounded-lg bg-white p-9 shadow-md md:max-w-3xl lg:max-w-4xl">
      <section className="prose max-w-none dark:prose-invert">
        <h1 className="text-center">{tCorporatesGuide("title")}</h1>
        <p>{tCorporatesGuide("introduction")}</p>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tCorporatesGuide("benefitsForOrganizations.sectionTitle")}</h2>
        <div>
          <div>
            <h3>{tCorporatesGuide("benefitsForOrganizations.unlockingPotential.title")}</h3>
            <p>{tCorporatesGuide("benefitsForOrganizations.unlockingPotential.content")}</p>
          </div>
          <div>
            <h3>{tCorporatesGuide("benefitsForOrganizations.fosteringInnovation.title")}</h3>
            <p>{tCorporatesGuide("benefitsForOrganizations.fosteringInnovation.content")}</p>
          </div>
          <div>
            <h3>{tCorporatesGuide("benefitsForOrganizations.buildingTalent.title")}</h3>
            <p>{tCorporatesGuide("benefitsForOrganizations.buildingTalent.content")}</p>
          </div>
        </div>
      </section>

      <section className="prose max-w-none dark:prose-invert">
        <h2>{tCorporatesGuide("services.sectionTitle")}</h2>
        <div>
          <div>
            <h3>{tCorporatesGuide("services.postInternships.title")}</h3>
            <p>{tCorporatesGuide("services.postInternships.content")}</p>
          </div>
          <div>
            <h3>{tCorporatesGuide("services.hostMeetups.title")}</h3>
            <p>{tCorporatesGuide("services.hostMeetups.content")}</p>
          </div>
          <div>
            <h3>{tCorporatesGuide("services.organizeHackathons.title")}</h3>
            <p>{tCorporatesGuide("services.organizeHackathons.content")}</p>
          </div>
          <div>
            <h3>{tCorporatesGuide("services.customMentorshipPrograms.title")}</h3>
            <p>{tCorporatesGuide("services.customMentorshipPrograms.content")}</p>
          </div>
          <div>
            <h3>{tCorporatesGuide("services.workshopsAndSessions.title")}</h3>
            <p>{tCorporatesGuide("services.workshopsAndSessions.content")}</p>
          </div>
        </div>
      </section>

      <CorporatesCTA />
    </main>
  );
};

export default CorporatesGuide;
