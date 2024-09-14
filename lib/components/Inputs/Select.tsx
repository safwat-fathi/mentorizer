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
    <div className="flex w-full flex-col gap-2">
      <select
        className={clsx("select select-bordered w-full pe-8 ps-4", className, { "input-error": error })}
        {...props}
      >
        {placeholder && (
          <option value="" disabled selected className="text-red-500">
            {placeholder}
          </option>
        )}

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="not-prose text-error">{error}</p>}
    </div>
  );
};

export default Select;
