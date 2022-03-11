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
  function handleShopping(plant) {
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
              style={{
                width: "100%",
                height: "60vh",
                backgroundImage: `url(${plantObject.image})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Col>

          <Col md={6}>
            <h2>{plantObject.name}</h2>
            <p>{plantObject.price} €</p>
            <p>{plantObject.description}</p>
            <p>{plantObject.size} size</p>
            <Button onClick={handleShopping} variant="success">
              ADD TO CART
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
