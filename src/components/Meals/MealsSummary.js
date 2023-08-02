import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h3>VegeApp: Livraison Rapide de Repas Végétariens Savoureux</h3>
      <p>Découvrez notre appli de livraison de repas végétariens.</p>
      <p>
        Commandez des plats équilibrés et préparés avec des ingrédients de
        saison.
      </p>
      <p>Faites-vous livrer rapidement où que vous soyez.</p>
    </section>
  );
};

export default MealsSummary;
