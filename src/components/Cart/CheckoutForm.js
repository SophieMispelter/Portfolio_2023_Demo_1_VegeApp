import React, { useContext } from "react";
import classes from "./CheckoutForm.module.css";
import Input from "../UI/Input";
import useInput from "../hooks/use-input";

// const hasError = false;
const isTextValid = (value) => value.trim() !== "";
const regex = new RegExp("^[0-9]+$");
const isNumberValid = (value) => regex.test(value);

const CheckoutForm = (props) => {
  const {
    value: nameValue,
    hasError: nameHasError,
    isValid: nameIsValid,
    onChange: nameChangeHandler,
    onBlur: nameBlurHandler,
    resetAfterFormSubmission: resetName,
  } = useInput(isTextValid);
  const {
    value: addressValue,
    hasError: addressHasError,
    isValid: addressIsValid,
    onChange: addressChangeHandler,
    onBlur: addressBlurHandler,
    resetAfterFormSubmission: resetAddress,
  } = useInput(isTextValid);
  const {
    value: postalCodeValue,
    hasError: postalCodeHasError,
    isValid: postalCodeIsValid,
    onChange: postalCodeChangeHandler,
    onBlur: postalCodeBlurHandler,
    resetAfterFormSubmission: resetPostalCode,
  } = useInput(isNumberValid);
  const {
    value: cityValue,
    hasError: cityHasError,
    isValid: cityIsValid,
    onChange: cityChangeHandler,
    onBlur: cityBlurHandler,
    resetAfterFormSubmission: resetCity,
  } = useInput(isTextValid);
  const {
    value: phoneValue,
    hasError: phoneHasError,
    isValid: phoneIsValid,
    onChange: phoneChangeHandler,
    onBlur: phoneBlurHandler,
    resetAfterFormSubmission: resetPhone,
  } = useInput(isNumberValid);

  let formIsValid = false;
  if (
    nameIsValid &&
    addressIsValid &&
    postalCodeIsValid &&
    cityIsValid &&
    phoneIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // console.log(
    //   "checkout form values: ",
    //   nameValue,
    //   addressValue,
    //   postalCodeValue,
    //   cityValue,
    //   phoneValue
    // );

    if (!formIsValid) {
      return;
    }

    console.log("form submitted");

    resetName();
    resetAddress();
    resetPostalCode();
    resetCity();
    resetPhone();
  };

  const nameControlClasses = `${classes.control} ${
    nameHasError ? classes.invalid : ""
  }`;

  const addressControlClasses = `${classes.control} ${
    addressHasError ? classes.invalid : ""
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    postalCodeHasError ? classes.invalid : ""
  }`;
  const cityControlClasses = `${classes.control} ${
    cityHasError ? classes.invalid : ""
  }`;
  const phoneControlClasses = `${classes.control} ${
    phoneHasError ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h4>Informations à renseigner pour la livraison:</h4>
      <Input
        label="name"
        classes={nameControlClasses}
        input={{
          type: "text",
          id: "name",
          value: nameValue,
          onChange: nameChangeHandler,
          onBlur: nameBlurHandler,
        }}
      />
      {nameHasError && (
        <p className="error-text">Merci d'entrer un nom valide.</p>
      )}
      <Input
        label="address"
        classes={addressControlClasses}
        input={{
          type: "text",
          id: "address",
          value: addressValue,
          onChange: addressChangeHandler,
          onBlur: addressBlurHandler,
        }}
      />
      {addressHasError && (
        <p className="error-text">Merci d'entrer une adresse valide.</p>
      )}
      <Input
        label="postal"
        classes={postalCodeControlClasses}
        input={{
          type: "text",
          id: "postal",
          value: postalCodeValue,
          onChange: postalCodeChangeHandler,
          onBlur: postalCodeBlurHandler,
        }}
      />
      {postalCodeHasError && (
        <p className="error-text">Merci d'entrer un code postal valide.</p>
      )}
      <Input
        label="city"
        classes={cityControlClasses}
        input={{
          type: "text",
          id: "city",
          value: cityValue,
          onChange: cityChangeHandler,
          onBlur: cityBlurHandler,
        }}
      />
      {cityHasError && (
        <p className="error-text">Merci d'entrer une ville valide.</p>
      )}
      <Input
        label="phone"
        classes={phoneControlClasses}
        input={{
          type: "text",
          id: "phone",
          value: phoneValue,
          onChange: phoneChangeHandler,
          onBlur: phoneBlurHandler,
        }}
      />
      {phoneHasError && (
        <p className="error-text">
          Merci d'entrer un numéro de téléphone valide.
        </p>
      )}

      <div className={classes.actions}>
        <button type="button" onClick={props.onCloseCheckoutForm}>
          Cancel
        </button>
        <button className={classes["confirm-button"]}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
