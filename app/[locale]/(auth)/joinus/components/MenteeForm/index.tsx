"use client";

import { joinAsMentee } from "@/app/[locale]/actions";
import SubmitButton from "@/lib/components/Button/SubmitButton";
import Select from "@/lib/components/Inputs/Select";
import TextInput from "@/lib/components/Inputs/TextInput";
import { useScopedI18n } from "@/locales/client";
import { FormState } from "@/types/forms";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

import { useEffect } from "react";
import { useFormState } from "react-dom";

const fieldsOfInterestOptions = [
  { label: "Web development", value: "web_development" },
  { label: "Mobile Applications", value: "mobile_applications" },
  { label: "Desktop Applications", value: "desktop_applications" },
  { label: "Cloud Computing", value: "cloud_computing" },
  { label: "Data Science", value: "data_science" },
  { label: "Artificial Intelligence", value: "artificial_intelligence" },
  { label: "Machine Learning", value: "machine_learning" },
  { label: "DevOps", value: "devops" },
  { label: "Cybersecurity", value: "cybersecurity" },
  { label: "Game Development", value: "game_development" },
  { label: "Embedded Systems", value: "embedded_systems" },
  { label: "Quality Assurance", value: "quality_assurance" },
  { label: "UI/UX Design", value: "ui_ux_design" },
  { label: "Other", value: "other" },
];

const initialState: FormState = null;

const MenteeForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tGlobalActions = useScopedI18n("global.actions");
  const tJoinUsForm = useScopedI18n("joinUs.form");

  const [state, formAction] = useFormState(joinAsMentee, initialState);

  useEffect(() => {
    if (state?.success) {
      const { email, join_as } = state?.data as any;
      router.push(`/thank-you?email=${email}&join_as=${join_as}`);
    }
  }, [state?.success]);

  return (
    <div className="prose flex h-96 max-w-none flex-col gap-2 dark:prose-invert">
      <h3 className="font-normal">{tJoinUsForm("fillRequiredFields")}.</h3>

      <form action={formAction} className="flex flex-col gap-4">
        <input type="hidden" name="join_as" value="mentee" />
        <TextInput
          type="text"
          name="name"
          label="Name"
          placeholder={tJoinUsForm("fullName")}
          error={state?.errors?.name}
        />
        <TextInput
          name="email"
          label="Name"
          placeholder={tJoinUsForm("email")}
          defaultValue={searchParams.get("email") || ""}
          error={state?.errors?.email}
        />
        <Select
          name="field_of_interests"
          placeholder={tJoinUsForm("fieldsOfInterest")}
          options={fieldsOfInterestOptions}
          error={state?.errors?.field_of_interests}
          defaultValue={searchParams.get("field_of_interests") || ""}
        />
        <SubmitButton variant="primary">{tGlobalActions("submit")}</SubmitButton>
      </form>

      <p role="status" className={clsx("font-bold", { "text-error": !state?.success, "text-success": state?.success })}>
        {state?.message}
      </p>
    </div>
  );
};

export default MenteeForm;
