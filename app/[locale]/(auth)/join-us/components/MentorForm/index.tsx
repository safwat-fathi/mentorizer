"use client";

import { joinAsMentor } from "@/app/[locale]/actions";
import SubmitButton from "@/lib/components/Button/SubmitButton";
import Select from "@/lib/components/Inputs/Select";
import Textarea from "@/lib/components/Inputs/Textarea";
import TextInput from "@/lib/components/Inputs/TextInput";
import { useScopedI18n } from "@/locales/client";
import { FormState } from "@/types/forms";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

import { useEffect } from "react";
import { useFormState } from "react-dom";

const experienceOptions = [
  { label: "3-5 Years", value: "3-5" },
  { label: "6-10 Years", value: "6-10" },
  { label: "More than 10 Years", value: "more than 10" },
];

const initialState: FormState = null;

const MentorForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tGlobal = useScopedI18n("global");
  const tJoinUsForm = useScopedI18n("joinUs.form");

  const [state, formAction] = useFormState(joinAsMentor, initialState);

  useEffect(() => {
    if (state?.success) {
      const { email, join_as } = state?.data as any;
      router.push(`/thank-you?email=${email}&join_as=${join_as}`);
    }
  }, [state?.success, state?.data]);

  return (
    <div className="prose flex max-w-none flex-col gap-2 dark:prose-invert">
      <h3 className="font-normal">{tJoinUsForm("fillRequiredFields")}.</h3>

      <form action={formAction} className="flex flex-col gap-4">
        <input type="hidden" name="join_as" value="mentor" />
        <TextInput type="text" name="name" placeholder={tGlobal("fullName.placeholder")} error={state?.errors?.name} />
        <TextInput
          name="email"
          placeholder={tGlobal("email.placeholder")}
          defaultValue={searchParams.get("email") || ""}
          error={state?.errors?.email}
        />
        <Textarea name="expertise" rows={2} placeholder={tJoinUsForm("expertise")} error={state?.errors?.expertise} />
        <Select
          options={experienceOptions}
          placeholder={tJoinUsForm("experience")}
          name="experience"
          error={state?.errors?.experience}
          defaultValue={searchParams.get("experience") || ""}
        />

        <SubmitButton variant="primary" className="col-span-2">
          {tGlobal("actions.submit")}
        </SubmitButton>
      </form>

      <p role="status" className={clsx("font-bold", { "text-error": !state?.success, "text-success": state?.success })}>
        {state?.message}
      </p>
    </div>
  );
};

export default MentorForm;
