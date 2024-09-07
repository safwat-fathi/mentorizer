import { ComponentProps, PropsWithChildren } from "react";
import { TabsProvider } from "./tabs.context";

type Props = { defaultTab?: string; name: string } & Omit<ComponentProps<"div">, "defaultValue">;

const Tabs = ({ children, className, name, defaultTab, ...rest }: PropsWithChildren<Props>) => {
  return (
    <div role="tablist" className={`tabs tabs-bordered w-full ${className}`} {...rest}>
      <TabsProvider name={name} defaultTab={defaultTab}>
        {children}
      </TabsProvider>
    </div>
  );
};

export default Tabs;
