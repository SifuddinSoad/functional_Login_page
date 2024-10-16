import styles from "./LogIn.module.css";
import LogInFrom from "./logInFrom.jsx";
import SingUp from "./SingUp.jsx";
import Logo from "./logo.jsx";
import SingUpFrom from "./SingUpFrom.jsx";
import { useState } from "react";

const Container2 = () => {
  let [variable, setVariable] = useState(0);
  const onClickHandle = () => {
    setVariable(1);
  };
  const onClickHandleSingUp = () => {
    setVariable(0);
  };
  return (
    <>
      <div className={styles.container}>
        {variable == 1 && (
          <SingUpFrom onClickHandleSingUp={onClickHandleSingUp}></SingUpFrom>
        )}
        {variable == 0 && (
          <>
            <Logo></Logo>
            <LogInFrom></LogInFrom>
            <SingUp onClickHandle={onClickHandle}></SingUp>
          </>
        )}
      </div>
    </>
  );
};

export default Container2;
