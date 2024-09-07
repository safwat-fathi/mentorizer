"use client";

import { ChangeEventHandler, ComponentProps, PropsWithChildren } from "react";
import { useTabs } from "./tabs.context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  title: string;
  value: string;
} & ComponentProps<"div">;

const TabItem = ({ title, value, children, ...rest }: PropsWithChildren<Props>) => {
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchParams = useSearchParams();
  const { name, defaultTab } = useTabs();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const params = new URLSearchParams(searchParams);

    params.has(name) && params.delete(name);

    params.set(name, e.target.value);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <input
        type="radio"
        name={name}
        role="tab"
        className="tab"
        aria-label={title}
        defaultChecked={value === searchParams.get(name)?.toString() || value === defaultTab}
        onChange={handleChange}
        value={value}
      />
      <div role="tabpanel" className="tab-content p-6" {...rest}>
        {children}
      </div>
    </>
  );
};

export default TabItem;
