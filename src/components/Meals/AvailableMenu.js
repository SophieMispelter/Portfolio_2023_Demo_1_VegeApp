import React, { useEffect, useState } from "react";
import classes from "./AvailableMenu.module.css";
import MealsCard from "./MealsCard";
import { MEALS_URL_FR, MEALS_URL_EN } from "../../firebase/constants";
import { useTranslation } from "react-i18next";

const AvailableMenu = () => {
  const { t, i18n } = useTranslation();
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    // console.log("in USE EFFECT");
    const fetchMeals = async () => {
      setIsLoading(true);

      // console.log("i18n.resolvedLanguage: ", i18n.resolvedLanguage);

      let URL = MEALS_URL_EN;
      if (i18n.resolvedLanguage === "fr") {
        URL = MEALS_URL_FR;
      }
      // console.log("URL: ", URL);

      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Oops! Veuillez réessayer.");
      }

      const responseData = await response.json();
      // console.log("responseData: ", responseData);

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
  }, [i18n.resolvedLanguage]);

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

  let filterStarter = meals.filter((item) => item.type === "Starter");
  let filterMain = meals.filter((item) => item.type === "Main");
  let filterDessert = meals.filter((item) => item.type === "Dessert");
  if (i18n.resolvedLanguage === "fr") {
    filterStarter = meals.filter((item) => item.type === "Entrée");
    filterMain = meals.filter((item) => item.type === "Plat");
    filterDessert = meals.filter((item) => item.type === "Dessert");
  }

  return (
    <section className={classes.meals}>
      {!isLoading && (
        <>
          <MealsCard data={filterStarter} title={t("modal.starters")} />
          <MealsCard data={filterMain} title={t("modal.main")} />
          <MealsCard
            className={classes.dessert}
            data={filterDessert}
            title={t("modal.dessert")}
          />
        </>
      )}
    </section>
  );
};

export default AvailableMenu;
