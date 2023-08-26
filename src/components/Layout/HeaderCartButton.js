import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../store/cart-context";
import { useTranslation } from "react-i18next";

const HeaderCartButton = (props) => {
  const { t } = useTranslation();
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [isBtnBump, setIsBtnBump] = useState(false);

  const nbOfCartItems = items.reduce((accumulator, item) => {
    // console.log("in reduce fn");
    return accumulator + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${isBtnBump ? classes.bump : ""}`;

  useEffect(() => {
    // console.log("USE EFFECT BTN BUMP");
    if (items.length === 0) {
      return;
    }
    setIsBtnBump(true);

    const timer = setTimeout(() => {
      setIsBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClickCartButton}>
      <span>
        <ShoppingCartIcon />
      </span>
      <span> {t("header.cart")} </span>
      <span className={classes.badge}>{nbOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
