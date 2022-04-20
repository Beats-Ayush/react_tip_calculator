import React from "react";
import styles from "./CardRes.module.css";
import ResultShow from "../ResultShow/ResultShow";

const CardRes = () => {
  return (
    <div className={styles.cardres}>
      <ResultShow title="Tip Amount" value="0" />
      <ResultShow title="Tip Amount" value="0" />
      <button className={styles.cardres__btn}>reset</button>
    </div>
  );
};

export default CardRes;
