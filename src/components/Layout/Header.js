import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/veggie_lifestyle_5.jpg";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>VegeApp</h1>
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
