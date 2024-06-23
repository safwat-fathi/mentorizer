import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Mentorizer",
		default: "Mentorizer",
	},
	description: "Skill up. Level up. Together",
};

export const viewport: Viewport = {
	initialScale: 1,
	width: "device-width",
};

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	params: { locale: string };
	children: ReactNode;
}>) {
	const dir = locale === "ar" ? "rtl" : "ltr";

	return (
		<html lang={locale} dir={dir} data-theme="light" translate="no">
			<body className={`${inter.className} bg-base-200`}>{children}</body>
		</html>
	);
}
