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

  const tGlobalActions = useScopedI18n("global.actions");

  const [state, formAction] = useFormState(joinAsMentor, initialState);

  useEffect(() => {
    if (state?.success) {
      const { email, join_as } = state?.data as any;
      router.push(`/thank-you?email=${email}&join_as=${join_as}`);
    }
  }, [state?.success]);

  return (
    <div className="prose flex h-96 max-w-none flex-col gap-2 dark:prose-invert">
      <h3 className="font-normal">
        Please fill required fields to be on our waiting list, As soon as we launch we will get back to you.
      </h3>

      <form action={formAction} className="flex flex-col gap-4">
        <input type="hidden" name="join_as" value="mentor" />
        <TextInput type="text" name="name" placeholder="Enter your full name" error={state?.errors?.name} />
        <TextInput
          name="email"
          placeholder="Enter your email"
          defaultValue={searchParams.get("email") || ""}
          error={state?.errors?.email}
        />
        <Textarea
          name="expertise"
          rows={2}
          placeholder="Enter your fields of expertise. Use comma (,) for multi entries"
          error={state?.errors?.expertise}
        />
        <Select
          options={experienceOptions}
          placeholder="Years of experience"
          name="experience"
          error={state?.errors?.experience}
        />

        <SubmitButton variant="primary" className="col-span-2">
          {tGlobalActions("submit")}
        </SubmitButton>
      </form>

      <p role="status" className={clsx("font-bold", { "text-error": !state?.success, "text-success": state?.success })}>
        {state?.message}
      </p>
    </div>
  );
};

export default MentorForm;
