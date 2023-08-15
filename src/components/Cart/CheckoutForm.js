import React from "react";
import classes from "./CheckoutForm.module.css";

const hasError = false;

const CheckoutForm = (props) => {
  const nameControlClasses = `${classes.control} ${
    hasError ? classes.invalid : ""
  }`;

  const addressControlClasses = `${classes.control} ${
    hasError ? classes.invalid : ""
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    hasError ? classes.invalid : ""
  }`;
  const cityControlClasses = `${classes.control} ${
    hasError ? classes.invalid : ""
  }`;
  const phoneControlClasses = `${classes.control} ${
    hasError ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form}>
      <h4>Informations à renseigner pour la livraison:</h4>
      <div className={nameControlClasses}>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" />
        {hasError && (
          <p className="error-text">Merci d'entrer un nom valide.</p>
        )}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Adresse</label>
        <input type="text" id="address" />
        {hasError && (
          <p className="error-text">Merci d'entrer une adresse valide.</p>
        )}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Code Postal</label>
        <input type="text" id="postal" />
        {hasError && (
          <p className="error-text">Merci d'entrer un code postal valide.</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">Ville</label>
        <input type="text" id="city" />
        {hasError && (
          <p className="error-text">Merci d'entrer une ville valide.</p>
        )}
      </div>
      <div className={phoneControlClasses}>
        <label htmlFor="phone">Téléphone</label>
        <input type="text" id="phone" />
        {hasError && (
          <p className="error-text">
            Merci d'entrer un numéro de téléphone valide.
          </p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes["confirm-button"]}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
