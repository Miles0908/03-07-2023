import { useEffect, useState } from "react";
import styles from "./InputCheckbox.module.scss";
import {FaCheck} from "react-icons/fa6"

const InputCheckbox = (props) => {
  const { checked } = props || null;

  const [isChecked, setIsChecked] = useState(false);

/*   useEffect(() => {
    setIsChecked(isChecked);
  }, [isChecked]); */

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  console.log(checked)

  return (


    <label className={styles.InputCheckbox}>
      <input
        className={`${styles.input} ${isChecked ? styles.active : ""}`}
        type="checkbox"
        defaultChecked={isChecked}
        onClick={ ()=>toggleCheckbox()}
      />
      <span className={`${styles.checked} ${isChecked ? styles.active : ""}`}>
        <FaCheck/>
      </span>
    </label>
  );
};
export default InputCheckbox;
