import React from "react";
import styles from "./AddToCartBtn.module.css";

const AddToCartBtn = ({ onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={styles}>
      Add To Cart
    </button>
  );
};

export default AddToCartBtn;
