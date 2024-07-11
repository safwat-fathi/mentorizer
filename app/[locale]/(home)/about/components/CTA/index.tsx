"use client";

import Button from "@/lib/components/Button";
import Select from "@/lib/components/Inputs/Select";
import TextInput from "@/lib/components/Inputs/TextInput";
import useApi from "@/lib/hooks/useApi";
import { isValidEmail } from "@/lib/utils/validations";
import { useScopedI18n } from "@/locales/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

// todo: add loading UI
// todo: redirect to thanks page

const CTA = () => {
  const tAbout = useScopedI18n("about");
  const tGlobal = useScopedI18n("global");

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [joinAs, setJoinAs] = useState("");

  const { isLoading, mutate } = useApi(`/api/sheets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      joinAs,
    }),
  });

  const handleJoin = async () => {
    try {
      if (!email || !joinAs) {
        toast.error("Please fill out all fields");
        return;
      }

      if (!isValidEmail(email)) {
        toast.error("Please use a valid email");
        return;
      }

      await mutate();

      setEmail("");
      setJoinAs("");

      router.push(`/thank-you?email=${email}&joinAs=${joinAs}`);
    } catch (err: any) {
      toast.error(err.message || "Sorry, something went wrong");
    }
  };

  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white">{tAbout("cta.heading")}</h1>
          <p className="max-w-lg py-6 text-white">{tAbout("cta.subheading")}</p>

          <div className="grid grid-cols-4 items-center gap-4">
            <TextInput
              label="Email"
              type="email"
              containerClassName="col-span-2"
              placeholder={tGlobal("email.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Select
              className="col-span-1"
              options={[
                { label: "Mentor", value: "mentor" },
                { label: "Mentee", value: "mentee" },
                { label: "Company", value: "company" },
              ]}
              placeholder={tGlobal("joinAs.placeholder")}
              value={joinAs}
              onChange={(e) => setJoinAs(e.target.value)}
            />

            <Button type="submit" onClick={handleJoin} variant="accent" loading={isLoading} className="col-span-1">
              {tAbout("cta.joinUs")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
