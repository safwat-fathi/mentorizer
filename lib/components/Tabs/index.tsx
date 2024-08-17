import { ComponentProps, PropsWithChildren } from "react";
import { TabsProvider } from "./tabs.context";

type Props = { defaultValue?: string } & ComponentProps<"div">;

const Tabs = ({ children, className, defaultValue, ...rest }: PropsWithChildren<Props>) => {
  return (
    <div role="tablist" className={`tabs tabs-bordered w-full ${className}`} {...rest}>
      <TabsProvider name="join_as" defaultValue={defaultValue}>
        {children}
      </TabsProvider>
    </div>
  );
};

export default Tabs;
