import { notFound } from "next/navigation";

type Props = {
	searchParams: {
		email: string;
		joinAs: string;
	};
};

const ThankYou = ({ searchParams }: Props) => {
	if (!searchParams.joinAs || !searchParams.email) {
		notFound();
	}

	return (
		<main>
			<section className="container mx-auto gap-6 flex flex-col justify-center min-h-[calc(100vh-68px)]">
				<h1 className="text-7xl font-medium">
					Thanks for being interested in{" "}
					<span className="font-bold">Mentorizer</span>. We deeply appreciate
					it.
				</h1>

				<h2 className="text-2xl font-medium">
					We are currently working on to make it happen really soon.
				</h2>

				<div className="peer">Peer One</div>
				<div className="peer-hover:bg-primary">Peer Two</div>

				<h2 className="text-4xl font-medium">
					Your early join request details:
				</h2>

				<div className="bg-primary text-primary-content p-4 flex flex-col gap-2">
					<h2 className="text-2xl font-medium">Email: {searchParams.email}</h2>
					<h2 className="text-2xl font-medium">
						Join as: {searchParams.joinAs}
					</h2>
				</div>

				<h2 className="text-2xl font-medium">
					If you have any questions or concerns, please feel free to reach out
					to us.
				</h2>
			</section>
		</main>
	);
};

export default ThankYou;
