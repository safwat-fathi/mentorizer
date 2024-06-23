"use client";

import { PropsWithChildren } from "react";

import { I18nProviderClient } from "@/locales/client";

import PageLoader from "../components/Loaders/PageLoader";

export default function Providers({
	children,
	params,
}: PropsWithChildren<{
	params: { locale: string };
}>) {
	// const position = params.locale === "ar" ? "top-right" : "top-left";

	return (
		<>
			<I18nProviderClient
				locale={params.locale}
				fallback={
					<div className="w-full min-h-screen flex items-center justify-center">
						<PageLoader />
					</div>
				}
			>
				{children}
			</I18nProviderClient>
		</>
	);
}
