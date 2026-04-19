// ✅ Client Component — usa useState, useContext y eventos (onClick)
'use client';

import { createContext, useContext, useState, type ReactNode } from "react";
import './Tabs.css';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs debe usarse dentro de <Tabs>');
  }
  return context;
};

interface TabsProps {
  children: ReactNode;
  defaultTab: string;
}

const TabsRoot = ({ children, defaultTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs-root">
        {children}
      </div>
    </TabsContext.Provider>
  );
};

interface TabsHeaderProps {
  children: ReactNode;
}

const TabsHeader = ({ children }: TabsHeaderProps) => {
  return <div className="tabs-header">{children}</div>;
};

interface TabsTabProps {
  id: string;
  children: ReactNode;
}

const TabsTab = ({ id, children }: TabsTabProps) => {
  const { setActiveTab, activeTab } = useTabsContext();

  return (
    <button
      className={`tabs-button ${activeTab === id ? 'active' : ''}`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  id: string;
  children: ReactNode;
}

const TabsContent = ({ id, children }: TabsContentProps) => {
  const { activeTab } = useTabsContext();

  if (activeTab !== id) return null;

  return <div className="tabs-content">{children}</div>;
};

export const Tabs = Object.assign(TabsRoot, {
  Header: TabsHeader,
  Tab: TabsTab,
  Content: TabsContent,
});