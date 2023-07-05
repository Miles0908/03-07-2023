import styles from "./MailBadge.module.scss";
import { BiEnvelope } from "react-icons/bi";
import { useState } from "react";

const MailBadge = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.MailBadge}>
     <BiEnvelope color="black" onClick={handleClick}/>
      <span className={styles.MailBadge__count}>{count}</span>
    </div>
  );
};
export default MailBadge;
