import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartList from "./CartList";

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

  return (
    <Modal onCloseModal={props.onClose}>
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
      </div>
    </Modal>
  );
};

export default Cart;
