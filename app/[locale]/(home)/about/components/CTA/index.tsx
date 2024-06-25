"use client";

import Select from "@/lib/components/Inputs/Select";
import TextInput from "@/lib/components/Inputs/TextInput";
import { useState } from "react";

// todo: add loading UI
// todo: add feedback UI

const CTA = () => {
	const [email, setEmail] = useState("");
	const [joinAs, setJoinAs] = useState("");

	const handleJoin = async () => {
		await fetch(`/api/sheets?email=${email}&joinAs=${joinAs}`, {
			method: "GET",
		});
	};

	return (
		<section className="bg-primary py-8">
			<div className="container mx-auto">
				<div className="flex flex-col items-center">
					<h1 className="text-5xl text-white font-bold">
						Interested? Join Our Community.
					</h1>
					<p className="py-6 text-white max-w-lg">
						Take action and be part of a new movement that could change the
						future of new generations of the tech industry.
					</p>

					<div className="grid grid-cols-4 gap-4 items-center">
						<TextInput
							className="col-span-2"
							placeholder="Email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<Select
							className="col-span-1"
							options={["Mentor", "Mentee", "Company"]}
							placeholder="Join as..."
							value={joinAs}
							onChange={e => setJoinAs(e.target.value)}
						/>
						<button onClick={handleJoin} className="btn btn-accent col-span-1">
							Join us
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
