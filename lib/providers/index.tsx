"use client";

import { PropsWithChildren } from "react";

import { I18nProviderClient } from "@/locales/client";

import PageLoader from "../components/Loaders/PageLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({
	children,
	params,
}: PropsWithChildren<{
	params: { locale: string };
}>) {
	const isRTL = params.locale === "ar";

	return (
		<>
			<ToastContainer className="toast" rtl={isRTL} hideProgressBar />
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
