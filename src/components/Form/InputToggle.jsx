import styles from "./InputToggle.module.scss";
import { useState } from "react";

const InputToggle = ({ toggled }) => {
  const [isToggled, setIsToggled] = useState(toggled);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <label className={styles.InputToggle}>
      <input
        type="checkbox"
        onClick={() => handleToggle()}
        defaultChecked={isToggled}
        className={styles.Input}
      />
      <span className={styles.toggle}></span>
    </label>
  );
};
export default InputToggle;
