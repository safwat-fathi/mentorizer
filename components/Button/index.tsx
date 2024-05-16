import Image from "next/image";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Button = ({ children }: Props) => {
	return (
		<a
			className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
			href="#"
		>
			<span className="font-medium transition-colors group-hover:text-white">
				{children}
			</span>

			<span className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500">
				<Image
					src="/arrow-right.svg"
					alt="Arrow right"
					width={24}
					height={24}
				/>
			</span>
		</a>
	);
};

export default Button;
