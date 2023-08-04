import React from "react";
import classes from "./CartList.module.css";
import CartItem from "./CartItem";
import TapasIcon from "@mui/icons-material/Tapas";

const CartList = (props) => {
  const cartItems = props.data.map((cartItem) => (
    <CartItem
      id={cartItem.id}
      key={cartItem.id}
      name={cartItem.name}
      price={cartItem.price}
      amount={cartItem.amount}
    />
  ));

  return (
    <div className={classes["cart-list"]}>
      <div className={classes["list-intro"]}>
        <h3> {props.title} </h3>
        {/* <TapasIcon /> */}
      </div>
      <div className={classes.line}></div>
      <ul>{cartItems}</ul>
    </div>
  );
};

export default CartList;
