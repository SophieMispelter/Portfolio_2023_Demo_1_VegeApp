import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMenu from "./AvailableMenu";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMenu />
    </Fragment>
  );
};

export default Meals;
