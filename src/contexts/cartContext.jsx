import React from "react";
import { useEffect, useState } from "react";

export const cartContext = React.createContext();
const cartLocal = localStorage.getItem("cartItems");

const defaultCart = cartLocal ? JSON.parse(cartLocal) : [];

export default function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState(defaultCart);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const value = [cartItems, setCartItems];

  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
}
