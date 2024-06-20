import Image from "next/image";

const Circles = () => {
	return (
		<section className="container mx-auto mb-16">
			<div className="flex justify-center mb-10">
				<div className="flex flex-col gap-4">
					<div className="flex gap-4">
						<div className="w-2 h-auto bg-primary" />
						<h2 className="text-5xl capitalize font-bold">join circles</h2>
					</div>

					<div className="flex flex-col gap-2">
						<h3 className="text-2xl italic max-w-md text-justify">
							You don't know what you don't know
						</h3>
						<h3 className="text-2xl px-2 py-1 max-w-md text-justify bg-primary text-primary-content">
							Now you can know what you don't know.
						</h3>
					</div>
				</div>
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
				</div>
			</div>
		</section>
	);
};

export default Circles;
