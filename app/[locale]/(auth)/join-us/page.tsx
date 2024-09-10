import Tabs from "@/lib/components/Tabs";
import TabItem from "@/lib/components/Tabs/TabItem";
import MenteeForm from "./components/MenteeForm";
import MentorForm from "./components/MentorForm";
import { redirect } from "next/navigation";
import { SheetsService } from "@/lib/services/sheets.service";

import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import { getCookieAction } from "../../actions";

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

const JoinUs = async ({ searchParams }: Props) => {
  const tJoinUs = await getScopedI18n("joinUs");

  const { email, join_as } = searchParams;

  const registered = await getCookieAction("registered");

  if (registered) {
    const data = JSON.parse(registered) as { email: string; join_as: "mentor" | "mentee" };
    const { email, join_as } = data;

    redirect(`/thank-you?email=${email}&join_as=${join_as}`);
  }

  const sheetService = SheetsService.Instance();

  const rows = await sheetService.searchColumn("email", email);

  if (rows.length) redirect(`/thank-you?email=${email}&join_as=${join_as}`);

  return (
    <main className="container mx-auto flex max-w-lg flex-col items-center gap-4">
      <section className="flex min-h-[10rem] items-center justify-center">
        <div className="prose flex max-w-none items-center justify-center dark:prose-invert">
          <h1>{tJoinUs("joinUs")}</h1>
        </div>
      </section>

      <section>
        <Tabs className="grid-cols-2" name="join_as" defaultTab={join_as || "mentee"}>
          <TabItem value="mentee" title={tJoinUs("form.joinAsMentee")}>
            <MenteeForm />
          </TabItem>
          <TabItem value="mentor" title={tJoinUs("form.joinAsMentor")}>
            <MentorForm />
          </TabItem>
        </Tabs>
      </section>
    </main>
  );
};

export default JoinUs;
