"use client";

import Button from "@/lib/components/Button";
import Select from "@/lib/components/Inputs/Select";
import TextInput from "@/lib/components/Inputs/TextInput";
// import useApi from "@/lib/hooks/useApi";
import { isValidEmail } from "@/lib/utils/validations";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";

import { MouseEventHandler, useState } from "react";

// todo: add loading UI
// todo: redirect to thanks page

const CTA = () => {
  const tAbout = useScopedI18n("about");
  const tGlobal = useScopedI18n("global");

  const [email, setEmail] = useState("");
  const [joinAs, setJoinAs] = useState("");
  const [error, setError] = useState("");

  // const { isLoading, mutate } = useApi(`/api/sheets`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     email,
  //     join_as: joinAs,
  //   }),
  // });

  const handleJoin: MouseEventHandler<HTMLAnchorElement> = async (e) => {
    try {
      if (!isValidEmail(email)) {
        e.preventDefault();

        setError(tGlobal("formErrors.email"));
        return;
      }
    } catch (err: any) {}
  };

  return (
    <section className="bg-primary px-2 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold capitalize text-white">{tAbout("cta.heading")}</h1>
          <p className="max-w-lg py-6 text-center text-white">{tAbout("cta.subheading")}.</p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <TextInput
              label="Email"
              type="email"
              containerClassName="md:col-span-2"
              placeholder={tGlobal("email.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
            />

            <Select
              className="max-w-xs md:col-span-1"
              options={[
                { label: tGlobal("mentor.label"), value: "mentor" },
                { label: tGlobal("mentee.label"), value: "mentee" },
                { label: tGlobal("organization.label"), value: "organization" },
              ]}
              placeholder={tGlobal("joinAs.placeholder")}
              value={joinAs}
              onChange={(e) => setJoinAs(e.target.value)}
            />

            <Link href={`/join-us?email=${email}&join_as=${joinAs}`} onClick={handleJoin} className="md:col-span-1">
              <Button variant="neutral" className="w-full">
                {tAbout("cta.joinUs")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
