import { ReadonlyURLSearchParams } from "next/navigation";

import { IParams } from "@/types/services";

export const createQueryString = (name: string, value: string, searchParams: ReadonlyURLSearchParams) => {
  const params = new URLSearchParams(searchParams);
  params.set(name, value);

  return params.toString();
};

export function createParams(params: IParams): URLSearchParams {
  const searchParams = new URLSearchParams();

  if (!params) return searchParams;

  function buildParams(obj: any, prefix = "") {
    for (const key in obj) {
      const value = obj[key];
      const prependKey = prefix ? `${prefix}[${key}]` : key;

      if (typeof value === "object" && value !== null) {
        buildParams(value, prependKey);
      } else if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(prependKey + "[]", v));
      } else if (value !== undefined) {
        searchParams.set(prependKey, value);
      }
    }
  }

  buildParams(params);

  return searchParams;
}

export function revertParamsToObj(params: ReadonlyURLSearchParams): IParams {
  const result: IParams = {};

  for (const [key, value] of params?.entries() ?? []) {
    result[key] = value;
  }

  return result;
}
