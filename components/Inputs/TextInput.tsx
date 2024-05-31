import { InputHTMLAttributes, ReactNode } from "react";

type Props = {
	label?: ReactNode | string;
	icon?: ReactNode;
	className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
	className,
	placeholder,
	id,
	label,
	icon,
	...rest
}: Props) => {
	return (
		<div className={[className, "relative"].join(" ")}>
			<label htmlFor={id} className="sr-only">
				{label}
			</label>

			<input
				type="text"
				id={id}
				placeholder={placeholder}
				className="input input-bordered w-full"
				{...rest}
			/>

			<span className="absolute inset-y-0 end-0 grid w-10 place-content-center pointer-events-none">
				<button type="button" className="text-gray-600 hover:text-gray-700">
					<span className="sr-only">{placeholder}</span>
					{icon}
				</button>
			</span>
		</div>
	);
};

export default TextInput;
