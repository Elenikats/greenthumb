import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import plants from "../../plants.js";
import ProductItem from "../ProductItem/ProductItem.jsx";
import { searchContext } from "../../contexts/searchContext.js";
import { useContext } from "react";
import "./search.scss";

export default function Search() {
  const [search, setSearch] = useContext(searchContext);
  const [displayInputField, setDisplayInputField] = useState(false);

  const getFilteredItems = (search, plants) => {
    if (!search) {
      return [];
    }
    return plants.filter((plant) =>
      plant.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredItems = getFilteredItems(search, plants);

  console.log(search);
  console.log(plants);
  console.log(filteredItems);

  const handleDisplay = () => {
    setDisplayInputField(!displayInputField);
  };

  return (
    <div className="Search">
      <div className="input-icon-container">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className={
            displayInputField
              ? "input-show animate__animated animate__fadeInDown"
              : "animate__animated animate__fadeOutUp input-hide "
          }
        />
        {displayInputField ? (
          <FontAwesomeIcon
            icon={faX}
            className="icon icon-x"
            onClick={handleDisplay}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="icon-search icon"
            onClick={handleDisplay}
          />
        )}
      </div>
      <div>
        {filteredItems == "" ? "" : filteredItems.map((plant) => plant.Name)}
      </div>
    </div>
  );
}
