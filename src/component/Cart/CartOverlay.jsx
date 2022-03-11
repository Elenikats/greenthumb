import { useEffect } from "react";
import thumb from "../../assets/favicon.png";
import "./cart.scss";

export default function CartOverlay({
  shoppingCompleted,
  setCounterCart,
  setCart,
}) {
  if (!shoppingCompleted) {
    return null;
  } else {
    useEffect(() => {
      setCounterCart("");
      setCart([]);
    }, []);

    return (
      <div className="CartOverlay default-height">
        <img src={thumb} alt="thumbs up" />
        <div className="confirmed">
          <h2>Done !</h2>
          <p>You ordered great plants!</p>
          <p>The delivery takes place within 3-5 days</p>
        </div>
      </div>
    );
  }
}
