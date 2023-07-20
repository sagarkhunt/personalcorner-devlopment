import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

const AdminLayout = () => {
  const [overlay, setOverlay] = useState(false);

  const hideSidebar = () => {
    const sideBarId = document.getElementById("sideBarId2");
    const adminContent = document.getElementById("adminContent");

    if (sideBarId.classList.contains("mobileSidebar")) {
      sideBarId.classList.remove("mobileSidebar");
      adminContent.classList.remove("adminContentMobile");
    } else {
      sideBarId.classList.add("mobileSidebar");
      adminContent.classList.add("adminContentMobile");
    }
  };
  return (
    <React.Fragment>
      <div className="mainLayout">
        <Sidebar />
        <div className="adminContent" id="adminContent">
          <Header
            strokeWidth
            hideSidebar={hideSidebar}
            setOverlay={() => setOverlay(!overlay)}
          />
          {overlay && <div className="dataOverlay"></div>}
          {/* ====== page area ===== */}
          <Outlet />
          {/* ============ */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminLayout;
