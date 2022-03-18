import { useParams } from "react-router";
import plants from "../../plants.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./productItem.scss";

export default function ProductItem({
  cart,
  setCart,
  counterCart,
  setCounterCart,
}) {
  const { productName } = useParams();
  console.log(productName);

  // Find the plant from the array  that matches the item clicked
  const plantObject = plants.find((object) => object.name == productName);
  console.log(plantObject);

  // FUNCTION THAT ADDS THE PLANT TO THE CART
  function handleShopping() {
    const exist = cart.find((item) => item.id === plantObject.id);
    const cartWithFilteredOutTheOneThatIFound = cart.filter(
      (item) => item.id !== plantObject.id
    );

    if (exist) {
      exist.quantity += 1;
      setCart([...cartWithFilteredOutTheOneThatIFound, exist]);
    } else {
      setCart([...cart, plantObject]);
    }
    counterCart == "" ? setCounterCart(1) : setCounterCart(counterCart + 1);
  }

  return (
    <div className="ProductItem default-height">
      <Container>
        <Row>
          <Col md={6}>
            <div
              className="plant-img"
              style={{
                backgroundImage: `url(${plantObject.image})`,
              }}
            ></div>
          </Col>

          <Col md={6}>
            <h2>{plantObject.name}</h2>
            <p>
              <b>{plantObject.price} € </b>
            </p>
            <p>{plantObject.description}</p>
            <p>
              size: <i>{plantObject.size} </i>
            </p>
            <div className="btn-addtocart-container">
              <Button onClick={handleShopping} variant="success">
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
