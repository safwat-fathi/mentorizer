import clsx from "clsx";
import { ReactNode, TextareaHTMLAttributes } from "react";

type Props = {
  label?: ReactNode | string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({ id, label, className, ...rest }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <textarea
        id={id}
        className={clsx("textarea textarea-bordered w-full resize-none", className)}
        {...rest}
      ></textarea>
    </div>
  );
};

export default Textarea;
