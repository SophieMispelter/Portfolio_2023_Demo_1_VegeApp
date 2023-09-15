import React, { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/veggie_lifestyle_5.jpg";
import HeaderCartButton from "./HeaderCartButton";
import { useTranslation } from "react-i18next";
import CartContext from "../store/cart-context";

const lngs = {
  en: { nativeName: "EN" },
  fr: { nativeName: "FR" },
};

const Header = (props) => {
  const { i18n } = useTranslation();
  const cartCtx = useContext(CartContext);

  const changeLanguageHandler = (lng) => {
    // console.log("lng: ", lng);
    i18n.changeLanguage(lng);
    cartCtx.clearCart();
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>VegeApp</h1>
        <div className={classes.interactions}>
          <HeaderCartButton onClickCartButton={props.onShowCart} />
          <div>
            {Object.keys(lngs).map((lng) => {
              // console.log("switch language");
              return (
                <button
                  className={`${classes.LngBtn} ${
                    i18n.resolvedLanguage === lng ? classes.LngBtnActive : ""
                  }`}
                  type="submit"
                  key={lng}
                  onClick={changeLanguageHandler.bind(this, lng)}
                  // disabled={i18n.resolvedLanguage === lng}
                >
                  {lngs[lng].nativeName}
                </button>
              );
            })}
          </div>
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img
          src={mealsImage}
          alt="A table full of delicious vegetarian food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
