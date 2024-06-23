import { NextRequest, NextResponse } from "next/server";

import { createI18nMiddleware } from "next-international/middleware";

const I18nMiddleware = createI18nMiddleware({
	locales: ["ar", "en"],
	defaultLocale: "ar",
	// urlMappingStrategy: "rewriteDefault",
});

export async function middleware(req: NextRequest) {
	// const { pathname } = req.nextUrl;

	// const token = req.cookies.get("token");

	// const isLogin = pathname.includes("login");
	// const isResetPassword = pathname.includes("reset-password");

	// if (!token?.value && !isLogin && !isResetPassword) {
	// 	return NextResponse.redirect(new URL(`/login`, req.url));
	// }

	// if (token?.value && isLogin) {
	// 	return NextResponse.redirect(new URL(`/`, req.url));
	// }

	return I18nMiddleware(req);
}

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|manifest.json|favicon.ico|robots.txt).*)",
	],
	// matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
