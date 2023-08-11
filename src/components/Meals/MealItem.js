import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `€${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    // console.log('amount: ', amount);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      type: props.type,
    });
  };

  return (
    <li className={classes.meal}>
      <div className={classes["mealItem-description"]}>
        <h4>{props.name}</h4>
        <div className={classes.description}>{props.description}</div>
        <div className={classes["order-container"]}>
          <span>{price}</span>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default MealItem;
