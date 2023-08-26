import React, { useEffect, useState } from "react";
import classes from "./AvailableMenu.module.css";
import MealsCard from "./MealsCard";
import {
  /*ERROR_1_MEALS_URL, ERROR_2_MEALS_URL,*/ MEALS_URL,
} from "../../firebase/constants";

const AvailableMenu = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    // declaration of async fetchMeals fn
    const fetchMeals = async () => {
      setIsLoading(true);

      // fetch data/response from the Firebase api
      const response = await fetch(
        // Correct URL
        MEALS_URL

        // Handling (intentional) Errors:
        // 1 -  where the response object exists, here !response.ok is true we throw an error instead of a promise, hence, that error will cause that promise to reject. => Something went wrong!
        // ERROR_1_MEALS_URL
        // 2 - where the response object doesn't exists, hence, the promise will be rejected, we will never get into the if statement => Failed to fetch:
        // ERROR_2_MEALS_URL
      );

      // console.log("response: ", response);
      if (!response.ok) {
        // console.log("error");
        throw new Error("Oops! Veuillez réessayer.");
      }

      // convert response to json
      const responseData = await response.json();
      // fetchMeals();
      // console.log("responseData: ", responseData);

      // turning responseData obj into array to apply map() in MealsCard.js for displaying results
      const mealsArray = [];
      for (const key in responseData) {
        // key = object's properties
        mealsArray.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          type: responseData[key].type,
        });
      }

      // set state with result
      setMeals(mealsArray);
      // console.log("mealsArray: ", mealsArray);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      // console.log("error catched!");
      // console.log("error: ", error);
      setIsLoading(false);
      setHttpError(error.message);
      // console.log("error.message: ", error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <div className={classes.loader}>
          <p>En chargement</p>
          <span className={classes["loader-element"]}></span>
          <span className={classes["loader-element"]}></span>
          <span className={classes["loader-element"]}></span>
        </div>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>Une erreur vient de se produire...</p>
        <p>Veuillez réessayer.</p>
        {/* <p>{httpError}</p> */}
      </section>
    );
  }

  const filterStarter = meals.filter((item) => item.type === "starter");
  const filterMain = meals.filter((item) => item.type === "main");
  const filterDessert = meals.filter((item) => item.type === "dessert");

  return (
    <section className={classes.meals}>
      <MealsCard ard data={filterStarter} title="Entrées" />
      <MealsCard data={filterMain} title="Plats" />
      <MealsCard data={filterDessert} title="Desserts" />
    </section>
  );
};

export default AvailableMenu;
