import React, { useReducer } from "react";
import "./sass/main.css";

const zero = 0;

const reducer = (state, action) => {
  if (action.type === "BILL_CHANGE") {
    return { ...state, bill: action.value };
  }

  if (action.type === "NUM_PEOPLE_CHANGE") {
    return { ...state, numPeople: action.value };
  }

  if (action.type === "TIP_PERCENTAGE_CHOOSE") {
    const { name, tipPercentage } = action.value;
    return {
      ...state,
      tipPercentage,
      tipInputButton: { [name]: `${tipPercentage}$` },
    };
  }

  if (action.type === "CUSTOM_TIP_NOT_NUMBER") {
    return { ...state, customTip: "" };
  }

  if (action.type === "CUSTOM_TIP_CHANGE") {
    return { ...state, customTip: action.value, tipPercentage: action.value };
  }

  if (action.type === "BILL_NOT_NUMBER") {
    return { ...state, bill: "" };
  }

  if (action.type === "NUM_PEOPLE_NOT_NUMBER") {
    return { ...state, numPeople: "" };
  }

  if (action.type === "CUSTOM_TIP_PERCENTAGE_CHOOSE") {
    return { ...state, tipPercentage: action.value };
  }

  if (action.type === "RESET_DEFAULT_TIP") {
    console.log("hello");
    return { ...state, ar: ["", "", "", "", ""] };
  }

  if (action.type === "WHICH_BUTTON_CLICKED") {
    const newAr = ["", "", "", "", ""];
    newAr[action.value] = "btnClick";
    return { ...state, ar: newAr };
  }

  return { ...defaultState };
};

