import React from "react";
import styles from "./CardCalc.module.css";
import Button from "../Button/Button";

const CardCalc = () => {
  return (
    <div className={styles.cardcalc}>
      <form className={styles.cardcalc__form}>
        <div className={styles.form__control}>
          <label htmlFor="bill">Bill</label>
          <input type="number" name="bill" id="bill" placeholder="0" />
        </div>
        <p className={styles.btn__wrapper__text}>Select Tip %</p>
        <div className={styles.btn__wrapper}>
          <Button value="5%" />
          <Button value="10%" />
          <Button value="15%" />
          <Button value="25%" />
          <Button value="50%" />
          <Button value="Custom" />
        </div>
        <div className={styles.form__control}>
          <label htmlFor="numPeople">Number of People</label>
          <input
            type="number"
            name="numPeople"
            id="numPeople"
            placeholder="0"
          />
        </div>
      </form>
    </div>
  );
};

export default CardCalc;
