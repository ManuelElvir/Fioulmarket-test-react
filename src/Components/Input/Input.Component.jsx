import React, { useState } from "react";

import styles from "./Input.module.scss";

const Input = ({ label, name, type = 'text', register, options, errors, defaultErrorMessage }) => {
  
    const [show, toggleShow] = useState(false);
  
    return (
    <div className={styles.formRow}>
      <label className={styles.formLabel}>{label}</label>
      <div className={styles.inputContainer}>
        <input
            type={type==='password' && show ? 'text' : type}
            className={`${styles.formInput} ${errors?styles.formInputError:''}`}
            {...register(name, options)}
        />
        {
            type==='password' && 
            <span className={styles.inputVisibility} onClick={() => toggleShow(!show)}>
                <img width="14" height="14" src={show ? 'img/eye-off.svg' : 'img/eye.svg'} />
            </span>
        }
      </div>
      
      {errors && <span className={styles.formError}>{errors.message || defaultErrorMessage}</span>}
    </div>
  );
};

export default Input;
