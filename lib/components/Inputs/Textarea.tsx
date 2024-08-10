import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type Props = {
  label?: ReactNode | string;
} & ComponentProps<"textarea">;

const Textarea = ({ id, label, className, ...rest }: Props) => {
  return (
    <div
      className={clsx({
        "flex flex-col gap-2": label,
      })}
    >
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <textarea id={id} className={`textarea textarea-bordered w-full resize-none ${className}`} {...rest}></textarea>
    </div>
  );
};

export default Textarea;
