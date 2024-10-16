import "./password.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";

const Password = ({ onChangeHundulePass }) => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [initialerrorMsg, setErrorMsg] = useState("");
  const handlePasswordChange = (pasVal) => {
    if (password.length < 7) {
      setErrorMsg("Minimum digit must be 8");
    } else {
      setErrorMsg("");
    }
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="container">
      <div className="flex ">
        <input
          type={type}
          name="password"
          placeholder="Password"
          className="form-control passInput"
          value={password}
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
            handlePasswordChange(e.target.value);
            onChangeHundulePass(e.target.value);
          }}
          autoComplete="current-password"
        />
        <span
          className="flex justify-around items-center"
          onClick={handleToggle}
        >
          <Icon className="absolute mr-10" icon={icon} size={16} />
        </span>
        <p className="passError">{initialerrorMsg}</p>
      </div>
    </div>
  );
};

export default Password;
