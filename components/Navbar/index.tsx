import Link from "next/link";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100 container mx-auto">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link href="/apply-as-mentor">Start Mentoring</Link>
						</li>
						<li>
							<Link href="/find">Find</Link>
							<ul className="p-2">
								<li>
									<Link href="/find?q=mentors">Mentors</Link>
								</li>
								<li>
									<Link href="/find?q=circles">Circles</Link>
								</li>
								<li>
									<Link href="/find?q=internships">Internships</Link>
								</li>
								<li>
									<Link href="/find?q=interns">Interns</Link>
								</li>
							</ul>
						</li>

						<li>
							<Link href="/post-internship">Post Internships</Link>
						</li>

						<div className="md:hidden">
							<div className="divider"></div>

							<li className="flex flex-col gap-2">
								<Link href="/auth/login" className="btn btn-neutral">
									Login
								</Link>
								<Link href="/auth/signup" className="btn btn-primary">
									Signup
								</Link>
							</li>
						</div>
					</ul>
				</div>
				<Link href="/" className="btn btn-ghost text-xl">
					Mentorizer
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/apply-as-mentor">Start Mentoring</Link>
					</li>
					<li>
						<details>
							<summary>Find</summary>
							<ul className="p-2 w-52">
								<li>
									<Link href="/find?q=mentors">Mentors</Link>
								</li>
								<li>
									<Link href="/find?q=circles">Circles</Link>
								</li>
								<li>
									<Link href="/find?q=internships">Internships</Link>
								</li>
								<li>
									<Link href="/find?q=interns">Interns</Link>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<Link href="/post-internship">Post Internships</Link>
					</li>
				</ul>
			</div>

			<div className="hidden md:flex navbar-end gap-2">
				<Link href="/auth/login" className="btn btn-neutral">
					Login
				</Link>
				<Link href="/auth/signup" className="btn btn-primary">
					Signup
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
