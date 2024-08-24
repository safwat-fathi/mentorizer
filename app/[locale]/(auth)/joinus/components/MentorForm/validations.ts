import { getScopedI18n } from "@/locales/server";
import { z } from "zod";

export const MentorFormSchema = async () => {
  const tGlobalFormErrors = await getScopedI18n("global.formErrors");

  return z.object({
    join_as: z.string().optional().default("mentor"),
    name: z
      .string({
        required_error: tGlobalFormErrors("required"),
        invalid_type_error: "Name is only a string",
      })
      .min(2, { message: tGlobalFormErrors("minLength", { minLength: 2 }) }),
    email: z.string().email({ message: tGlobalFormErrors("email") }),
    expertise: z.string({ required_error: tGlobalFormErrors("required") }),
    experience: z.string({ required_error: tGlobalFormErrors("required") }),
  });
};
