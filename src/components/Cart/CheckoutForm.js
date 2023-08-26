import React from "react";
import classes from "./CheckoutForm.module.css";
import Input from "../UI/Input";
import useInput from "../hooks/use-input";
import { useTranslation } from "react-i18next";

const isTextValid = (value) => value.trim() !== "";
const regex = new RegExp("^[0-9]+$");
const isNumberValid = (value) => regex.test(value);

const CheckoutForm = (props) => {
  const { t } = useTranslation();
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
    // console.log("form is valid");
    formIsValid = true;
  }
  // console.log(formIsValid);

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
    // Security reason: for the HTTP POST, none of the user's data are going to be sent but only their ordered items.
    props.onConfirm();

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
      <h4>{t("checkoutForm.info")} </h4>
      <Input
        label={t("input.nameLabel")}
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
        <p className="error-text">{t("checkoutForm.nameError")}</p>
      )}
      <Input
        label={t("input.addressLabel")}
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
        <p className="error-text">{t("checkoutForm.addressError")}</p>
      )}
      <Input
        label={t("input.postalLabel")}
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
        <p className="error-text">{t("checkoutForm.postalError")}</p>
      )}
      <Input
        label={t("input.cityLabel")}
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
        <p className="error-text">{t("checkoutForm.cityError")}</p>
      )}
      <Input
        label={t("input.phoneLabel")}
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
        <p className="error-text">{t("checkoutForm.phoneError")}</p>
      )}

      <div className={classes.actions}>
        <button type="button" onClick={props.onCloseCheckoutForm}>
          {t("checkoutForm.btnCancel")}
        </button>
        <button
          type="submit"
          className={classes["confirm-button"]}
          disabled={!formIsValid}
        >
          {t("checkoutForm.btnPay")}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
