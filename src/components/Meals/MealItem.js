import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../store/cart-context";
// import map from "../../data/mapImg";

const MealItem = (props) => {
  // console.log("MealItem props: ", props);
  const cartCtx = useContext(CartContext);

  const price = `€${props.price.toFixed(2)}`;

  // console.log("map: ", map);
  // console.log(map.get(props.id));
  // const imgObj = map.get(props.id);
  // console.log("imgObj: ", imgObj);
  // console.log("imgObj.img: ", imgObj.img);
  // console.log("imgObj.alt: ", imgObj.alt);

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
        <div className={classes.mealContainer}>
          <h4>{props.name}</h4>
          <div className={classes.description}>{props.description}</div>
          <div className={classes["order-container"]}>
            <span>{price}</span>
            <div className={classes.mealItemForm}>
              <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
          </div>
        </div>
        {/* Before moving img to Firebase: */}
        {/* {imgObj && (
          <a className={classes.mealImg} href={imgObj.credit} target="_blank">
            <img src={imgObj.img} alt={imgObj.alt} />
          </a>
        )} */}
        <a
          className={classes.mealImg}
          href={props.img.creditTo}
          target="_blank"
          rel="noreferrer"
        >
          <img src={props.img.name} alt={props.img.alt} />
        </a>
      </div>
    </li>
  );
};

export default MealItem;
