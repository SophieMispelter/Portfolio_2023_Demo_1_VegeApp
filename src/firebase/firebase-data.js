const MEALS = [
  {
    id: "m01",
    name: "Velouté de Légumes Gourmand",
    description:
      "Une soupe onctueuse à la courge butternut et aux carottes, relevée de notes chaudes de cannelle et de muscade.",
    price: 3.7,
    type: "Entrée",
    img: {
      name: "butternutSoup.png",
      alt: "Une belle photo de notre Velouté de Légumes Gourmand!",
      creditTo:
        "https://clemfoodie.com/2017/11/18/soupe-de-courge-butternut-carottes-poireaux/#google_vignette",
    },
  },
  {
    id: "m02",
    name: "Bruschettas Méditerranéennes",
    description:
      "Des toasts croustillants garnis de tomates fraîches, d'olives kalamata, de basilic et d'une touche d'huile d'olive extra vierge",
    price: 4.2,
    type: "Entrée",
    img: {
      name: "bruschettaImg.png",
      alt: "Une belle photo de nos Bruschettas Méditerranéennes!",
      creditTo:
        "https://www.cuisineaz.com/diaporamas/recettes-de-bruschetta-speciales-ete-2586/interne/1.aspx",
    },
  },
  {
    id: "m03",
    name: "Caviar d'Aubergine Épicé",
    description:
      "Une purée d'aubergine fumée agrémentée d'ail, de citron, de piment et d'herbes, accompagnée de pain pita grillé.",
    price: 4.7,
    type: "Entrée",
    img: {
      name: "caviarAubergine.png",
      alt: "Une belle photo de notre Caviar d'Aubergine Épicé!",
      creditTo:
        "https://turbigo-gourmandises.fr/recette-story-caviar-daubergines-cuisine-marie-claire-idees/",
    },
  },
  {
    id: "m04",
    name: "Rouleaux de Printemps Croquants",
    description:
      "Des rouleaux frais remplis de légumes croquants tels que les concombres, les poivrons, les avocats et les herbes fraîches, servis avec une sauce aux arachides.",
    price: 3.6,
    type: "Entrée",
    img: {
      name: "springRoll.png",
      alt: "Une belle photo de nos Rouleaux de Printemps Croquants!",
      creditTo:
        "https://naturelles-magazine.com/recette-rouleaux-de-printemps-vegetariens-colores/",
    },
  },
  {
    id: "m05",
    name: "Festin Rustique",
    description:
      "Poêlée de champignons sauvages avec polenta crémeuse et persillade.",
    price: 7.5,
    type: "Plat",
    img: {
      name: "Festin-Rustique-img.png",
      alt: "Une belle photo de notre Festin Rustique!",
      creditTo: "https://larecette.net/polenta-cremeuse-et-champignons-frits/",
    },
  },
  {
    id: "m06",
    name: "Riz Pilaf aux Légumes Printaniers",
    description:
      "Un riz basmati parfumé cuit avec des légumes de saison tels que les petits pois, les asperges et les carottes, agrémenté d'herbes fraîches et de zestes de citron.",
    price: 5.9,
    type: "Plat",
    img: {
      name: "veggeRice.png",
      alt: "Une belle photo de notre Riz Pilaf aux Légumes Printaniers!",
      creditTo:
        "https://www.cuisineactuelle.fr/recettes/riz-pilaf-vegetarien-194061",
    },
  },
  {
    id: "m07",
    name: "Délices de la Terre",
    description:
      "Galettes de lentilles aux légumes, accompagnées de purée de patates douces.",
    price: 6.1,
    type: "Plat",
    img: {
      name: "lentilGaletteImg.png",
      alt: "Une belle photo de nos Délices de la Terre!",
      creditTo:
        "https://www.750g.com/galettes-de-lentilles-et-patates-douces-r206369.htm",
    },
  },
  {
    id: "m08",
    name: "Curry de Riz et Pois Cassés",
    description: "Curry de pois cassés et légumes servis avec du riz basmati.",
    price: 7.3,
    type: "Plat",
    img: {
      name: "peasCurryImg.png",
      alt: "Une belle photo de notre Curry de Riz et Pois Cassés!",
      creditTo:
        "https://healthyliciouus.com/index.php/2023/03/06/curry-vert-de-pois-casses-et-brocolis/",
    },
  },
  {
    id: "m09",
    name: "Crumble aux Pommes et aux Noix",
    description:
      "Des pommes cuites à la perfection, surmontées d'un mélange croustillant de noix concassées, d'avoine et de cassonade.",
    price: 3.8,
    type: "Dessert",
    img: {
      name: "crumbleImg.png",
      alt: "Une belle photo de notre Crumble aux Pommes et aux Noix!",
      creditTo:
        "https://www.sequoia.bio/recettes/dessert/crumble-de-pommes-aux-dattes-et-aux-noix/",
    },
  },
  {
    id: "m10",
    name: "Mousse au Chocolat Noir Veloutée",
    description:
      "Mousse au chocolat noir à base d'avocat, saupoudrée de noix concassées.",
    price: 4.5,
    type: "Dessert",
    img: {
      name: "chocoMousseImg.png",
      alt: "Une belle photo de notre Mousse au Chocolat Noir Veloutée!",
      creditTo:
        "https://www.healthymood.fr/recettes/mousse-au-chocolat-a-lavocat/",
    },
  },
  {
    id: "m11",
    name: "Tartelette aux Fruits Rouges",
    description:
      "De délicieuses tartelettes aux croûtes croustillantes, garnies de baies fraîches et nappées d'un coulis de fruits rouges.",
    price: 4.2,
    type: "Dessert",
    img: {
      name: "fruitPieImg.png",
      alt: "Une belle photo de notre Tartelette aux Fruits Rouges!",
      creditTo:
        "https://www.cuisineactuelle.fr/recettes/tartelettes-aux-fruits-rouges-frais-266809",
    },
  },
  {
    id: "m12",
    name: "Parfait au Yaourt et aux Fruits Tropicaux",
    description:
      "Des couches de yaourt végétalien alternées avec des morceaux juteux d'ananas, de mangue et de kiwi, saupoudrées de noix de coco râpée.",
    price: 4.1,
    type: "Dessert",
    img: {
      name: "veggeYogourtImg.png",
      alt: "Une belle photo de notre Parfait au Yaourt et aux Fruits Tropicaux!",
      creditTo: "https://menu-vegetarien.com/yaourt-parfait/",
    },
  },
];

export const ORDERS = [
  {
    id: "id-1",
    orderedItems: [
      {
        id: "m12",
        amount: 1,
        name: "Parfait au Yaourt et aux Fruits Tropicaux",
        price: 4.1,
        type: "Dessert",
      },
      {
        id: "m04",
        amount: 2,
        name: "Rouleaux de Printemps Croquants",
        price: 7.2,
        type: "Entrée",
      },
    ],
  },
];

export default MEALS;
