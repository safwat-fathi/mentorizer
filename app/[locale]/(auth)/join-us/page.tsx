import Tabs from "@/lib/components/Tabs";
import TabItem from "@/lib/components/Tabs/TabItem";
import MenteeForm from "./components/MenteeForm";
import MentorForm from "./components/MentorForm";

type Props = {
  params: {
    locale: string;
  };
  searchParams: {
    join_as: "mentee" | "mentor";
  };
};

const JoinUs = ({ searchParams }: Props) => {
  const { join_as } = searchParams;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <section className="container mx-auto">
        <div className="prose flex max-w-none items-center justify-center dark:prose-invert">
          <h1>Join Us</h1>
        </div>
      </section>

      <section className="container mx-auto h-96">
        <Tabs className="grid-cols-2">
          <TabItem name="join_us" title="As a Mentee" defaultChecked={join_as === "mentee"}>
            <MenteeForm />
          </TabItem>
          <TabItem name="join_us" title="As a Mentor" defaultChecked={join_as === "mentor"}>
            <MentorForm />
          </TabItem>
        </Tabs>
      </section>
    </main>
  );
};

export default JoinUs;
