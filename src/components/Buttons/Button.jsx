import styles from "./Button.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowTurnUp } from "react-icons/fa6";

//Questo è quello che andremo a prevedere come componenti
//del button :
//Icon / icon position / disable / fill o outline / rounded

const Button = (props) => {
  const { icon, iconLeft, label, outline, size, square } = props || null;

  return (
    <div
      className={`
    ${styles.Button}
    ${iconLeft ? styles.iconLeft : ""}
    ${outline ? styles.outline : styles.fill}
    ${size ? styles[size] : styles.md}
    ${square ? styles.square : styles.default}
 `}
    >
      {label && !square && label}
      {icon && <FaArrowRight />}
    </div>
  );

  /*  <div className={styles.Button}>
    <button className={styles.Button__Xl}>Go to <div> <FaArrowRightLong/></div></button>
    <button className={styles.Button__Md}><FaArrowRightLong/></button>
    <button className={styles.Button__Sm}><FaArrowTurnUp/></button>
  </div>; */
};
export default Button;
