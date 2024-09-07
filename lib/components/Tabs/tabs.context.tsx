"use client";

import { createContext, PropsWithChildren, useContext, useMemo } from "react";

type TabsContext = {
  name: string;
  defaultTab?: string;
};

type Props = {
  name: string;
  defaultTab?: string;
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

const TabsProvider = ({ name, defaultTab, children }: PropsWithChildren<Props>) => {
  const contextValue = useMemo(
    () => ({
      name,
      defaultTab,
    }),
    [name, defaultTab]
  );

  return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
};

export { TabsProvider, useTabs };
