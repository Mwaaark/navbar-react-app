import React from "react";

import "./SideDrawer.css";

export default function SideDrawer({ children, onClick }) {
  return (
    <aside className="side-drawer" onClick={onClick}>
      {children}
    </aside>
  );
}
