"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

import Button from ".";

type Props = ComponentProps<typeof Button>;

const SubmitButton = ({ children, ...rest }: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button {...rest} type="submit" loading={pending} disabled={pending}>
      {children}
    </Button>
  );
};

export default SubmitButton;
