import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type Props = {
  label?: ReactNode | string;
  error?: string;
} & ComponentProps<"textarea">;

const Textarea = ({ id, label, className, error, ...rest }: Props) => {
  return (
    <div
      className={clsx({
        "flex flex-col gap-2": label,
      })}
    >
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <textarea
        id={id}
        className={clsx("textarea textarea-bordered w-full resize-none", className, { "textarea-error": error })}
        {...rest}
      ></textarea>

      {error && <p className="not-prose text-error">{error}</p>}
    </div>
  );
};

export default Textarea;
