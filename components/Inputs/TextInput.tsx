import { InputHTMLAttributes, ReactNode } from "react";

type Props = {
	label?: ReactNode | string;
	icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({ placeholder, id, label, icon, ...rest }: Props) => {
	return (
		<div className="relative">
			<label htmlFor={id} className="sr-only">
				{label}
			</label>

			<input
				type="text"
				id={id}
				placeholder={placeholder}
				className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
				{...rest}
			/>

			<span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
				<button type="button" className="text-gray-600 hover:text-gray-700">
					<span className="sr-only">{placeholder}</span>
					{icon}
				</button>
			</span>
		</div>
	);
};

export default TextInput;
