import festinRustiqueImg from "../assets/Festin-Rustique-img.png";
import caviarAubergineImg from "../assets/caviarAubergine.png";
import butternutSoupImg from "../assets/butternutSoup.png";
import bruschettaImg from "../assets/bruschettaImg.png";
import springRollImg from "../assets/springRoll.png";
import veggeRiceImg from "../assets/veggeRice.png";
import lentilGaletteImg from "../assets/lentilGaletteImg.png";
import peasCurryImg from "../assets/peasCurryImg.png";
import chocoMousseImg from "../assets/chocoMousseImg.png";
import fruitPieImg from "../assets/fruitPieImg.png";
import veggeYogourtImg from "../assets/veggeYogourtImg.png";
import crumbleImg from "../assets/crumbleImg.png";

const imgArray = [
  {
    key: "m5",
    img: festinRustiqueImg,
    alt: "A beautiful picture of the Festin Rustique meal!",
    credit: "https://larecette.net/polenta-cremeuse-et-champignons-frits/",
  },
  {
    key: "m3",
    img: caviarAubergineImg,
    alt: "A beautiful picture of the Caviar d'Aubergine meal!",
    credit:
      "https://turbigo-gourmandises.fr/recette-story-caviar-daubergines-cuisine-marie-claire-idees/",
  },
  {
    key: "m1",
    img: butternutSoupImg,
    alt: "A beautiful picture of the Velouté Gourmand meal!",
    credit:
      "https://clemfoodie.com/2017/11/18/soupe-de-courge-butternut-carottes-poireaux/#google_vignette",
  },
  {
    key: "m2",
    img: bruschettaImg,
    alt: "A beautiful picture of the Bruschettas meal!",
    credit:
      "https://www.cuisineaz.com/diaporamas/recettes-de-bruschetta-speciales-ete-2586/interne/1.aspx",
  },
  {
    key: "m4",
    img: springRollImg,
    alt: "A beautiful picture of the Rouleaux de Printemps meal!",
    credit:
      "https://naturelles-magazine.com/recette-rouleaux-de-printemps-vegetariens-colores/",
  },
  {
    key: "m6",
    img: veggeRiceImg,
    alt: "A beautiful picture of the Riz Pilaf aux Légumes meal!",
    credit:
      "https://www.cuisineactuelle.fr/recettes/riz-pilaf-vegetarien-194061",
  },
  {
    key: "m7",
    img: lentilGaletteImg,
    alt: "A beautiful picture of the Galette de lentilles meal!",
    credit:
      "https://www.750g.com/galettes-de-lentilles-et-patates-douces-r206369.htm",
  },
  {
    key: "m8",
    img: peasCurryImg,
    alt: "A beautiful picture of the Cury de Riz et Pois cassés meal!",
    credit:
      "https://healthyliciouus.com/index.php/2023/03/06/curry-vert-de-pois-casses-et-brocolis/",
  },
  {
    key: "m10",
    img: chocoMousseImg,
    alt: "A beautiful picture of the Mousse au Chocolat Noir meal!",
    credit: "https://www.healthymood.fr/recettes/mousse-au-chocolat-a-lavocat/",
  },
  {
    key: "m11",
    img: fruitPieImg,
    alt: "A beautiful picture of the Tartelette aux Fruits Rouges meal!",
    credit:
      "https://www.cuisineactuelle.fr/recettes/tartelettes-aux-fruits-rouges-frais-266809",
  },
  {
    key: "m12",
    img: veggeYogourtImg,
    alt: "A beautiful picture of the Yaourt Végétalien aux fruits meal!",
    credit: "https://menu-vegetarien.com/yaourt-parfait/",
  },
  {
    key: "m9",
    img: crumbleImg,
    alt: "A beautiful picture of the Crumble aux Pommes et aux Noix meal!",
    credit:
      "https://www.sequoia.bio/recettes/dessert/crumble-de-pommes-aux-dattes-et-aux-noix/",
  },
];

const map = new Map();

for (const img of imgArray) {
  map.set(img.key, img);
}

// map.set("m5", {
//   img: festinRustiqueImg,
//   alt: "A beautiful picture of Festin rustique meal!",
//   credit: "https://larecette.net/polenta-cremeuse-et-champignons-frits/",
// });

export default map;
