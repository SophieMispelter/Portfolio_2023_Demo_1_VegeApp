const MEALS = [
  {
    id: "m1",
    name: "Velouté de Légumes Gourmand",
    description:
      "Une soupe onctueuse à la courge butternut et aux carottes, relevée de notes chaudes de cannelle et de muscade.",
    price: 3.7,
    type: "Entrée",
  },
  {
    id: "m2",
    name: "Bruschettas Méditerranéennes",
    description:
      "Des toasts croustillants garnis de tomates fraîches, d'olives kalamata, de basilic et d'une touche d'huile d'olive extra vierge",
    price: 4.2,
    type: "Entrée",
  },
  {
    id: "m3",
    name: "Caviar d'Aubergine Épicé",
    description:
      "Une purée d'aubergine fumée agrémentée d'ail, de citron, de piment et d'herbes, accompagnée de pain pita grillé.",
    price: 4.7,
    type: "Entrée",
  },
  {
    id: "m4",
    name: "Rouleaux de Printemps Croquants",
    description:
      "Des rouleaux frais remplis de légumes croquants tels que les concombres, les poivrons, les avocats et les herbes fraîches, servis avec une sauce aux arachides.",
    price: 3.6,
    type: "Entrée",
  },
  {
    id: "m5",
    name: "Festin Rustique",
    description:
      "Poêlée de champignons sauvages avec polenta crémeuse et persillade.",
    price: 7.5,
    type: "Plat",
  },
  {
    id: "m6",
    name: "Riz Pilaf aux Légumes Printaniers",
    description:
      "Un riz basmati parfumé cuit avec des légumes de saison tels que les petits pois, les asperges et les carottes, agrémenté d'herbes fraîches et de zestes de citron.",
    price: 5.9,
    type: "Plat",
  },
  {
    id: "m7",
    name: "Délices de la Terre",
    description:
      "Galettes de lentilles aux légumes, accompagnées de purée de patates douces.",
    price: 6.1,
    type: "Plat",
  },
  {
    id: "m8",
    name: "Curry de Riz et Pois Cassés",
    description: "Curry de pois cassés et légumes servis avec du riz basmati.",
    price: 7.3,
    type: "Plat",
  },
  {
    id: "m9",
    name: "Crumble aux Pommes et aux Noix",
    description:
      "Des pommes cuites à la perfection, surmontées d'un mélange croustillant de noix concassées, d'avoine et de cassonade.",
    price: 3.8,
    type: "Dessert",
  },
  {
    id: "m10",
    name: "Mousse au Chocolat Noir Veloutée",
    description:
      "Mousse au chocolat noir à base d'avocat, saupoudrée de noix concassées.",
    price: 4.5,
    type: "Dessert",
  },
  {
    id: "m11",
    name: "Tartelette aux Fruits Rouges",
    description:
      "De délicieuses tartelettes aux croûtes croustillantes, garnies de baies fraîches et nappées d'un coulis de fruits rouges.",
    price: 4.2,
    type: "Dessert",
  },
  {
    id: "m12",
    name: "Parfait au Yaourt et aux Fruits Tropicaux",
    description:
      "Des couches de yaourt végétalien alternées avec des morceaux juteux d'ananas, de mangue et de kiwi, saupoudrées de noix de coco râpée.",
    price: 4.1,
    type: "Dessert",
  },
];

export const ORDERS = [
  { id: "id-1",
    orderedItems: [
     {
        id: "m12",
        amount: 1,
        name: "Parfait au Yaourt et aux Fruits Tropicaux",
        price: 4.1,
        type: "Dessert",
      },
      {
        id: "m4",
        amount: 2,
        name: "Rouleaux de Printemps Croquants",
        price: 7.2,
        type: "Entrée",
      },
    ],
  },
];

export default MEALS;
