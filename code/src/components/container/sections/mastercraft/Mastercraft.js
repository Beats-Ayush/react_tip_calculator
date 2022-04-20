import React from "react";
import { useStore } from "../../../../store/store";
import BackProjectModal from "../../../modals/BackProjectModal";
import BookmarkSvg from "./BookmarkSvg";
import Svg from "./Svg";

const Mastercraft = (props) => {
  const [globalState, dispatch] = useStore();

  const bookMarkClickHandler = (e) => {
    dispatch("TOGGLE_BOOKMARK");
  };

  const backProjectBtnHandler = (e) => {
    dispatch("TOGGLE_MODAL_OVERLAY");
  };

  const backProjectBtnResetHandler = (e) => {
    if (e.target.id === "backdrop" || e.target.id === "quit-icon") {
      dispatch("TOGGLE_MODAL_OVERLAY");
    }
  };

  const bookMarkDivClassName = `mastercraft__back-bookmark--btn-svg ${
    globalState.bookMark ? "mastercraft__back-bookmark--touched" : ""
  }`;

  const backProjectBtnClassName = `mastercraft__back-bookmark--btn ${
    globalState.showModalOverlay
      ? "mastercraft__back-bookmark--btn-touched"
      : ""
  }`;

  const bookMarkBtnText = globalState.bookMark ? "Bookmarked" : "Bookmark";

  return (
    <React.Fragment>
      {globalState.showModalOverlay && (
        <BackProjectModal
          backProjectBtnResetHandler={backProjectBtnResetHandler}
        />
      )}
      <section className="mastercraft">
        <Svg />
        <h2 className="mastercraft__title">Mastercraft Bamboo Monitor Riser</h2>
        <p className="mastercraft__info">
          A beautiful &amp; handcrafted monitor stand to reduce neck and eye
          strain.
        </p>
        <div className="mastercraft__back-bookmark">
          <button
            className={backProjectBtnClassName}
            onClick={backProjectBtnHandler}
          >
            Back this project
          </button>
          <div className={bookMarkDivClassName} onClick={bookMarkClickHandler}>
            <BookmarkSvg />
            <button className="mastercraft__back-bookmark--btn-svg__btn">
              {bookMarkBtnText}
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Mastercraft;
