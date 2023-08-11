import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import { BsSendCheckFill } from "react-icons/bs";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  // const STARTERS_LIST = [
  //   {
  //     id: 1,
  //     name: "Velouté de Légumes Gourmand",
  //     price: 3.7,
  //     amount: "x1",
  //   },
  //   {
  //     id: 2,
  //     name: "Bruschettas Méditerranéennes",
  //     price: 4.2,
  //     amount: "x1",
  //   },
  // ];

  // const MAIN_LIST = [
  //   {
  //     id: 1,
  //     name: "Délices de la Terre",
  //     price: 6.1,
  //     amount: "x1",
  //   },
  //   {
  //     id: 2,
  //     name: "Curry de Riz et Pois Cassés",
  //     price: 7.3,
  //     amount: "x1",
  //   },
  // ];

  // const DESSERT_LIST = [
  //   {
  //     id: 1,
  //     name: "Crumble aux Pommes et aux Noix",
  //     price: 3.8,
  //     amount: "x1",
  //   },
  //   {
  //     id: 2,
  //     name: "Mousse au Chocolat Noir Veloutée",
  //     price: 4.5,
  //     amount: "x1",
  //   },
  // ];

  const [isOrdered, setIsOrdered] = useState(false);

  useEffect(() => {
    // console.log("in useEffect");
    // console.log("isOrdered: ", isOrdered);

    if (isOrdered) {
      const IconDivToScroll = document.getElementById("componentScrollToTop");
      // console.log(IconDivToScroll);

      IconDivToScroll.scroll(0, 0);
    }
  }, [isOrdered]);

  const isOrderedHandler = () => {
    setIsOrdered(true);
  };

  const cartCtx = useContext(CartContext);
  const itemsArr = cartCtx.items;
  // console.log("itemsArr: ", itemsArr);

  const filterStarter = itemsArr.filter((item) => item.type === "starter");
  // console.log("filterStarter: ", filterStarter);
  const filterMain = itemsArr.filter((item) => item.type === "main");
  const filterDessert = itemsArr.filter((item) => item.type === "dessert");

  // let showStarter;
  // if (filterStarter.length > 0) {
  //   showStarter = (
  //     <ul>
  //       <li>
  //         <h4>Entrées:</h4>
  //       </li>
  //       {filterStarter.map((starter) => (
  //         <li>
  //           <div className={classes["order-text"]}>
  //             <span> {starter.name} </span>
  //             <span>
  //               <b>Quantité: </b> {starter.amount}
  //             </span>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  return (
    <Modal onCloseModal={props.onClose}>
      {!isOrdered && (
        <>
          {filterStarter.length > 0 && (
            <CartList data={filterStarter} title="Entrées" />
          )}
          {filterMain.length > 0 && (
            <CartList data={filterMain} title="Plats" />
          )}
          {filterDessert.length > 0 && (
            <CartList data={filterDessert} title="Desserts" />
          )}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>€0</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
            <button
              className={classes["order-button"]}
              onClick={isOrderedHandler}
            >
              Commander
            </button>
          </div>
        </>
      )}
      {isOrdered && (
        <>
          <div className={classes["order-icon"]}>
            <BsSendCheckFill className={classes.icon} />
          </div>
          <h3>Votre Commande</h3>
          {/* {showStarter} */}
          {filterStarter.length > 0 && (
            <ul>
              <li>
                <h4>Entrées:</h4>
              </li>
              {filterStarter.map((starter) => (
                <li>
                  <div className={classes["order-text"]}>
                    <span> {starter.name} </span>
                    <span>
                      <b>Quantité: </b> {starter.amount}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {filterMain.length > 0 && (
            <ul>
              <li>
                <h4>Plats:</h4>
              </li>
              {filterMain.map((main) => (
                <li>
                  <div className={classes["order-text"]}>
                    <span> {main.name} </span>
                    <span>
                      <b>Quantité: </b> {main.amount}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {filterDessert.length > 0 && (
            <ul>
              <li>
                <h4>Desserts:</h4>
              </li>
              {filterDessert.map((dessert) => (
                <li>
                  <div className={classes["order-text"]}>
                    <span> {dessert.name} </span>
                    <span>
                      <b>Quantité: </b> {dessert.amount}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <span>
            <b>Prix Total: </b> €14.3
          </span>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default Cart;
