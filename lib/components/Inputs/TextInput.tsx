import { ComponentProps, ReactNode } from "react";

type Props = {
  label?: ReactNode | string;
  icon?: ReactNode;
  containerClassName?: string;
  inputCLassName?: string;
} & ComponentProps<"input">;

const TextInput = ({ containerClassName, inputCLassName, placeholder, id, label, icon, type, ...props }: Props) => {
  return (
    <div role="textbox" className={`relative ${containerClassName}`}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`input input-bordered w-full ${inputCLassName}`}
        {...props}
      />

      <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">{placeholder}</span>
          {icon}
        </button>
      </span>
    </div>
  );
};

export default TextInput;
