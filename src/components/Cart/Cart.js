import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: 1,
          name: "Festin Rustique",
          price: "€7.50",
          amount: "x1",
        },
      ].map((item) => (
        <li key={item.id}>
          {item.name} {item.price} {item.amount}
        </li>
      ))}
    </ul>
  );

  // return <Modal onCloseModal={props.onClose}>{cartItems}</Modal>;

  return (
    <Modal onCloseModal={props.onClose}>
      {cartItems}
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
