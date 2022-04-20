import React from "react";
import { useStore } from "../../store/store";

import CloseMenuSVG from "./CloseMenuSVG";
import HamburgerSVG from "./HamburgerSVG";
import NavListItem from "./NavListItem";

const Header = (props) => {
  const [globalState, dispatch] = useStore();
  const navLinksClassName = `nav__links ${
    !globalState.menuIsOpen ? "inactive" : "active"
  }`;

  const modalCloseHandler = (e) => {
    if (e.target.id === "back-drop") {
      dispatch("TOGGLE_MENU");
    }
  };

  return (
    <header className="header">
      <h1 className="sr-only">Frontend Mentor | Crowdfunding product page</h1>
      <div className="nav-container">
        <nav className="nav">
          <h2 className="nav__title">crowdfund</h2>
          <HamburgerSVG />
          <CloseMenuSVG />
          <ul
            className={navLinksClassName}
            id="back-drop"
            onClick={modalCloseHandler}
          >
            <NavListItem name="About" />
            <NavListItem name="Discover" />
            <NavListItem name="Get Started" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
