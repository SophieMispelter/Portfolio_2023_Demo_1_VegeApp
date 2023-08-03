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

  //datas:
  const text = "test";
  const text2 = "test 2";

  /* REMINDER - How to pass data from Parent to Child Component: props or props.children */

  /* 1) 3) & 4) passing data from Cart to Modal with props */
  //   return <Modal data={text} />;

  /* 2) 5) & 6) passing data from parent Cart component to child Modal component with props.children */
  //   return <Modal>{text}</Modal>;

  // 7) passing datas from Cart to Modal using props or props.children method for each data
  return <Modal data={text}>{text2}</Modal>;
};

export default Cart;
