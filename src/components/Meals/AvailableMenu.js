import React, { useEffect, useState } from "react";
import classes from "./AvailableMenu.module.css";
import MealsCard from "./MealsCard";
import { MEALS_URL } from "../../firebase/constants";

const AvailableMenu = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);

      const response = await fetch(MEALS_URL);

      if (!response.ok) {
        throw new Error("Oops! Veuillez réessayer.");
      }

      const responseData = await response.json();

      const mealsArray = [];
      for (const key in responseData) {
        mealsArray.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          type: responseData[key].type,
        });
      }

      setMeals(mealsArray);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
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
        <div className={classes["loader-background"]}></div>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>Une erreur vient de se produire...</p>
        <p>Veuillez réessayer.</p>
      </section>
    );
  }

  const filterStarter = meals.filter((item) => item.type === "starter");
  const filterMain = meals.filter((item) => item.type === "main");
  const filterDessert = meals.filter((item) => item.type === "dessert");

  return (
    <section className={classes.meals}>
      {!isLoading && (
        <>
          <MealsCard data={filterStarter} title="Entrées" />
          <MealsCard data={filterMain} title="Plats" />
          <MealsCard
            className={classes.dessert}
            data={filterDessert}
            title="Desserts"
          />
        </>
      )}
    </section>
  );
};

export default AvailableMenu;
