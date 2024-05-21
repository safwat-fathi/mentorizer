import clsx from "clsx";
import Image from "next/image";

// ! handle responsive
// ! handle routes and use Link component

const Navbar = () => {
	return (
		<nav aria-label="Global">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="md:flex md:items-center md:gap-12">
						<a className="block text-teal-600" href="#">
							<span className="sr-only">Home</span>
							<Image src="/logo.svg" alt="logo" width={48} height={48} />
						</a>
					</div>

					<div className={clsx("hidden md:block")}>
						<ul className="flex items-center gap-6 text-sm">
							<li>
								<a
									className="text-gray-500 transition hover:text-gray-500/75"
									href="#"
								>
									Find a Mentor
								</a>
							</li>

							<li>
								<a
									className="text-gray-500 transition hover:text-gray-500/75"
									href="#"
								>
									Find an Internship
								</a>
							</li>

							<li>
								<a
									className="text-gray-500 transition hover:text-gray-500/75"
									href="#"
								>
									join Study Groups
								</a>
							</li>

							<li>
								<a
									className="text-gray-500 transition hover:text-gray-500/75"
									href="#"
								>
									be a mentor
								</a>
							</li>

							<li>
								<a
									className="text-gray-500 transition hover:text-gray-500/75"
									href="#"
								>
									Post Internship
								</a>
							</li>

							<li>
								<a
									className="text-gray-500 transition hover:text-gray-500/75"
									href="#"
								>
									about us
								</a>
							</li>
						</ul>
					</div>

					<div className="flex items-center gap-4">
						<div className="sm:flex sm:gap-4">
							<a
								className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
								href="#"
							>
								Login
							</a>

							<div className="hidden sm:flex">
								<a
									className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
									href="#"
								>
									Register
								</a>
							</div>
						</div>

						<div className="block md:hidden">
							<button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
