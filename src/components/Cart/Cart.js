import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
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

  return <Modal>{cartItems}</Modal>;
};

export default Cart;
