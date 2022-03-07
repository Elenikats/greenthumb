import thumb from "../../assets/favicon.png";
import "./cart.scss";

export default function CartOverlay({ open }) {
  if (!open) {
    return null;
  }

  return (
    <div className="CartOverlay">
      <img src={thumb} alt="thumbs up" />
      <div className="confirmed">
        <h2>Done !</h2>
        <p>You ordered great plants!</p>
        <p>The delivery takes place within 3-5 days</p>
      </div>
    </div>
  );
}
