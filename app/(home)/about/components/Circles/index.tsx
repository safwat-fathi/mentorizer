import Image from "next/image";
import Link from "next/link";

const Circles = () => {
	return (
		<section className="container mx-auto">
			<div className="py-6 flex flex-col items-center gap-6">
				<h2 className="text-4xl font-bold">Join Circles</h2>
				<h3 className="text-lg max-w-xs text-center">
					You don't know what you don't know. Now you can know what you don't
					know.
				</h3>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="lg:flex justify-center hidden">
					<Image
						src="/coding.png"
						className="object-contain w-[300px] h-auto"
						width={518}
						height={750}
						alt="person-coding"
					/>
				</div>

				<div className="card shadow-lg bg-base-100 py-6 px-10">
					<ul className="list-disc flex flex-col gap-4 text-xl">
						<li>
							Join group of people who are eager as you to learn the same topic
							you are looking for.
						</li>
						<li>
							Your group are lead by an experienced developer/s that help you
							and the group to get the most out of the topic in study.
						</li>
						<li>Don't study alone - get help from your peers and mentors.</li>
						<li>
							Share your knowledge and experience with the circle around you and
							get learn from others.
						</li>
						<li>
							Earn points and achievements during your time in the circle and
							have a healthy competition with your peers.
						</li>
						<li>
							Circle roadmap, curriculum, activities, quizzes, certificates and
							meetups. All of this are to help you have an excellent learning
							journey.
						</li>
					</ul>

					<Link href="/about/circles">Learn More</Link>
				</div>
			</div>
		</section>
	);
};

export default Circles;
