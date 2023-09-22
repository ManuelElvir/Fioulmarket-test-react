import React from "react";
import { useTab } from "./hooks/TabContext";

const TabHeaderItem =  ({ filter, children }) => {
  const { activeTab, setActiveTab } = useTab();

  return (
    <div onClick={() => setActiveTab(filter)} className={`tab-header-item ${activeTab===filter?'active':''}`}>
      {children}
    </div>
  )
}

export default TabHeaderItem;
