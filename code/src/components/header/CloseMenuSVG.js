import React from "react";
import { useStore } from "../../store/store";

const CloseMenuSVG = (props) => {
  const [globalState, dispatch] = useStore();

  const closeMenuClassName = `close-menu ${
    !globalState.menuIsOpen ? "inactive" : ""
  }`;

  const toggleMenuClickHandler = (e) => {
    dispatch("TOGGLE_MENU");
  };

  return (
    <div className={closeMenuClassName}>
      <svg
        width="14"
        id="toggle-menu"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#FFF" fillRule="evenodd">
          <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
          <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
          <rect className="btn" x="0" y="0" onClick={toggleMenuClickHandler} />
        </g>
      </svg>
    </div>
  );
};

export default CloseMenuSVG;
