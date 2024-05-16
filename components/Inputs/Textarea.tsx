import { ReactNode, TextareaHTMLAttributes } from "react";

type Props = {
	label?: ReactNode | string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({ id, label, ...rest }: Props) => {
	return (
		<div>
			<label htmlFor={id} className="block text-sm font-medium text-gray-700">
				{label}
			</label>

			<textarea
				className="resize-none mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
				{...rest}
			></textarea>
		</div>
	);
};

export default Textarea;
