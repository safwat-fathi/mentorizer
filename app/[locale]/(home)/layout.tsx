import type { Metadata } from "next";

import { ReactNode } from "react";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";
import Providers from "@/lib/providers";

export const metadata: Metadata = {
	title: "Mentorizer",
	description: "Skill up. Level up. Together",
};

export default function HomeLayout({
	params,
	children,
}: Readonly<{
	children: ReactNode;
	params: { locale: string };
}>) {
	return (
		<Providers params={params}>
			<Navbar />
			{children}
			<Footer />
		</Providers>
	);
}
