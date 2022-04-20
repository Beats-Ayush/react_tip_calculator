import React from "react";
import AboutProject from "./sections/about-project/AboutProject";
import Mastercraft from "./sections/mastercraft/Mastercraft";
import Stats from "./sections/stats/Stats";

const Container = (props) => {
  return (
    <main className="container">
      <div className="card-container">
        <Mastercraft />
        <Stats />
        <AboutProject />
      </div>
    </main>
  );
};

export default Container;
