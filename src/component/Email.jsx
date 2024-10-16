import { useState } from "react";
import "./Email.css";

const Email = () => {
  const emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [initialVal, setVal] = useState("");
  const errorMessage = (value) => {
    if (emailVal.test(value)) {
      setVal(" ");
    } else {
      setVal("Invalid Email");
    }
  };
  return (
    <div className="mb-2">
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Enter your Email"
        onChange={(e) => errorMessage(e.target.value)}
      />
      <p className="errorMsg">{initialVal}</p>
    </div>
  );
};
export default Email;
