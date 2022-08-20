import { forwardRef } from 'react'
import styles from "./style.module.css";

const Input = forwardRef((props, ref ) => {
  return (
    <div className={styles.block}>
      <label>{props.title}</label>
      <input ref={ref} {...props} />
    </div>
  );
});
export default Input;