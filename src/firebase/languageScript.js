import { appendFile } from "node:fs/promises";
import firebaseData from "./firebase-data.js";
import { ORDERS } from "./firebase-data.js";
import * as translator from "@parvineyvazov/json-translator";
// console.log("firebaseData: ", firebaseData);
// console.log("ORDERS: ", ORDERS);

// [ Launch script from terminal ]
// node languageScript.js
console.log("in languageScript.js");

// [ Generate JSON file ]
// Documentation:
// https://nodejs.org/api/fs.html#fspromisesappendfilepath-data-options
// https://www.geeksforgeeks.org/node-js-fs-promises-appendfile-method/

// try {
//   await appendFile(
//     "generate-firebase-data.json",
//     "test generate new file",
//      {flag: "w"}
//   );
//   console.log("can append");
// } catch {
//   console.error("cannot append");
// }

// [ Create json content inside the new JSON file]
// let objTest = {
//   menu: "titre dessert",
// };
// let jsonFormat = JSON.stringify(objTest);

// let jsonFormat = JSON.stringify(firebaseData);

// try {
//   await appendFile("generate-firebase-data.json", jsonFormat, {
//     flag: "w",
//   });
//   console.log("can append");
// } catch {
//   console.error("cannot append");
// }

// [ Format json object in JSON file as Firebase accepts it ]
let objToFirebase = { meals_FR: {}, orders_FR: {} };
// console.log("objToFirebase: ", objToFirebase);

// Loop through the firebaseData array and format each element into an obj for Firebase:
for (const element of firebaseData) {
  //   console.log("element: ", element);
  //   console.log("element.id: ", element.id);

  // Solution 1:
  //   objToFirebase["meals_FR"][element.id] = {
  //     name: element.name,
  //     description: element.description,
  //     price: element.price,
  //     type: element.type,
  //   };

  // Solution 2:
  const formattedObj = { ...element };
  delete formattedObj.id;

  objToFirebase["meals_FR"][element.id] = { ...formattedObj };
}

for (const element of ORDERS) {
  const formattedOrder = { ...element };
  delete formattedOrder.id;
  objToFirebase["orders_FR"][element.id] = { ...formattedOrder };
}

// Library is not always working with Google Translate API so that we need to use CLI commands to select another provider.
// Translate objToFirebase in English:
// Documentation: https://www.npmjs.com/package/@parvineyvazov/json-translator?activeTab=readme
// Check if the json-translator library works:
// const my_str = await translator.translateWord(
//   "What a fabulous Home!",
//   translator.languages.English,
//   translator.languages.French
// );
// console.log("my_str: ", my_str);

// let en_lang = await translator.translateObject(
//   objToFirebase["meals_FR"],
//   translator.languages.French,
//   translator.languages.English
// );
// console.log("en_lang: ", en_lang);
// objToFirebase["meals_EN"] = { ...en_lang };

let jsonFormat = JSON.stringify(objToFirebase);
try {
  await appendFile("generate-firebase-data.json", jsonFormat, {
    flag: "w",
  });
  console.log("can append");
} catch {
  console.error("cannot append");
}
