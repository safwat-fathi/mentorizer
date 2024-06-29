import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type Props = {
	placeholder?: string;
	options: any[];
} & InputHTMLAttributes<HTMLSelectElement>;

const Select = ({ className, placeholder, options, ...props }: Props) => {
	return (
		<select
			className={clsx(
				`select select-success w-full max-w-xs ps-4 pe-8 ${className}`
			)}
			defaultValue=""
			{...props}
		>
			{placeholder && (
				<option value="" disabled>
					{placeholder}
				</option>
			)}

			{options.map((option, index) => (
				<option key={index}>{option}</option>
			))}
		</select>
	);
};

export default Select;
