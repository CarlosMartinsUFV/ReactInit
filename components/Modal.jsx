import React from "react";
import Input from "./Input";
import styles from "./Modal.module.css";

const Modal = ({ open }) => {
  return (
    <div className={styles.modalcontainer}>
      <Input />
      <Input type="number" />
    </div>
  );
};

export default Modal;
