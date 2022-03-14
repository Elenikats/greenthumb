import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import plants from "../../plants.js";
import { searchContext } from "../../contexts/searchContext.js";
import { useContext } from "react";
import "./search.scss";
import { useNavigate } from "react-router-dom";

////////////////////////////////////////

export default function Search() {
  const [search, setSearch, allProducts, setAllProducts] =
    useContext(searchContext);
  const [displayInputField, setDisplayInputField] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const navigate = useNavigate();

  // console.log(plants);

  useEffect(() => {
    setTimeout(() => {
      setFirstRender(false);
    }, 800);
  }, []);

  const handleDisplay = () => {
    setDisplayInputField(!displayInputField);
  };

  const handleSearchProduct = (e) => {
    setSearch(e.target.value);
    navigate("/products");
    const filteredProducts = allProducts.filter((plant) =>
      plant.name.toLowerCase().includes(search.toLowerCase())
    );
    if (e.target.value == "") {
      setAllProducts(plants);
    } else if (!allProducts.length) {
      navigate("/notfound");
    } else {
      setAllProducts(filteredProducts);
    }
    console.log(filteredProducts.length);
    console.log(e.target.value);
    console.log(allProducts.length);
  };

  return (
    <div className="Search">
      <div className="input-icon-container">
        {
          <input
            style={{
              position: "absolute",
              top: "120%",
              right: "-3%",
              visibility: displayInputField || !firstRender ? "" : "hidden",
            }}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchProduct}
            className={
              displayInputField
                ? " animate__animated animate__fadeInDown"
                : "animate__animated animate__fadeOutUp "
            }
          />
        }
        {displayInputField ? (
          <div style={{ width: "2rem" }}>
            <FontAwesomeIcon
              icon={faX}
              className="icon icon-x"
              onClick={handleDisplay}
            />
          </div>
        ) : (
          <div style={{ width: "2rem" }}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="icon-search icon"
              onClick={handleDisplay}
            />
          </div>
        )}
      </div>
    </div>
  );
}
