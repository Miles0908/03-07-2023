import styles from "./Input.module.scss";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff , MdForwardToInbox} from "react-icons/md";

const Input = (props) => {
  const {
    type,
    id,
    name,
    line,
    placeholder,
    disabled,
    label,
    icon,
    error,
    errorMessage,
    handleChange,
  } = props || null;

  const [showPassword, setShowPassword ] =useState(false)
  const [inputType, setInputType] = useState(type);
  const [hasInput, setHasInput] = useState(false);

  const handleInputChange = (value) => {
    setHasInput(value.length > 0); 
  
    handleChange(value);
  }
 
  
  const handleTogglePassword= ()=>{
    setShowPassword(!showPassword);
    setInputType(showPassword ? type :"text")
  }

  const renderIcon= ()=>{
    if (type === "password" && icon){
        return (
            <span className={styles.icon} onClick={handleTogglePassword}>
                {showPassword ? <MdVisibility/> : <MdVisibilityOff/>}
            </span>
        )
    }
    return null;
  }
  const renderEmailIcon= ()=>{
    if (type === "email" && icon){
        return (
            <span className={styles.icon} >
               <MdForwardToInbox/>
            </span>
        )
    }
    return null;
  }



  return (
    <div className={`${styles.Input} ${hasInput ? '' : styles.error}`}>
      <label htmlFor={id}>
        <span className={styles.label}>{label}:</span>
        <input className={styles.input} type={inputType} placeholder={placeholder} id={id} name={name} disabled={disabled} onChange={(e) => handleInputChange(e.target.value)} />
        {renderIcon()}
        {renderEmailIcon()}
        {(error || hasInput) && errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </label>
    </div>
  );
};
export default Input;
