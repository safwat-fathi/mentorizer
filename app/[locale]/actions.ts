"use server";

import { revalidateTag } from "next/cache";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

import CONSTANTS from "@/lib/constants";
import { AuthenticationData } from "@/types/models/auth.model";
import { FormState } from "@/types/forms";
import { fillRequiredFields } from "@/lib/utils/forms";

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

export async function joinUsAction(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    if (prevState.errors) return prevState;

    const joinAs = formData.get("join_as") as "mentee" | "mentor";
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const fieldsOfInterest = formData.get("fields_of_interest") as string;
    const expertise = formData.get("expertise") as string;
    const yearsOfExperience = formData.get("years_of_experience") as string;

    if (!email || !name) return { message: fillRequiredFields, errors: { name: !name, email: !email } };

    if (joinAs === "mentee" && !fieldsOfInterest) {
      // ? check for required fields of mentee
      return {
        message: fillRequiredFields,
      };
    }

    if (joinAs === "mentor" && (!yearsOfExperience || !expertise)) {
      return {
        message: fillRequiredFields,
      };
    }

    // ? send data to google sheet

    return {
      message: "Thank you for joining us!",
    };
  } catch (error) {
    throw new Error(`Error join us form::${error}`);
  }
}
