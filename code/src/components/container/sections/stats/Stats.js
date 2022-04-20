import React from "react";
import { useStore } from "../../../../store/store";
import StatsListItem from "./StatsListItem";

const Stats = (props) => {
  const globalState = useStore()[0];
  const amt = `$${Number(globalState.amount).toLocaleString()}`;

  return (
    <section className="stats">
      <ul className="stats__container">
        <StatsListItem value={amt} text="of $100,000 backed" key="1" />
        <StatsListItem
          value={globalState.backers.toString()}
          text="total backers"
          key="2"
        />
        <StatsListItem value="56" text="days left" key="3" />
      </ul>
      <div className="stats__progress">
        <div className="stats__progress--bar" />
      </div>
    </section>
  );
};

export default Stats;
