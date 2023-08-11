import { forwardRef, useState } from "react";
import styles from "./style.module.scss";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={styles.inputBox}>
      <label className="label">{label}</label>
      <aside className={styles.inputGrid}>
        <input type={isHidden ? "password" : "text"} ref={ref} {...rest} />
        <span type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <MdVisibilityOff /> : <MdVisibility />}
        </span>
      </aside>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
