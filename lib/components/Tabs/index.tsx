import { ComponentProps, PropsWithChildren } from "react";

type Props = ComponentProps<"div">;

const Tabs = ({ children, className, ...rest }: PropsWithChildren<Props>) => {
  return (
    <div role="tablist" className={`tabs tabs-bordered w-full ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Tabs;
