import React from "react";
import { useEffect, useState } from "react";

export const cartContext = React.createContext();
const userLocal = localStorage.getItem("cart");

const defaultCart = userLocal ? JSON.parse(cartLocal) : null;

export default function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState(defaultCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const value = [cartItems, setCartItems];

  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
}
