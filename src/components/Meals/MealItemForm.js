import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import { useTranslation } from "react-i18next";

const MealItemForm = (props) => {
  const { t } = useTranslation();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  // console.log("amountInputRef", amountInputRef);

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("MealItemForm submitted");

    const enteredAmount = amountInputRef.current.value;
    // console.log("enteredAmount: ", typeof(enteredAmount)); //type string
    const enteredAmountNumber = +enteredAmount;
    // console.log("enteredAmountNumber: ", typeof(enteredAmountNumber)); //type number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label={t("input.quantityLabel")}
        classes={classes.input}
        input={{
          //   id: "amount",
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>+</button>
      {!amountIsValid && <p> {t("mealItemForm.amountError")} </p>}
    </form>
  );
};

export default MealItemForm;
