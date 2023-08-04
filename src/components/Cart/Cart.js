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

  return (
    <Modal onCloseModal={props.onClose}>
      <CartList data={STARTERS_LIST} title="Entrées" />
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
