import { NextRequest, NextResponse } from "next/server";

import { createI18nMiddleware } from "next-international/middleware";

const I18nMiddleware = createI18nMiddleware({
	locales: ["ar", "en"],
	defaultLocale: "ar",
});

export async function middleware(req: NextRequest) {
	return I18nMiddleware(req);
}

export const config = {
	matcher: [
		"/((?!api|static|.*\\..*|_next|favicon.ico|manifest.json|robots.txt).*)",
	],
};
