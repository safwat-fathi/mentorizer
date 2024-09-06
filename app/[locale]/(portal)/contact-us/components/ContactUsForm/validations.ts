import { getScopedI18n } from "@/locales/server";
import { z } from "zod";

export const ContactUsFormSchema = async () => {
  const tGlobalFormErrors = await getScopedI18n("global.formErrors");

  return z.object({
    email: z.string().email({ message: tGlobalFormErrors("email") }),
    message: z
      .string()
      .min(1, tGlobalFormErrors("required"))
      .max(500, tGlobalFormErrors("maxLength", { maxLength: 500 })),
  });
};
