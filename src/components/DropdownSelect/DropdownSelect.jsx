import styles from "./DropdownSelect.module.scss"
import { useState } from "react";

const DropdownSelect = (props) => {
    const { options, handleChange } = props || null;
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState();
  
    const handleValue = (option) => {
      handleChange(option);
      setSelected(option);
      setOpen(false);
    };
  
    return (
      <div className={styles.dropdownContainer}>
        <div
          className={styles.dropdown}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {selected ? selected?.label : "Seleziona"}
        </div>
        {options && (
          <ul className={`${styles.options} ${open ? styles.open : ""}`}>
            {options?.options?.map((option) => (
              <li
                onClick={() => handleValue(option)}
                className={styles.option}
                key={option?.id}
              >
                {option?.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default DropdownSelect;