import React, { useContext } from "react";
import classes from "./CartList.module.css";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";

const CartList = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    // console.log('cartItemAddHandler: ', item);
    // console.log({...item, amount:1});
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    // console.log('remove item in parent');
    // console.log('id: ', id);
    cartCtx.removeItem(id);
  };

  const cartItems = props.data.map((cartItem) => (
    <CartItem
      id={cartItem.id}
      key={cartItem.id}
      name={cartItem.name}
      price={cartItem.price}
      amount={cartItem.amount}
      onAdd={cartItemAddHandler.bind(null, cartItem)}
      onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
    />
  ));

  return (
    <div className={classes["cart-list"]}>
      <div className={classes["list-intro"]}>
        <h3> {props.title} </h3>
      </div>
      <ul>{cartItems}</ul>
    </div>
  );
};

export default CartList;
