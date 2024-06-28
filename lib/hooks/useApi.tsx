import { useState, useEffect } from "react";

type Options = {
	enabled?: boolean;
} & RequestInit;

function useApi(url: string, options: Options) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await fetch(url, options);

			if (!response.ok) {
				throw new Error(`API request failed with status ${response.status}`);
			}

			const fetchedData = await response.json();

			setData(fetchedData);
			setIsSuccess(true);
		} catch (error: any) {
			setIsError(true);
			throw new Error(error.message || "something went wrong");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (options.enabled) fetchData();
	}, [url, JSON.stringify(options)]);

	const mutate = async () => {
		await fetchData();
	};

	return { data, isLoading, isSuccess, isError, mutate };
}

export default useApi;
