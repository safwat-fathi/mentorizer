type Props = {
	searchParams: {
		mentor: string;
		circle: string;
	};
};

const Find = ({ searchParams }: Props) => {
	console.log("🚀 ~ Find ~ searchParams:", searchParams);

	return (
		<main className="flex h-screen items-center justify-center">
			<h1>Mentorizer Find page</h1>
		</main>
	);
};

export default Find;
