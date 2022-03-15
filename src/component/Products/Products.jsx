import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./products.scss";
import { NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { searchContext } from "../../contexts/searchContext.js";
import { useContext } from "react";

export default function Products({
  cart,
  setCart,
  counterCart,
  setCounterCart,
}) {
  const [search, setSearch, allProducts, setAllProducts] =
    useContext(searchContext);

  function handleShopping(plant) {
    const exist = cart.find((item) => item.id === plant.id);
    const cartWithFilteredOutTheOneThatIFound = cart.filter(
      (item) => item.id !== plant.id
    );

    if (exist) {
      exist.quantity += 1;
      setCart([...cartWithFilteredOutTheOneThatIFound, exist]);
    } else {
      setCart([...cart, plant]);
    }
    counterCart == "" ? setCounterCart(1) : setCounterCart(counterCart + 1);
    console.log(counterCart);
  }

  return (
    <div className="Products container-fluid justify-content-center animate__animated animate__fadeIn default-height">
      <Row xs={1} md={2} lg={3}>
        {allProducts.map((plant) => {
          return (
            <Col
              key={plant.id}
              className="container-fluid d-flex justify-content-center  "
            >
              <Card>
                <LinkContainer to={`/products/${plant.name}`}>
                  <NavLink>
                    <div
                      style={{
                        width: "100%",
                        height: "60vh",
                        backgroundImage: `url(${plant.image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </NavLink>
                </LinkContainer>

                <Card.Body>
                  <div>
                    <Card.Title>{plant.name}</Card.Title>
                    <h6>{plant.price} €</h6>
                  </div>
                  <div className="button-quick-add">
                    <Button
                      onClick={() => handleShopping(plant)}
                      variant="success"
                    >
                      <FontAwesomeIcon icon={faPlus} className="icon-plus" />
                      Quick Add
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
