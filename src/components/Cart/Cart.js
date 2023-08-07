import React, { useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import { BsSendCheckFill } from "react-icons/bs";

const Cart = (props) => {
  const STARTERS_LIST = [
    {
      id: 1,
      name: "Velouté de Légumes Gourmand",
      price: 3.7,
      amount: "x1",
    },
    {
      id: 2,
      name: "Bruschettas Méditerranéennes",
      price: 4.2,
      amount: "x1",
    },
  ];

  const MAIN_LIST = [
    {
      id: 1,
      name: "Délices de la Terre",
      price: 6.1,
      amount: "x1",
    },
    {
      id: 2,
      name: "Curry de Riz et Pois Cassés",
      price: 7.3,
      amount: "x1",
    },
  ];

  const DESSERT_LIST = [
    {
      id: 1,
      name: "Crumble aux Pommes et aux Noix",
      price: 3.8,
      amount: "x1",
    },
    {
      id: 2,
      name: "Mousse au Chocolat Noir Veloutée",
      price: 4.5,
      amount: "x1",
    },
  ];

  const [isOrdered, setIsOrdered] = useState(false);

  const isOrderedHandler = () => {
    setIsOrdered(true);
  };

  return (
    <Modal onCloseModal={props.onClose}>
      {!isOrdered && (
        <>
          <CartList data={STARTERS_LIST} title="Entrées" />
          <CartList data={MAIN_LIST} title="Plats" />
          <CartList data={DESSERT_LIST} title="Desserts" />
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
          <ul>
            <li>
              <h4>Entrées:</h4>
            </li>
            <li>
              <div className={classes["order-text"]}>
                <span>Velouté de Légumes Gourmand</span>
                <span>
                  <b>Quantité: </b> x1
                </span>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Plats:</h4>
            </li>
            <li>
              <div className={classes["order-text"]}>
                <span>Riz Pilaf aux Légumes Printaniers</span>
                <span>
                  <b>Quantité: </b> x1
                </span>
              </div>
            </li>
          </ul>
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
