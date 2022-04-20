import React from "react";
import { useStore } from "../../../../store/store";
import AboutProjectListItem from "./AboutProjectListItem";

const AboutProject = (props) => {
  const globalState = useStore()[0];

  return (
    <section className="about-project">
      <h3 className="about-project__title">About this project</h3>
      <p className="about-project__info">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="about-project__info">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <ul className="about-project__list">
        {globalState.products.map((p) => (
          <AboutProjectListItem
            key={p.id}
            id={p.id}
            titlePrimary={p.titlePrimary}
            titleSecondary={p.titleSecondary}
            info={p.info}
            pplLeft={p.pplLeft}
          />
        ))}
      </ul>
    </section>
  );
};

export default AboutProject;
