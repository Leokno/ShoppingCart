import { createContext, useReducer } from "react";
import { CartReducer, CartInitialState } from "../Reducers/Cart";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(CartReducer, CartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  const removeFromCart = () =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () =>
    dispatch({
      type: "CLEAR_CART",
    });
  return { state, addToCart, removeFromCart, clearCart };
}

export function Cartprovider({ children }) {
  const { addToCart, state, removeFromCart, clearCart } = useCartReducer();
  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
