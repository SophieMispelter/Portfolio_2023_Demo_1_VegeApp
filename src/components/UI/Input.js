import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    // console.log('input props: ', props);

  return (
    <div className={classes.input}>
      <label> {props.label} </label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
