import { useState } from "react";
import plants from "../../plants.js";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./cart.scss";
import CartOverlay from "./CartOverlay.jsx";
import RemoveItem from "./RemoveItem.jsx";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  // function removeItem() {
  //   return <RemoveItem />;
  // }

  function decreaseQuantity(e) {
    console.log(e.target.value);
    setQuantity(quantity - 1);
  }

  function increaseQuantity() {}

  if (!open) {
    return (
      <Container fluid="lg">
        <h1>Cart</h1>
        <Row>
          <Col md={8}>
            <Table>
              <tbody>
                {plants.map((plant) => {
                  return (
                    <tr>
                      <td>
                        <button
                          className="removeBtn"
                          onClick={() => <RemoveItem />}
                        >
                          x
                        </button>
                      </td>
                      <td>
                        <img
                          src={plant.image}
                          alt={plant.name}
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td>
                        <span>{plant.name}</span>
                      </td>
                      <td>
                        <span>{plant.price} €</span>
                      </td>
                      <td>
                        <span
                          className="quantity count"
                          onClick={decreaseQuantity}
                        >
                          -
                        </span>
                        <span className="quantity">{quantity}</span>
                        <span
                          className="quantity count"
                          onClick={increaseQuantity}
                        >
                          +
                        </span>
                      </td>
                      <td>
                        <span>{plant.price * quantity} €</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>

          <Col md={4}>
            <Table>
              <tbody className="summary">
                <tr>
                  <th>subtotal:</th>
                  <td>300 €</td>
                </tr>
                <tr>
                  <th>shipping:</th>
                  <td>7.50 €</td>
                </tr>
                <tr>
                  <th>TOTAL:</th>
                  <td>307.50 €</td>
                </tr>
              </tbody>
            </Table>
            <div className="shippingDetails">
              plants will be sent to:
              <p>name</p>
              <p>adress</p>
            </div>

            <Button onClick={() => setOpen(!open)}>submit</Button>
          </Col>
        </Row>
      </Container>
    );
  }
  return <CartOverlay open={open} />;
}
