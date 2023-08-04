import React from "react";
import classes from "./AvailableMenu.module.css";
import MealsCard from "./MealsCard";

const STARTER_MEALS = [
  {
    id: 1,
    name: "Velouté de Légumes Gourmand",
    description:
      "Une soupe onctueuse à la courge butternut et aux carottes, relevée de notes chaudes de cannelle et de muscade.",
    price: 3.7,
  },
  {
    id: 2,
    name: "Bruschettas Méditerranéennes",
    description:
      "Des toasts croustillants garnis de tomates fraîches, d'olives kalamata, de basilic et d'une touche d'huile d'olive extra vierge",
    price: 4.2,
  },
  {
    id: 3,
    name: "Caviar d'Aubergine Épicé",
    description:
      "Une purée d'aubergine fumée agrémentée d'ail, de citron, de piment et d'herbes, accompagnée de pain pita grillé.",
    price: 4.7,
  },
  {
    id: 4,
    name: "Rouleaux de Printemps Croquants",
    description:
      "Des rouleaux frais remplis de légumes croquants tels que les concombres, les poivrons, les avocats et les herbes fraîches, servis avec une sauce aux arachides.",
    price: 3.6,
  },
];

const MAIN_MEALS = [
  {
    id: 1,
    name: "Festin Rustique",
    description:
      "Poêlée de champignons sauvages avec polenta crémeuse et persillade.",
    price: 7.5,
  },
  {
    id: 2,
    name: "Riz Pilaf aux Légumes Printaniers",
    description:
      "Un riz basmati parfumé cuit avec des légumes de saison tels que les petits pois, les asperges et les carottes, agrémenté d'herbes fraîches et de zestes de citron.",
    price: 5.9,
  },
  {
    id: 3,
    name: "Délices de la Terre",
    description:
      "Galettes de lentilles aux légumes, accompagnées de purée de patates douces.",
    price: 6.1,
  },
  {
    id: 4,
    name: "Curry de Riz et Pois Cassés",
    description: "Curry de pois cassés et légumes servis avec du riz basmati.",
    price: 7.3,
  },
];

const DESSERT_MEALS = [
  {
    id: 1,
    name: "Crumble aux Pommes et aux Noix",
    description:
      "Des pommes cuites à la perfection, surmontées d'un mélange croustillant de noix concassées, d'avoine et de cassonade.",
    price: 3.8,
  },
  {
    id: 2,
    name: "Mousse au Chocolat Noir Veloutée",
    description:
      "Mousse au chocolat noir à base d'avocat, saupoudrée de noix concassées.",
    price: 4.5,
  },
  {
    id: 3,
    name: "Tartelette aux Fruits Rouges",
    description:
      "De délicieuses tartelettes aux croûtes croustillantes, garnies de baies fraîches et nappées d'un coulis de fruits rouges.",
    price: 4.2,
  },
  {
    id: 4,
    name: "Parfait au Yaourt et aux Fruits Tropicaux",
    description:
      "Des couches de yaourt végétalien alternées avec des morceaux juteux d'ananas, de mangue et de kiwi, saupoudrées de noix de coco râpée.",
    price: 4.1,
  },
];

const AvailableMenu = () => {
  // console.log("starters: ", STARTER_MEALS);

  return (
    <section className={classes.meals}>
      <MealsCard data={STARTER_MEALS} title="Entrées" />
      <MealsCard data={MAIN_MEALS} title="Plats" />
      <MealsCard data={DESSERT_MEALS} title="Desserts" />
    </section>
  );
};

export default AvailableMenu;
