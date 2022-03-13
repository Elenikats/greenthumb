import { useContext } from "react";
import { searchContext } from "../contexts/searchContext.js";

export default function NotFound() {
  const [search] = useContext(searchContext);
  return (
    <div className="NotFound default-height">
      {search ? (
        <h1>"{search}" not found!</h1>
      ) : (
        <div>
          <h1>Thumbs Down, page not found!</h1>
          <p>&#127807; &#127802; &#127796; </p>
        </div>
      )}
    </div>
  );
}
