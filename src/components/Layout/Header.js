import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/veggie_lifestyle_5.jpg";
import HeaderCartButton from "./HeaderCartButton";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "EN" },
  fr: { nativeName: "FR" },
};

const Header = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>VegeApp</h1>
        <HeaderCartButton onClickCartButton={props.onShowCart} />
        <div>
          {Object.keys(lngs).map((lng) => {
            // console.log("switch language");
            return (
              <button
                type="submit"
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                disabled={i18n.resolvedLanguage === lng}
              >
                {lngs[lng].nativeName}
              </button>
            );
          })}
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
