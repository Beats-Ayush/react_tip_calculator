import React from "react";
import styles from "./Button.module.css";

const Button = ({ value }) => {
  const btnClass = value === "Custom" ? styles.custom : styles.btn;
  console.log(btnClass);
  return <button className={btnClass}>{value}</button>;
};

export default Button;
