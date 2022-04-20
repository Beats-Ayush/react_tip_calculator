import React from "react";
import { useStore } from "../../store/store";

const HamburgerSVG = (props) => {
  const [globalState, dispatch] = useStore();
  const hamburgerClassName = `hamburger ${
    globalState.menuIsOpen ? "inactive" : ""
  }`;

  const toggleMenuClickHandler = (e) => {
    dispatch("TOGGLE_MENU");
  };

  return (
    <div className={hamburgerClassName}>
      <svg
        id="toggle-menu"
        width="16"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
          <rect className="btn" x="0" y="0" onClick={toggleMenuClickHandler} />
        </g>
      </svg>
    </div>
  );
};

export default HamburgerSVG;
