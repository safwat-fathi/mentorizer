import { InputHTMLAttributes } from "react";

type Props = {
	placeholder?: string;
	options: any[];
} & InputHTMLAttributes<HTMLSelectElement>;

const Select = ({ placeholder, options }: Props) => {
	return (
		<select className="select select-success w-full max-w-xs">
			{placeholder && (
				<option disabled selected>
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
