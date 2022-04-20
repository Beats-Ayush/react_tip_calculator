import React, { Fragment } from "react";
import { useStore } from "../../store/store";
import CheckSVG from "./CheckSVG";
import ModalListItem from "./ModalListItem";
import QuitIconSVG from "./QuitIconSVG";

const BackProjectModal = ({ backProjectBtnResetHandler }) => {
  const [globalState, dispatch] = useStore();

  const modalCompleteBtnClickHandler = (e) => {
    dispatch("TOGGLE_MODAL_OVERLAY");
    dispatch("TOGGLE_BACK_PROJECT");
  };

  const FormList = () => {
    return (
      <form className="modal">
        <div className="modal__quit-icon">
          <QuitIconSVG />
        </div>
        <h2 className="modal__title">Back this project</h2>
        <p className="modal__info">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <ul className="modal__list">
          {globalState.products.map((p) => (
            <ModalListItem
              key={p.id}
              id={p.id}
              titlePrimary={p.titlePrimary}
              titleSecondary={p.titleSecondary}
              info={p.info}
              pplLeft={p.pplLeft}
              pledge={p.pledge}
              selected={p.selected}
              error={p.error}
              minPledge={p.minPledge}
            />
          ))}
        </ul>
      </form>
    );
  };

  const BackedProjectConfirmation = () => {
    return (
      <div className="modal-comp">
        <div className="modal-comp__tick">
          <CheckSVG />
        </div>
        <div className="modal-comp__container">
          <h2 className="modal-comp__container--title">
            Thanks for your support
          </h2>
          <p className="modal-comp__container--info">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
        </div>
        <div className="modal-comp__btn-wrapper">
          <button
            className="modal-comp__btn"
            onClick={modalCompleteBtnClickHandler}
          >
            Got it!
          </button>
        </div>
      </div>
    );
  };

  const backdropClassName = `backdrop ${
    globalState.backProject ? "confirm" : ""
  }`;

  return (
    <Fragment>
      <div
        className={backdropClassName}
        id="backdrop"
        onClick={backProjectBtnResetHandler}
      >
        {!globalState.backProject ? (
          <FormList />
        ) : (
          <BackedProjectConfirmation />
        )}
      </div>
    </Fragment>
  );
};

export default BackProjectModal;
