import { ComponentProps, PropsWithChildren } from "react";

type Props = {
  name: string;
  title: string;
  defaultChecked?: boolean;
} & ComponentProps<"div">;

const TabItem = ({ title, name, defaultChecked, children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <>
      <input type="radio" name={name} role="tab" className="tab" aria-label={title} defaultChecked={defaultChecked} />
      <div role="tabpanel" className="tab-content p-6" {...rest}>
        {children}
      </div>
    </>
  );
};

export default TabItem;
