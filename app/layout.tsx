import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mentorizer",
	description: "Skill up. Level up. Together",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html data-theme="light">
			<body className={`${inter.className} bg-base-200`}>{children}</body>
		</html>
	);
}
