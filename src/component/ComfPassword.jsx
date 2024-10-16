import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";

const ComfPassword = ({ onChangeHundule }) => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
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
      <div class="flex ">
        <input
          type={type}
          name="password"
          placeholder="Password"
          className="form-control passInput"
          value={password}
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
            onChangeHundule(e.target.value);
          }}
          autoComplete="current-password"
        />
        <span class="flex justify-around items-center" onClick={handleToggle}>
          <Icon class="absolute mr-10" icon={icon} size={16} />
        </span>
        <p className="passError">{}</p>
      </div>
    </div>
  );
};
export default ComfPassword;
