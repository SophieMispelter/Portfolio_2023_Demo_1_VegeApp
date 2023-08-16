import React from "react";
// import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={props.classes}>
      <label htmlFor={props.input.id}> {props.label} </label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

// const Input = (props) => {
//     // console.log('input props: ', props);

//   return (
//     <div className={classes.input}>
//       <label> {props.label} </label>
//       <input {...props.input} />
//     </div>
//   );
// };

export default Input;
