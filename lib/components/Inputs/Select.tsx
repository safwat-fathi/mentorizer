import clsx from "clsx";

import { ComponentProps } from "react";

type Option = { label: string; value: string };

type Props = {
  placeholder?: string;
  options: Option[];
  error?: string;
} & ComponentProps<"select">;

const Select = ({ className, placeholder, options, error, ...props }: Props) => {
  return (
    <select
      className={clsx("select select-bordered w-full pe-8 ps-4", className, { "input-error": error })}
      defaultValue=""
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}

      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
