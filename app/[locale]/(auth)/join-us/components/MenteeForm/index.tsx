"use client";

import { joinUsAction } from "@/app/[locale]/actions";
import SubmitButton from "@/lib/components/Button/SubmitButton";
import Select from "@/lib/components/Inputs/Select";
import TextInput from "@/lib/components/Inputs/TextInput";
import { useScopedI18n } from "@/locales/client";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

const MenteeForm = () => {
  const tGlobalActions = useScopedI18n("global.actions");

  const [state, formAction] = useFormState(joinUsAction, initialState);

  return (
    <div className="prose flex max-w-none flex-col gap-2 dark:prose-invert">
      <h3 className="font-normal">
        Please fill required fields to be on our waiting list, as soon as we launch we will get back to you.
      </h3>

      <form action={formAction} className="flex flex-col gap-4">
        <input type="hidden" name="join_as" value="mentor" />
        <TextInput
          type="text"
          name="name"
          label="Name"
          placeholder="Enter your full name"
          required
          minLength={3}
          maxLength={50}
        />
        <TextInput type="email" name="name" label="Name" placeholder="Enter your email" required />
        <Select
          placeholder="Fields Of Interest"
          name="fields_of_interest"
          options={[
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
          ]}
          required
        />
        <SubmitButton variant="primary">{tGlobalActions("submit")}</SubmitButton>
      </form>

      <p>{state?.message}</p>
    </div>
  );
};

export default MenteeForm;
