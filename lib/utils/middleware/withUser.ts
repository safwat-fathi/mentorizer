import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "./stack";
import { getLocaleFromURL } from "../url";

export const withUser: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const response = NextResponse;

    const pathname = request.nextUrl.pathname;
    const isLoginRoute = pathname.endsWith("/login");

    const locale = getLocaleFromURL(pathname);

    const token = request.cookies.get("token");

    if (!token && !isLoginRoute) {
      const url = new URL(`/${locale}/login`, request.url);

      return response.redirect(url);
    }

    return next(request, _next);
  };
};
