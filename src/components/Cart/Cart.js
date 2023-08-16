import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import { BsSendCheckFill } from "react-icons/bs";
import CartContext from "../store/cart-context";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
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

  const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;

  const filterStarter = itemsArr.filter((item) => item.type === "starter");
  // console.log("filterStarter: ", filterStarter);
  const filterMain = itemsArr.filter((item) => item.type === "main");
  const filterDessert = itemsArr.filter((item) => item.type === "dessert");

  return (
    <Modal onCloseModal={props.onClose}>
      {!isOrdered && (
        <>
          <div className={classes["order-container"]}>
            {filterStarter.length > 0 && (
              <CartList data={filterStarter} title="Entrées" />
            )}
            {filterMain.length > 0 && (
              <CartList data={filterMain} title="Plats" />
            )}
            {filterDessert.length > 0 && (
              <CartList data={filterDessert} title="Desserts" />
            )}
          </div>
          <div className={classes.total}>
            <span>Montant Total de votre Commande</span>
            <span>{totalAmount}</span>
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
          <div className={classes.total}>
            <span>Montant Total de votre Commande</span>
            <span>{totalAmount}</span>
          </div>

          <CheckoutForm onCloseCheckoutForm={props.onClose} />

          {/* <div className={classes["order-icon"]}>
            <BsSendCheckFill className={classes.icon} />
          </div>
          <h3>Votre Commande</h3>
          <div className={classes["order-container"]}>
            {filterStarter.length > 0 && (
              <ul>
                <li>
                  <h4>Entrées:</h4>
                </li>
                {filterStarter.map((starter) => (
                  <li key={starter.id}>
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
                  <li key={main.id}>
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
                  <li key={dessert.id}>
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
          </div>
          <span>
            <b>Prix Total: </b> {totalAmount}
          </span>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
          </div> */}
        </>
      )}
    </Modal>
  );
};

export default Cart;
