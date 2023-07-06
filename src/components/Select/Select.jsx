import styles from "./Select.module.scss"

const Select = (props) => {
    const { options, defaultValue, handleChange } = props || null;
    return (
      <div className={styles.selectContainer}>
        {options && (
          <select
            className={styles.select}
            name={options?.name}
            id={options?.id}
            defaultValue={defaultValue}
            onChange={(e) => handleChange(e.target.value)}
          >
            {options?.options?.map((option) => (
              <option key={option?.id} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  };
  
  export default Select;