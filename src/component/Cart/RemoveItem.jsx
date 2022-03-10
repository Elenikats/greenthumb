import { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";

function RemoveItem(product) {
  console.log("whats product", product.id);
  const filtered = cart.filter((item) => item.id !== product.id);
  setCart(filtered);
}

export default RemoveItem;
