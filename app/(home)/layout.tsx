import type { Metadata } from "next";

import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
	title: "Mentorizer",
	description: "Skill up. Level up. Together",
};

export default function HomeLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
