import "./SingUp.css";
const SingUp = ({ onClickHandle }) => {
  return (
    <div className="containerS">
      <p className="singupPara">Don't have an account?</p>
      <button
        type="button"
        class="btn btn-outline-success"
        onClick={onClickHandle}
      >
        Sing Up
      </button>
    </div>
  );
};
export default SingUp;
