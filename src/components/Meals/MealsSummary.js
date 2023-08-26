import React from "react";
import classes from "./MealsSummary.module.css";
import { useTranslation } from "react-i18next";

const MealsSummary = () => {
  const { t } = useTranslation();

  return (
    <section className={classes.summary}>
      <h2>{t("header.summaryTitle")} </h2>
      <p> {t("header.summaryDescription")} </p>
    </section>
  );
};

export default MealsSummary;
