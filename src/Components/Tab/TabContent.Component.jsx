import React from "react";

import { useTab } from "./hooks/TabContext";

const TabContent = ({ children, filter }) => {
  const { activeTab } = useTab();

  return (
    <>
      {activeTab === filter && (
        <div className='tab-content'>{children}</div>
      )}
    </>
  );
};

export default TabContent;
