import { FaArrowLeft } from "react-icons/fa";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import ComfPassword from "./ComfPassword.jsx";
import "./SingUpFrom.css";
import { useState } from "react";
const SingUpFrom = ({ onClickHandleSingUp }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [initialerrorMsg, setErrorMsg] = useState("");
  const onChangeHundulePass = (valuePass) => {
    setPassword(valuePass);
    console.log(password);
  };
  const onChangeHundule = (valueConf) => {
    setConfirmPassword(valueConf);
    console.log(confirmPassword);
    if (password !== confirmPassword) {
      setErrorMsg("Password doesn't matched");
    } else {
      setErrorMsg("Pass word Matched");
    }
  };
  return (
    <>
      <div className="inconDiv">
        <button className="iconButton" onClick={onClickHandleSingUp}>
          <FaArrowLeft className="svgIcon" />
        </button>
      </div>
      <div className="singUoFrom">
        <form action="" className="formsing">
          <div className="userName">
            <label for="firstNanme"> First Name</label>
            <input
              type="text"
              placeholder="First Name"
              id="firstNanme"
              className="form-control"
            />
            <label for="lastName"> Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              className="form-control"
            />
          </div>
          <div className="emailAndPassword">
            <label for="email" className="fixing">
              Email
            </label>
            <Email id="email"></Email>
            <label for="password" className="fixing">
              Password
            </label>
            <Password
              id="password"
              onChangeHundulePass={onChangeHundulePass}
            ></Password>
            <label for="confirmPassword" className="fixing">
              Confirm Password
            </label>
            <ComfPassword
              id="confirmPassword"
              onChangeHundule={onChangeHundule}
            ></ComfPassword>
            <p className="passError">{initialerrorMsg}</p>
          </div>
          <div className="containerSing">
            <button type="button" class="btn btn-outline-success">
              Sing Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SingUpFrom;
