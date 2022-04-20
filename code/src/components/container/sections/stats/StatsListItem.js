import React from "react";

const StatsListItem = ({ value, text }) => {
  return (
    <li className="stats__container--percentage-backed">
      <h2 className="stats__container--percentage-backed__title">{value}</h2>
      <p className="stats__container--percentage-backed__info">{text}</p>
    </li>
  );
};

export default StatsListItem;
