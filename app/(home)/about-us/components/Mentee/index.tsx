import TextInput from "@/components/Inputs/TextInput";
import Image from "next/image";

const Mentee = () => {
	return (
		<section className="hero min-h-[calc(100vh-68px)] bg-base-200">
			<div className="container mx-auto flex justify-between items-center hero-content text-center">
				<div className="max-w-prose">
					<h1 className="text-5xl font-bold text-start">
						Level Up Your Coding Skills with Expert Mentorship
					</h1>
					<h2 className="text-xl py-6 text-start">
						Get personalized <span className="font-bold">mentor guidance</span>{" "}
						from experienced developers, find{" "}
						<span className="font-bold">circles</span> to grow together, land{" "}
						<span className="font-bold">internships</span>, and{" "}
						<span className="font-bold">accelerate</span> your tech journey.
					</h2>

					<div className="flex justify-start gap-2">
						<TextInput
							className="w-96"
							placeholder="Enter your email"
							type="text"
						/>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>

				<div className="hidden md:flex flex-col gap-4">
					<Image
						src="/Hero-colored.png"
						alt="hero"
						width={500}
						height={500}
						className="w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default Mentee;
