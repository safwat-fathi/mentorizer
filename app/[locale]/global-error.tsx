"use client";

import { useEffect } from "react";

type GlobalErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<html>
			<body>
				<h1>Sorry, something went wrong.</h1>
				<button className="btn btn-outline" onClick={reset}>
					Try again?
				</button>
			</body>
		</html>
	);
}
