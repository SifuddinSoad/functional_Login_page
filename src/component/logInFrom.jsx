import styles from "./logInFrom.module.css";
import "./logInFrom.css";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
const LogInFrom = () => {
  return (
    <>
      <div className={styles.container}>
        <Email></Email>
        <Password></Password>
        <button type="button" className="btn btn-outline-primary logbtn">
          Log In
        </button>
        <div className={styles.forgotPassword}>
          <a
            class="link-offset-2 link-underline link-underline-opacity-0"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </>
  );
};

export default LogInFrom;
