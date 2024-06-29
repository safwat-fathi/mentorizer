import { NextRequest, NextResponse } from "next/server";

import { createI18nMiddleware } from "next-international/middleware";

const I18nMiddleware = createI18nMiddleware({
	locales: ["ar", "en"],
	defaultLocale: "ar",
});

const isHomePathname = (url: string) => {
	const urlPattern = /^\/(en|ar)?$/;
	return urlPattern.test(url);
};

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	const isHome = isHomePathname(pathname);

	if (isHome) {
		return NextResponse.redirect(new URL(`/about`, req.url));
	}

	return I18nMiddleware(req);
}

export const config = {
	matcher: [
		"/((?!api|static|.*\\..*|_next|favicon.ico|manifest.json|robots.txt).*)",
	],
};