const defaultState = {
  bill: "",
  numPeople: "",
  tipPercentage: "",
  customTip: "",
  ar: ["", "", "", "", ""],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const validatorOfEmptyInput = (value) => {
    return value && value.trim() !== "";
  };

  const onChangeHandler = (e) => {
    const { target } = e;
    const value = target.value;
    if (target.name === "bill") {
      dispatch({ type: "BILL_CHANGE", value });
    } else if (target.name === "numPeople") {
      dispatch({ type: "NUM_PEOPLE_CHANGE", value });
    } else if (target.name === "customTipPercentage") {
      dispatch({ type: "CUSTOM_TIP_CHANGE", value });
    }
  };

  const defaultTipPercentageClickHandler = (e) => {
    const { target } = e;
    dispatch({ type: "WHICH_BUTTON_CLICKED", value: Number(target.name) });

    const tipPercentage = parseFloat(target.value.slice(0, -1)).toString();
    dispatch({
      type: "TIP_PERCENTAGE_CHOOSE",
      value: { tipPercentage, name: target.name },
    });
    dispatch({ type: "CUSTOM_TIP_NOT_NUMBER" });
  };

  const customTipPercentageFocusHandler = () => {
    dispatch({ type: "RESET_DEFAULT_TIP" });
  };

  const customTipPercentageBlurHandler = (e) => {
    const input = e.target.value;
    if (isNaN(input)) {
      dispatch({ type: "CUSTOM_TIP_NOT_NUMBER" });
    }
  };

  const inputOnBlurHandler = (e) => {
    const ele = e.target;
    if (isNaN(ele.value)) {
      if (ele.name === "bill") {
        dispatch({ type: "BILL_NOT_NUMBER" });
      } else if (ele.name === "numPeople") {
        dispatch({ type: "NUM_PEOPLE_NOT_NUMBER" });
      }
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET" });
  };

  let tipAmountPerPerson = 0;
  let totalAmountPerPerson = 0;

  const billIsValid = validatorOfEmptyInput(state.bill);
  const tipPercentageIsValid = validatorOfEmptyInput(state.tipPercentage);
  const numPeopleIsNotEmpty = validatorOfEmptyInput(state.numPeople);
  const numPeopleIsZero = state.numPeople === "0";
  const numPeopleIsValid = numPeopleIsNotEmpty && !numPeopleIsZero;
  const inputsValid = billIsValid && tipPercentageIsValid && numPeopleIsValid;

  if (inputsValid) {
    const { bill, numPeople, tipPercentage } = state;
    tipAmountPerPerson = parseFloat((bill * tipPercentage) / (numPeople * 100));
    totalAmountPerPerson = parseFloat(tipAmountPerPerson + bill / numPeople);
  }

  return (
    <main className="container">
      <h1 className="sr-only">
        Frontend Mentor | Intro component with sign up form
      </h1>
      <div className="title-holder">
        <h2 className="container__title">spli</h2>
        <h2 className="container__title">tter</h2>
      </div>

      <form className="card" onSubmit={formSubmitHandler}>
        <div className="card__calc">
          <div className="card__calc--form">
            <div className="card__calc--form__bill normal">
              <label htmlFor="bill">Bill</label>
              <input
                type="text"
                name="bill"
                id="bill"
                placeholder="0"
                onChange={onChangeHandler}
                value={state.bill}
                onBlur={inputOnBlurHandler}
              />
            </div>

            <div className="card__calc--form__tip">
              <p className="card__calc--form__tip--text">Select Tip %</p>
              <ul className="card__calc--form__tip--list">
                <li>
                  <input
                    type="button"
                    className={`card__calc--form__tip--list__item ${state.ar[0]}`}
                    value="5%"
                    name="0"
                    onClick={defaultTipPercentageClickHandler}
                  />
                </li>
                <li>
                  <input
                    type="button"
                    className={`card__calc--form__tip--list__item ${state.ar[1]}`}
                    value="10%"
                    name="1"
                    onClick={defaultTipPercentageClickHandler}
                  />
                </li>
                <li>
                  <input
                    type="button"
                    className={`card__calc--form__tip--list__item ${state.ar[2]}`}
                    value="15%"
                    name="2"
                    onClick={defaultTipPercentageClickHandler}
                  />
                </li>
                <li>
                  <input
                    type="button"
                    className={`card__calc--form__tip--list__item ${state.ar[3]}`}
                    value="25%"
                    name="3"
                    onClick={defaultTipPercentageClickHandler}
                  />
                </li>
                <li>
                  <input
                    type="button"
                    className={`card__calc--form__tip--list__item ${state.ar[4]}`}
                    value="50%"
                    name="4"
                    onClick={defaultTipPercentageClickHandler}
                  />
                </li>
                <li>
                  <input
                    className={`card__calc--form__tip--list__item custom ${state.ar[5]}`}
                    type="text"
                    name="customTipPercentage"
                    placeholder="Custom"
                    onChange={onChangeHandler}
                    value={state.customTip}
                    onFocus={customTipPercentageFocusHandler}
                    onBlur={customTipPercentageBlurHandler}
                  />
                </li>
              </ul>
            </div>

            <div className="card__calc--form__numPeople normal">
              <div className="label">
                <label htmlFor="numPeople">Number of People</label>
                <label
                  htmlFor="numPeople"
                  className={numPeopleIsZero ? "error-label" : "no-error"}
                >
                  Can't be zero
                </label>
              </div>

              <input
                className={numPeopleIsZero ? "error-label-input" : ""}
                type="text"
                name="numPeople"
                id="numPeople"
                placeholder="0"
                value={state.numPeople}
                onChange={onChangeHandler}
                onBlur={inputOnBlurHandler}
              />
            </div>
          </div>
        </div>

        <div className="card__res">
          <div className="card__res--info">
            <div className="card__res--info__wrapper">
              <div className="card__res--info__tip-container">
                <p>Tip Amount</p>
                <p>/ person</p>
              </div>
              <p>{`$${
                !isNaN(tipAmountPerPerson) && inputsValid
                  ? tipAmountPerPerson.toFixed(2)
                  : zero.toFixed(2)
              }`}</p>
            </div>

            <div className="card__res--info__wrapper">
              <div className="card__res--info__tip-container">
                <p>Total</p>
                <p>/ person</p>
              </div>
              <p>{`$${
                !isNaN(totalAmountPerPerson) && inputsValid
                  ? totalAmountPerPerson.toFixed(2)
                  : zero.toFixed(2)
              }`}</p>
            </div>
          </div>
          <button className="card__res--btn" type="submit">
            reset
          </button>
        </div>
      </form>
    </main>
  );
};

export default App;
