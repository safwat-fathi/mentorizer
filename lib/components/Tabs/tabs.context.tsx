"use client";

import { createContext, PropsWithChildren, useContext, useMemo } from "react";

type TabsContext = {
  name: string;
};

type Props = {
  name: string;
  defaultValue?: string;
};

const TabsContext = createContext<TabsContext>({
  name: "",
});

const useTabs = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabs must be used within a TabsContext");
  }

  return context;
};

const TabsProvider = ({ name, defaultValue, children }: PropsWithChildren<Props>) => {
  const contextValue = useMemo(
    () => ({
      name,
    }),
    [name, defaultValue]
  );

  return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
};

export { TabsProvider, useTabs };
