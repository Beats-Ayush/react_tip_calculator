import React from "react";
import { useStore } from "../../../../store/store";

const AboutProjectListItem = React.memo(
  ({ id, titlePrimary, titleSecondary, info, pplLeft }) => {
    const dispatch = useStore(false)[1];

    const aboutProjectListItemClassName = `about-project__list-item ${
      pplLeft === "0" ? "unavailable" : ""
    }`;

    const aboutProjectBtnText =
      pplLeft !== "0" ? "Select Reward" : "Out of stock";

    const aboutProjectBtnDisabled = pplLeft === "0";

    const selectRewardBtnClickHandler = (e) => {
      if (!aboutProjectBtnDisabled) {
        dispatch("ITEM_SELECTED", id);
      }
    };

    const ListItem = (
      <li className={aboutProjectListItemClassName}>
        <div className="about-project__list-item--title">
          <h2>{titlePrimary}</h2>
          <h2>{titleSecondary}</h2>
        </div>
        <p className="about-project__list-item--info">{info}</p>
        <div className="about-project__list-item--conc">
          <div className="about-project__list-item--conc__people-left">
            <h2>{pplLeft}</h2>
            <p>left</p>
          </div>
          <button
            disabled={aboutProjectBtnDisabled}
            className="about-project__list-item--conc__btn"
            onClick={selectRewardBtnClickHandler}
          >
            {aboutProjectBtnText}
          </button>
        </div>
      </li>
    );

    if (id !== "0") {
      return ListItem;
    } else {
      return <></>;
    }
  }
);

export default AboutProjectListItem;
