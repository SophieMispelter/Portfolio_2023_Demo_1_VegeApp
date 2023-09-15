import React from "react";
import classes from "./MealsCard.module.css";
import MealItem from "./MealItem";

const MealsCard = (props) => {
  // console.log("MealsCard props: ", props);

  const mealsList = props.data.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      img={meal.img}
      description={meal.description}
      price={meal.price}
      type={meal.type}
      className={""}
    />
  ));
  return (
    <div className={classes.card}>
      <h3> {props.title} </h3>
      <div className={classes.line}></div>
      <ul className={props.className}>{mealsList}</ul>

      {/* {props.data.map((meal) => (
        <MealItem
          id={meal.id}
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))} */}
    </div>
  );
};

export default MealsCard;
