import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // console.log("reducer state: ", state);
  // console.log("reducer action: ", action.item);

  if (action.type === "ADD") {
    // const updatedItems = state.items.concat(action.item);
    // console.log("updatedItems: ", updatedItems);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // console.log("updatedTotalAmount: ", updatedTotalAmount);

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // console.log("existingCartItemIndex: ", existingCartItemIndex);

    const existingCartItem = state.items[existingCartItemIndex];
    // console.log("state.items: ", state.items);
    // console.log("existingCartItem: ", existingCartItem);

    let updatedItems;

    if (existingCartItem) {
      // creation of the new item with correct amount
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // console.log("updatedItem: ", updatedItem);

      // creation of the updatedItems array which is a copy of the state.items array
      updatedItems = [...state.items];

      // we override the existing element with the old amount in the array with the updatedItem element
      updatedItems[existingCartItemIndex] = updatedItem;
      // console.log("updatedItems after: ", updatedItems);
    } else {
      updatedItems = state.items.concat(action.item);
      // console.log("updatedItems: ", updatedItems);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    // console.log("existingItem: ", existingItem);
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      // updatedItems = state.items.filter(item =>  item.id !== existingItem.id );
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
      // console.log("updatedItems after filter: ", updatedItems);
    } else {
      // creation of the new item with correct amount
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return initialCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = (item) => {
    // console.log("addItemToCartHandler: ", item);
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
