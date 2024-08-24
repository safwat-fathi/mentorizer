import Tabs from "@/lib/components/Tabs";
import TabItem from "@/lib/components/Tabs/TabItem";
import MenteeForm from "./components/MenteeForm";
import MentorForm from "./components/MentorForm";
import { notFound } from "next/navigation";
import { SheetsService } from "@/lib/services/sheets.service";
import Joined from "./components/Joined";

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
  const { email, join_as } = searchParams;

  const rows = await sheetService.searchColumn("email", email);

  // if (rows.length) return "You have registered already!";

  if (!join_as) return notFound();

  return (
    <main className="container mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-10">
      <section>
        <div className="prose flex max-w-none items-center justify-center dark:prose-invert">
          <h1>Join Us @ Mentorizer</h1>
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
