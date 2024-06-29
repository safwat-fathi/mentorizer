"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import Select from "../Inputs/Select";
import { ChangeEventHandler } from "react";

const LangSwitcher = () => {
	const changeLocale = useChangeLocale();
	const currentLocale = useCurrentLocale();

	const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
		changeLocale(e.target.value.toLowerCase() as "en" | "ar");
	};

	return (
		<div>
			<Select
				onChange={handleChange}
				options={["AR", "EN"]}
				defaultValue={currentLocale.toUpperCase()}
			/>
		</div>
	);
};

export default LangSwitcher;
