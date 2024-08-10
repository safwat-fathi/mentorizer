"use client";

import { joinUsAction } from "@/app/[locale]/actions";
import SubmitButton from "@/lib/components/Button/SubmitButton";
import Select from "@/lib/components/Inputs/Select";
import Textarea from "@/lib/components/Inputs/Textarea";
import TextInput from "@/lib/components/Inputs/TextInput";
import { useScopedI18n } from "@/locales/client";
import { FormState } from "@/types/forms";
import clsx from "clsx";
import { useFormState } from "react-dom";

const initialState: FormState = {
  message: "",
};

const MentorForm = () => {
  const tGlobalActions = useScopedI18n("global.actions");

  const [state, formAction] = useFormState(joinUsAction, initialState);

  return (
    <div className="prose flex max-w-none flex-col gap-2 dark:prose-invert">
      <h3 className="font-normal">
        Please fill required fields to be on our waiting list, as soon as we launch we will get back to you.
      </h3>

      <form action={formAction} className="grid grid-cols-2 gap-4">
        <input type="hidden" name="join_as" value="mentee" />
        <TextInput
          type="text"
          name="name"
          placeholder="Enter your full name"
          required
          minLength={3}
          inputCLassName={clsx({ "input-error": state.errors && state.errors["name"] })}
        />
        <TextInput
          type="email"
          name="email"
          placeholder="Enter your email"
          inputCLassName={clsx({ "input-error": state.errors && state.errors["email"] })}
          required
        />
        <Textarea
          name="expertise"
          rows={1}
          placeholder="Enter your fields of expertise. Separated by comma , for multi entries"
          className={clsx({ "input-error": state.errors && state.errors["expertise"] })}
          required
          minLength={2}
          maxLength={300}
        />
        <Select
          className={clsx({ "input-error": state.errors && state.errors["experience"] })}
          options={[
            { label: "3-5 Years", value: "3-5" },
            { label: "6-10 Years", value: "6-10" },
            { label: "More than 10 Years", value: "more than 10" },
          ]}
          placeholder="Years of experience"
          name="experience"
          required
        />

        <SubmitButton variant="primary" className="col-span-2">
          {tGlobalActions("submit")}
        </SubmitButton>
      </form>

      <p>{state?.message}</p>
      {/* <p>{state?.errors && state?.errors.map(error => typeof error === "string" && error)}</p> */}
    </div>
  );
};

export default MentorForm;
