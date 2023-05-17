import React from "react";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import "./Sidebar.css";

const Sidebar = () => {

  return (
    <aside className="sidebar">
      <SidebarHeader/>
      <SidebarMenu/>
      <SidebarFooter/>
    </aside>
  );
};

export default Sidebar;