"use server";

import { revalidateTag } from "next/cache";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

import CONSTANTS from "@/lib/constants";
import { AuthenticationData } from "@/types/models/auth.model";
import { FormState } from "@/types/forms";
import { MenteeFormSchema } from "./(auth)/join-us/components/MenteeForm/validations";
import { ZodError } from "zod";
import { getScopedI18n } from "@/locales/server";
import { MentorFormSchema } from "./(auth)/join-us/components/MentorForm/validations";
import { arrayToObject } from "@/lib/utils/forms";
import { SheetsService } from "@/lib/services/sheets.service";

export async function setCookieAction(name: string, value: string, options: Partial<ResponseCookie> = {}) {
  cookies().set({
    name,
    value,
    httpOnly: true,
    path: "/",
    ...options,
  });
}

export async function getAuthDataAction(): Promise<AuthenticationData | null> {
  const access_token = await getCookieAction(CONSTANTS.ACCESS_TOKEN);
  const refresh_token = await getCookieAction(CONSTANTS.REFRESH_TOKEN);
  const expires = await getCookieAction(CONSTANTS.EXPIRES);
  const expires_at = await getCookieAction(CONSTANTS.EXPIRES_AT);

  if (!access_token || !refresh_token || !expires || !expires_at) return null;

  return {
    access_token,
    refresh_token,
    expires: +expires,
    expires_at: +expires_at,
  };
}

export async function setAuthDataAction(data: AuthenticationData | null) {
  if (!data || !data.access_token || !data.refresh_token || !data.expires || !data.expires_at) {
    await deleteCookieAction(CONSTANTS.ACCESS_TOKEN);
    await deleteCookieAction(CONSTANTS.REFRESH_TOKEN);
    await deleteCookieAction(CONSTANTS.EXPIRES);
    await deleteCookieAction(CONSTANTS.EXPIRES_AT);

    return;
  }

  await setCookieAction(CONSTANTS.ACCESS_TOKEN, data.access_token, {
    secure: process.env.NODE_ENV === "production",
  });

  await setCookieAction(CONSTANTS.REFRESH_TOKEN, data.refresh_token, {
    secure: process.env.NODE_ENV === "production",
  });

  await setCookieAction(CONSTANTS.EXPIRES, data.expires.toString(), {
    secure: process.env.NODE_ENV === "production",
  });

  await setCookieAction(CONSTANTS.EXPIRES_AT, data.expires_at.toString(), {
    secure: process.env.NODE_ENV === "production",
  });
}

export async function getCookieAction(name: string) {
  const cookie = cookies().get(name);

  if (cookie) return cookie.value;

  return null;
}

export async function deleteCookieAction(name: string) {
  cookies().delete(name);
}

export async function revalidateAction(key: string) {
  revalidateTag(key);
}

export async function redirectAction(route: string, type?: RedirectType) {
  redirect(route, type);
}

export async function joinAsMentor(prevState: FormState, formData: FormData): Promise<FormState> {
  const tGlobal = await getScopedI18n("global");
  const tJoinUs = await getScopedI18n("joinUs");
  const globalError = tGlobal("error.globalError");

  try {
    const data = Object.fromEntries(formData);
    const schema = await MentorFormSchema();
    const { join_as, email, name, experience, expertise } = schema.parse(data);

    const sheetsService = SheetsService.Instance();
    const result = await sheetsService.addRow({
      name,
      email,
      join_as,
      experience,
      expertise,
    });

    if (result) {
      await setCookieAction(
        CONSTANTS.REGISTERED,
        JSON.stringify({
          name,
          email,
          join_as,
          experience,
          expertise,
        })
      );
    }

    return {
      success: true,
      message: tJoinUs("form.success"),
      data: {
        name,
        email,
        join_as,
        experience,
        expertise,
      },
    };
  } catch (error: any) {
    if (error instanceof ZodError) {
      return {
        success: false,
        message: tGlobal("formErrors.invalidFormData"),
        errors: arrayToObject(error.issues),
      };
    }

    return {
      success: false,
      message: globalError,
    };
  }
}

export async function joinAsMentee(prevState: FormState, formData: FormData): Promise<FormState> {
  const tGlobal = await getScopedI18n("global");
  const tJoinUs = await getScopedI18n("joinUs");
  const globalError = tGlobal("error.globalError");

  try {
    const data = Object.fromEntries(formData);
    const schema = await MenteeFormSchema();
    const { join_as, email, name, field_of_interest } = schema.parse(data);

    const sheetsService = SheetsService.Instance();
    const result = await sheetsService.addRow({
      name,
      email,
      join_as,
      field_of_interest,
    });

    if (result) {
      await setCookieAction(
        CONSTANTS.REGISTERED,
        JSON.stringify({
          name,
          email,
          join_as,
          field_of_interest,
        })
      );
    }

    return {
      success: true,
      message: tJoinUs("form.success"),
      data: {
        name,
        email,
        join_as,
        field_of_interest,
      },
    };
  } catch (error: any) {
    if (error instanceof ZodError) {
      return {
        success: false,
        message: tGlobal("formErrors.invalidFormData"),
        errors: arrayToObject(error.issues),
      };
    }

    return {
      success: false,
      message: globalError,
    };
  }
}
