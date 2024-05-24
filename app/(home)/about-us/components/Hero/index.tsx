const Hero = () => {
	return (
		<section className="hero min-h-screen bg-base-200">
			<div className="container mx-auto flex justify-between items-center hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Mentorizer</h1>
					<h2 className="text-3xl font-bold">
						Level Up Your Coding Skills with Expert Mentorship
					</h2>
					<p className="py-6">
						Connect with experienced developers, land internships, and
						accelerate your tech journey.
					</p>

					<div className="flex justify-center gap-2">
						<button className="btn btn-neutral">Sign Up as a Mentee</button>
						<button className="btn btn-primary">Become a Mentor</button>
					</div>
				</div>

				<div className="divider"></div>

				<div className="flex flex-col gap-4">
					<p>Quick Search</p>

					<div className="flex gap-4 items-center justify-center">
						<label className="input input-bordered flex items-center gap-2">
							<input type="text" className="grow" placeholder="Search" />
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path
									fillRule="evenodd"
									d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
									clipRule="evenodd"
								/>
							</svg>
						</label>

						<button className="btn btn-primary">Search</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
