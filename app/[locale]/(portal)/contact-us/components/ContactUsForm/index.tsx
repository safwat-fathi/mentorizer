"use client";

import { contactUs } from "@/app/[locale]/actions";
import SubmitButton from "@/lib/components/Button/SubmitButton";
import Textarea from "@/lib/components/Inputs/Textarea";
import TextInput from "@/lib/components/Inputs/TextInput";
import { useScopedI18n } from "@/locales/client";
import { FormState } from "@/types/forms";

import { useFormState } from "react-dom";

const initialState: FormState = null;

const ContactUsForm = () => {
  const tContactUs = useScopedI18n("contactUs");
  const tGlobal = useScopedI18n("global");

  const [state, formAction] = useFormState(contactUs, initialState);

  return (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-start gap-4 md:w-[30rem]">
        {!state?.success ? (
          <form action={formAction} className="flex w-full flex-col gap-4">
            <TextInput
              name="name"
              placeholder={`${tGlobal("name.placeholder")} / ${tGlobal("organization.placeholder")}`}
              error={state?.errors?.email}
            />
            <TextInput name="email" placeholder={tGlobal("email.placeholder")} error={state?.errors?.email} />
            <Textarea
              placeholder={tContactUs("suggestionsPlaceholder")}
              name="message"
              rows={3}
              error={state?.errors?.message}
            />

            <SubmitButton variant="primary">{tGlobal("actions.submit")}</SubmitButton>
          </form>
        ) : (
          <p role="status" className="font-bold text-success">
            {state?.message}
          </p>
        )}

        {state?.errors && (
          <p role="status" className="font-bold text-error">
            {state?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUsForm;
