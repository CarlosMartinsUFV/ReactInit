import React from "react";
import { Button } from "./Button.jsx";
import styles from "./Header.module.css";
import Modal from "./Modal.jsx";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    return setOpen(!open);
  }

  return (
    <>
      <div className={styles.headerContainer}>
        {" "}
        <Button onClick={handleClick} background="#22e332">
          Entrada
        </Button>
        <Button background="red">Saída</Button>
      </div>
      {open ? <Modal /> : ""}
    </>
  );
};

export default Header;
