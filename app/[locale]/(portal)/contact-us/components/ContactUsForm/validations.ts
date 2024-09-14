import { getScopedI18n } from "@/locales/server";
import { z } from "zod";

export const ContactUsFormSchema = async () => {
  const tGlobalFormErrors = await getScopedI18n("global.formErrors");

  return z.object({
    name: z
      .string({
        required_error: tGlobalFormErrors("required"),
        invalid_type_error: tGlobalFormErrors("stringOnly"),
      })
      .regex(/^[a-zA-Z0-9 ]+$/, tGlobalFormErrors("lettersOnly"))
      .min(2, { message: tGlobalFormErrors("minLength", { minLength: 2 }) }),
    email: z.string().email({ message: tGlobalFormErrors("email") }),
    message: z
      .string()
      .min(1, tGlobalFormErrors("required"))
      .max(500, tGlobalFormErrors("maxLength", { maxLength: 500 })),
  });
};
