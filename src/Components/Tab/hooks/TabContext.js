import React, { useContext, useState } from "react";
import { LOGIN } from "../../../helpers/tabs";
import TabContainerView from "../TabContainer.Component";
import '../Tab.css'

export const TabContext = React.createContext({
  activeTab: LOGIN,
  setActiveTab: async (tabName) => {},
});

export const useTab = () => useContext(TabContext);

export const TabContainer = ({ children }) => {
  const [tab, setTab] = useState(LOGIN);
  return (
    <TabContext.Provider
      value={{ activeTab: tab, setActiveTab: (tab) => setTab(tab) }}
    >
      <TabContainerView>
        {children}
      </TabContainerView>
    </TabContext.Provider>
  );
};
