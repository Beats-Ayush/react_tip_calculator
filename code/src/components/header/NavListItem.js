import React from "react";

const NavListItem = ({ name }) => {
  return (
    <li>
      <a href="#" className="nav__link">
        {name}
      </a>
    </li>
  );
};

export default NavListItem;
