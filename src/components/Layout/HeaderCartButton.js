import classes from "./HeaderCartButton.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span>
        <ShoppingCartIcon />
      </span>
      <span>Votre Panier</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
