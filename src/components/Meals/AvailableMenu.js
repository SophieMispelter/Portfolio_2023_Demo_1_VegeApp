import React, { useEffect, useState } from "react";
import classes from "./AvailableMenu.module.css";
import MealsCard from "./MealsCard";
import { MEALS_URL } from "../../firebase/constants";

// Before Firebase:
// const STARTER_MEALS = [
//   {
//     id: 1,
//     name: "Velouté de Légumes Gourmand",
//     description:
//       "Une soupe onctueuse à la courge butternut et aux carottes, relevée de notes chaudes de cannelle et de muscade.",
//     price: 3.7,
//     type: "starter",
//   },
//   {
//     id: 2,
//     name: "Bruschettas Méditerranéennes",
//     description:
//       "Des toasts croustillants garnis de tomates fraîches, d'olives kalamata, de basilic et d'une touche d'huile d'olive extra vierge",
//     price: 4.2,
//     type: "starter",
//   },
//   {
//     id: 3,
//     name: "Caviar d'Aubergine Épicé",
//     description:
//       "Une purée d'aubergine fumée agrémentée d'ail, de citron, de piment et d'herbes, accompagnée de pain pita grillé.",
//     price: 4.7,
//     type: "starter",
//   },
//   {
//     id: 4,
//     name: "Rouleaux de Printemps Croquants",
//     description:
//       "Des rouleaux frais remplis de légumes croquants tels que les concombres, les poivrons, les avocats et les herbes fraîches, servis avec une sauce aux arachides.",
//     price: 3.6,
//     type: "starter",
//   },
// ];

// const MAIN_MEALS = [
//   {
//     id: 5,
//     name: "Festin Rustique",
//     description:
//       "Poêlée de champignons sauvages avec polenta crémeuse et persillade.",
//     price: 7.5,
//     type: "main",
//   },
//   {
//     id: 6,
//     name: "Riz Pilaf aux Légumes Printaniers",
//     description:
//       "Un riz basmati parfumé cuit avec des légumes de saison tels que les petits pois, les asperges et les carottes, agrémenté d'herbes fraîches et de zestes de citron.",
//     price: 5.9,
//     type: "main",
//   },
//   {
//     id: 7,
//     name: "Délices de la Terre",
//     description:
//       "Galettes de lentilles aux légumes, accompagnées de purée de patates douces.",
//     price: 6.1,
//     type: "main",
//   },
//   {
//     id: 8,
//     name: "Curry de Riz et Pois Cassés",
//     description: "Curry de pois cassés et légumes servis avec du riz basmati.",
//     price: 7.3,
//     type: "main",
//   },
// ];

// const DESSERT_MEALS = [
//   {
//     id: 9,
//     name: "Crumble aux Pommes et aux Noix",
//     description:
//       "Des pommes cuites à la perfection, surmontées d'un mélange croustillant de noix concassées, d'avoine et de cassonade.",
//     price: 3.8,
//     type: "dessert",
//   },
//   {
//     id: 10,
//     name: "Mousse au Chocolat Noir Veloutée",
//     description:
//       "Mousse au chocolat noir à base d'avocat, saupoudrée de noix concassées.",
//     price: 4.5,
//     type: "dessert",
//   },
//   {
//     id: 11,
//     name: "Tartelette aux Fruits Rouges",
//     description:
//       "De délicieuses tartelettes aux croûtes croustillantes, garnies de baies fraîches et nappées d'un coulis de fruits rouges.",
//     price: 4.2,
//     type: "dessert",
//   },
//   {
//     id: 12,
//     name: "Parfait au Yaourt et aux Fruits Tropicaux",
//     description:
//       "Des couches de yaourt végétalien alternées avec des morceaux juteux d'ananas, de mangue et de kiwi, saupoudrées de noix de coco râpée.",
//     price: 4.1,
//     type: "dessert",
//   },
// ];

const AvailableMenu = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // declaration of async meals fn
    const fetchMeals = async () => {
      // fetch data/response from the Firebase api
      const response = await fetch(MEALS_URL);

      // convert response to json
      const responseData = await response.json();
      // fetchMeals();
      // console.log("responseData: ", responseData);

      // turning responseData obj into array to apply map() for displaying results
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

      // set state with the result
      setMeals(mealsArray);
      // console.log("mealsArray: ", mealsArray);
    };

    fetchMeals();
  }, []);

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
