import { SheetsService } from "@/lib/services/sheets.service";
import { getScopedI18n } from "@/locales/server";

import { notFound, redirect } from "next/navigation";
import { getCookieAction } from "../../actions";
import { Metadata } from "next";

type Props = {
  searchParams: {
    email?: string;
    join_as?: string;
  };
};

export async function generateMetadata(): Promise<Metadata> {
  const tThankYou = await getScopedI18n("thankYou");

  return {
    title: tThankYou("title"),
    description: tThankYou("description"),
  };
}

const ThankYou = async ({ searchParams }: Props) => {
  const tThankYou = await getScopedI18n("thankYou");

  const { email, join_as } = searchParams;

  let emailToUse = email;
  let joinAsToUse = join_as;

  if (!emailToUse) {
    const registered = await getCookieAction("registered");

    if (!registered) redirect(`/join-us?join_as=${join_as || "mentee"}`);

    const registeredData = JSON.parse(registered) as { email: string; join_as: "mentor" | "mentee" };

    emailToUse = registeredData.email;
    joinAsToUse = registeredData.join_as;
  } else if (emailToUse) {
    const sheetService = SheetsService.Instance();

    const rows = await sheetService.searchColumn("email", emailToUse);

    if (!rows.length) notFound();
  } else notFound();

  return (
    <main>
      <section className="container mx-auto flex min-h-[calc(100vh-68px)] flex-col justify-center gap-6">
        <h1 className="text-7xl font-medium">
          {tThankYou("heading.one")} <span className="font-messiri font-bold">{tThankYou("heading.mentorizer")}</span>{" "}
          {tThankYou("heading.two")}
        </h1>

        <h2 className="text-2xl font-medium">{tThankYou("subheading")}.</h2>

        <h2 className="text-4xl font-medium">{tThankYou("yourDetails")}</h2>

        <div className="flex flex-col gap-2 bg-primary p-4 text-primary-content">
          <h2 className="text-2xl font-medium">
            {tThankYou("labels.email")}: {emailToUse}
          </h2>
          <h2 className="text-2xl font-medium">
            {tThankYou("labels.joinedAs")}: {joinAsToUse}
          </h2>
        </div>

        {/* <div className="flex flex-col items-start gap-4">
          <h2 className="max-w-md text-2xl font-medium">{tThankYou("reachUs")}</h2>

          <Link href="/contact-us" className="btn btn-primary w-52">
            {tThankYou("actions.contactUs")}
          </Link>
        </div> */}
      </section>
    </main>
  );
};

export default ThankYou;
