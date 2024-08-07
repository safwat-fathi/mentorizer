"use client";

import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/locales/client";
import { ChangeEventHandler } from "react";
import Select from "../Inputs/Select";

const LangSwitcher = () => {
  const tGlobal = useScopedI18n("global");

  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    changeLocale(e.target.value as "en" | "ar");
  };

  return (
    <Select
      onChange={handleChange}
      options={[
        { value: "ar", label: tGlobal("ar") },
        { value: "en", label: tGlobal("en") },
      ]}
      defaultValue={currentLocale}
    />
  );
};

export default LangSwitcher;
