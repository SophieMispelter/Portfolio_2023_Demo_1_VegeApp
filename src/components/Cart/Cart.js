import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import { BsSendCheckFill } from "react-icons/bs";
import CartContext from "../store/cart-context";
import CheckoutForm from "./CheckoutForm";
import { ORDERS_URL } from "../../firebase/constants";
import { useTranslation } from "react-i18next";

const Cart = (props) => {
  const { t, i18n } = useTranslation();
  const [isOrdered, setIsOrdered] = useState(false);
  const [didSubmitOrder, setDidSubmitOrder] = useState(false);
  const [orderTotalAmount, setOrderTotalAmount] = useState(0);

  useEffect(() => {
    // console.log("in useEffect");
    // console.log("isOrdered: ", isOrdered);

    if (isOrdered) {
      const IconDivToScroll = document.getElementById("componentScrollToTop");

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

  let filterStarter = itemsArr.filter((item) => item.type === "Starter");
  let filterMain = itemsArr.filter((item) => item.type === "Main");
  let filterDessert = itemsArr.filter((item) => item.type === "Dessert");

  if (i18n.resolvedLanguage === "fr") {
    filterStarter = itemsArr.filter((item) => item.type === "Entrée");
    filterMain = itemsArr.filter((item) => item.type === "Plat");
    filterDessert = itemsArr.filter((item) => item.type === "Dessert");
  }

  const submitOrderHandler = async () => {
    await fetch(ORDERS_URL, {
      method: "POST",
      body: JSON.stringify({
        orderedItems: cartCtx.items,
      }),
    });
    setIsOrdered(false);
    setDidSubmitOrder(true);
    setOrderTotalAmount(cartCtx.totalAmount);
    cartCtx.clearCart();
  };

  return (
    <Modal onCloseModal={props.onClose}>
      {!isOrdered && !didSubmitOrder && (
        <>
          <div className={classes["order-container"]}>
            {filterStarter.length > 0 && (
              <CartList data={filterStarter} title={t("modal.starters")} />
            )}
            {filterMain.length > 0 && (
              <CartList data={filterMain} title={t("modal.main")} />
            )}
            {filterDessert.length > 0 && (
              <CartList data={filterDessert} title={t("modal.dessert")} />
            )}
          </div>
          <div className={classes.total}>
            <span> {t("modal.amountOrder")} </span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              {t("modal.btnClose")}
            </button>
            <button
              className={classes["order-button"]}
              onClick={isOrderedHandler}
            >
              {t("modal.btnOrder")}
            </button>
          </div>
        </>
      )}
      {isOrdered && (
        <>
          <div className={classes.total}>
            <span>{t("modal.amountOrder")}</span>
            <span>{totalAmount}</span>
          </div>

          <CheckoutForm
            onCloseCheckoutForm={props.onClose}
            onConfirm={submitOrderHandler}
          />
        </>
      )}
      {didSubmitOrder && (
        <>
          <div className={classes["order-icon"]}>
            <BsSendCheckFill className={classes.icon} />
          </div>
          <h3>{t("modal.didOrder")}</h3>
          <h4>{t("modal.deliveryTime")}</h4>
          <div className={classes["order-container"]}>
            {filterStarter.length > 0 && (
              <ul>
                <li>
                  <h4>{t("modal.starters")}</h4>
                </li>
                {filterStarter.map((starter) => (
                  <li key={starter.id}>
                    <div className={classes["order-text"]}>
                      <span> {starter.name} </span>
                      <span>
                        <b>{t("modal.quantity")}</b> {starter.amount}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {filterMain.length > 0 && (
              <ul>
                <li>
                  <h4>{t("modal.main")}</h4>
                </li>
                {filterMain.map((main) => (
                  <li key={main.id}>
                    <div className={classes["order-text"]}>
                      <span> {main.name} </span>
                      <span>
                        <b>{t("modal.quantity")}</b> {main.amount}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {filterDessert.length > 0 && (
              <ul>
                <li>
                  <h4>{t("modal.dessert")}</h4>
                </li>
                {filterDessert.map((dessert) => (
                  <li key={dessert.id}>
                    <div className={classes["order-text"]}>
                      <span> {dessert.name} </span>
                      <span>
                        <b>{t("modal.quantity")}</b> {dessert.amount}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span>
            <b>{t("modal.totalAmount")}</b> {`€${orderTotalAmount.toFixed(2)}`}
          </span>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              {t("modal.btnClose")}
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default Cart;
