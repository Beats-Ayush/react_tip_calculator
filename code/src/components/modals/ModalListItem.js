import React from "react";
import { useStore } from "../../store/store";

const ModalListItem = React.memo(
  ({
    titlePrimary,
    titleSecondary,
    id,
    info,
    pplLeft,
    pledge,
    selected,
    error,
    minPledge,
  }) => {
    const dispatch = useStore(false)[1];

    const checkboxClickHandler = (e) => {
      const id = e.target.id.slice(9);

      dispatch("CHECKBOX_TOGGLE", id);
    };

    const inputChangeHandler = (e) => {
      dispatch("INPUT_CHANGE", { id, input: e.target.value });
      if (error) {
        dispatch("SET_ERROR", id);
      }
    };

    const submitBtnClickHandler = (e) => {
      e.preventDefault();
      let min = minPledge === "" ? "1" : minPledge;
      if (isNaN(pledge) || parseInt(pledge) < parseInt(min) || pledge === "") {
        dispatch("SET_ERROR", id);
      } else {
        dispatch("ITEM_SELECTED", id);
        dispatch("AMOUNT_CHANGE", pledge);
        dispatch("PROJECT_BACKED");
        dispatch("RESET_PRODUCTS_AFTER_FORM_SUBMIT");
      }
    };

    const modaltListItemClassName = `modal__list-item ${
      pplLeft === "0" ? "unavailable" : ""
    } ${selected ? "selected" : ""}`;

    const modalCheckboxDisabled = pplLeft === "0";

    const FormError = () => {
      if (error) {
        return <p className="modal__list-item--form__error">Invalid Input</p>;
      }
      return <></>;
    };

    const modalInputClassName = `modal__list-item--form__input ${
      error ? "error" : ""
    }`;

    const Form = selected ? (
      <>
        <div className="modal__list-item--form">
          <label htmlFor="pledge" className="modal__list-item--form__label">
            Enter your pledge
          </label>
          <div className="modal__list-item--form__wrapper">
            <div className="modal__list-item--form__wrapper--input">
              <input
                onChange={inputChangeHandler}
                value={pledge}
                type="text"
                id="pledge"
                name="pledge"
                className={modalInputClassName}
                autoFocus
              />
              <i className="fa-solid fa-dollar-sign modal__list-item--form__input--sign"></i>
            </div>

            <button
              type="submit"
              className="modal__list-item--form__btn"
              onClick={submitBtnClickHandler}
            >
              Continue
            </button>
          </div>
        </div>
        <FormError />
      </>
    ) : (
      <></>
    );

    return (
      <li className={modaltListItemClassName}>
        <div className="modal__list-item--wrapper">
          <div className="modal__list-item--checkbox">
            <input
              onClick={checkboxClickHandler}
              type="checkbox"
              name=""
              id={`checkbox_${id}`}
              disabled={modalCheckboxDisabled}
              className={`modal__list-item--input ${selected ? "checked" : ""}`}
            />
          </div>

          <div className="modal__list-item--info-container">
            <div className="modal__list-item--info-container-box">
              <div className="modal__list-item--title">
                <label htmlFor={`checkbox_${id}`}>{titlePrimary}</label>
                <h2>{titleSecondary}</h2>
              </div>
              <div className={`modal__list-item--conc__people-left shift`}>
                <h2>{pplLeft}</h2>
                <p>{pplLeft !== "" ? "left" : ""}</p>
              </div>
            </div>
            <p className="modal__list-item--info">{info}</p>
            <div className={`modal__list-item--conc__people-left replace`}>
              <h2>{pplLeft}</h2>
              <p>{pplLeft !== "" ? "left" : ""}</p>
            </div>
          </div>
        </div>
        {Form}
      </li>
    );
  }
);

export default ModalListItem;
