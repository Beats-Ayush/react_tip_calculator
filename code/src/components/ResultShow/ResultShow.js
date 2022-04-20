import React from "react";
import styles from "./ResultShow.module.css";

const ResultShow = ({ title, value }) => {
  return (
    <div className={styles.result}>
      <div className={styles.info}>
        <p>{title}</p>
        <p>/ person</p>
      </div>
      <input type="number" value={`$${value}`} />
    </div>
  );
};

export default ResultShow;
