import { ThemeVariant } from "@/types/theme";
import { ReactNode } from "react";

type Props = {
	message: string;
	variant: ThemeVariant;
};

const Toast = ({ variant, message }: Props) => {
	return (
		<div className="toast">
			<div className={`alert alert-${variant}`}>{message}</div>
		</div>
	);
};

export default Toast;
