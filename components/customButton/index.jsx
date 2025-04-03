"use client";

import Styles from "./CustomButton.module.scss";

const CustomButton = ({ btnText, onClick }) => {
  return (
    <button className={Styles.customButton} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default CustomButton;
