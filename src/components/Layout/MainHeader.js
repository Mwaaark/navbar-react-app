import React, { useState } from "react";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";
import Backdrop from "../UI/Backdrop";
import { FaItunesNote } from "react-icons/fa";

import "./MainHeader.css";

export default function MainHeader() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="nav-side-drawer">
          <NavLinks />
        </nav>
      </SideDrawer>

      <header className="header">
        <Link to="/" className="nav-brand">
          <FaItunesNote />
          <span>Logo</span>
        </Link>

        {!drawerIsOpen && (
          <nav className="nav-main">
            <NavLinks />
          </nav>
        )}

        <button className="menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
      </header>
    </>
  );
}
