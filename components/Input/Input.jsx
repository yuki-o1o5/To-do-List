import styles from "components/Input/Input.module.css";
const Input = () => {
  return (
    <input
      type="text"
      className={styles.newInput}
      placeholder="What needs to be done?"
    ></input>

  );
};

export default Input;
