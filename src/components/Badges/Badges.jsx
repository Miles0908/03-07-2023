import styles from "./Badges.module.scss";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";


//color,

const Badges = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className={styles.Badges}>
      <FaCartArrowDown color="black" onClick={handleClick} />
      <span className={styles.Badges__count}>{count}</span>
 
    
    </div>
    
  );
};
export default Badges;
