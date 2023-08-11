import { forwardRef } from "react";
import style from "../Inputs/style.module.scss";

export const Input = forwardRef(({ error, label, ...rest }, ref) => {
  return (
    <div className={style.div}>
      <label className="label">{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
