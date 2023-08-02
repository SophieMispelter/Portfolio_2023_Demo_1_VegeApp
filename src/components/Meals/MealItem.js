import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `€${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div className={classes["mealItem-description"]}>
        <h4>{props.name}</h4>
        <div className={classes.description}>{props.description}</div>
        <div className={classes["order-container"]}>
          <span>{price}</span>
          <MealItemForm id={props.id} />
        </div>
      </div>
    </li>
  );
};

export default MealItem;
