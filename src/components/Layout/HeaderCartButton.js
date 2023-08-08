import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const nbOfCartItems = cartCtx.items.reduce((accumulator, item) => {
    // console.log("in reduce fn");
    return accumulator + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClickCartButton}>
      <span>
        <ShoppingCartIcon />
      </span>
      <span>Votre Panier</span>
      <span className={classes.badge}>{nbOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
