import React from "react";
import { useState } from "react";
import plants from "../plants.js";

export const searchContext = React.createContext("");

export default function SearchContextProvider(props) {
    const [search, setSearch] = useState("");
    const [allProducts, setAllProducts] = useState(plants);

  const value = [search, setSearch, allProducts, setAllProducts ];

  return (
    <searchContext.Provider value={value}>
        {props.children}
    </searchContext.Provider>
  );
}