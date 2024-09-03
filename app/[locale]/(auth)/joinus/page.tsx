import Tabs from "@/lib/components/Tabs";
import TabItem from "@/lib/components/Tabs/TabItem";
import MenteeForm from "./components/MenteeForm";
import MentorForm from "./components/MentorForm";
import { notFound } from "next/navigation";
import { SheetsService } from "@/lib/services/sheets.service";
import Joined from "./components/Joined";
import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const tJoinUs = await getScopedI18n("joinUs");

  return {
    title: tJoinUs("title"),
    description: tJoinUs("description"),
  };
}

type Props = {
  params: {
    locale: string;
  };
  searchParams: {
    email: string;
    join_as: "mentee" | "mentor";
  };
};

const sheetService = SheetsService.Instance();

const JoinUs = async ({ searchParams }: Props) => {
  const tJoinUs = await getScopedI18n("joinUs");

  const { email, join_as } = searchParams;

  const rows = await sheetService.searchColumn("email", email);

  if (!join_as) return notFound();

  return (
    <main className="container mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-10">
      <section>
        <div className="prose flex max-w-none items-center justify-center dark:prose-invert">
          <h1>{tJoinUs("joinUs")}</h1>
        </div>
      </section>

      <section>
        {rows.length ? (
          <Joined />
        ) : (
          <Tabs className="grid-cols-2" defaultValue={join_as || "mentee"}>
            <TabItem value="mentee" title="As a Mentee">
              <MenteeForm />
            </TabItem>
            <TabItem value="mentor" title="As a Mentor">
              <MentorForm />
            </TabItem>
          </Tabs>
        )}
      </section>
    </main>
  );
};

export default JoinUs;
