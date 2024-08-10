import clsx from "clsx";
import { ComponentProps } from "react";

type Props = {
  placeholder?: string;
  options: { label: string; value: any }[];
} & ComponentProps<"select">;

const Select = ({ className, placeholder, options, ...props }: Props) => {
  return (
    <select className={clsx(`select select-bordered w-full pe-8 ps-4 ${className}`)} defaultValue="" {...props}>
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
