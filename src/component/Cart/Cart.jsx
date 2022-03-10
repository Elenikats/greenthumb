import { useState, useContext, useEffect } from "react";
import plants from "../../plants.js";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./cart.scss";
import CartOverlay from "./CartOverlay.jsx";
import RemoveItem from "./RemoveItem.jsx";
import { userContext } from "../../contexts/userContext.jsx";
import { cartContext } from "../../contexts/cartContext.jsx";

export default function Cart() {
  const cartArray = [
    {
      id: 1,
      name: "Monstera Deliciosa var. Borsigiana Variegata",
      // image: plant1,
      size: "medium",
      price: "300",
      description:
        "Variegated Monstera Deliciosa var. Borsigiana, a.k.a Monstera albo, with white variegated leaves is probably one of the most sought after plants these days. We have only got a handful of them as they are very hard to get.",
      quantity: 1,
    },

    {
      id: 2,
      name: ` Alocasia Micholitziana ‘Frydek’ `,
      // image: plant2,
      size: "small",
      price: "25",
      description:
        "Alocasia Micholitziana ‘Frydek’ is a rare, glamorous specimen with an elegant touch. The soft velvet leaf texture is complimented by the iconic arrowhead shape. What makes this alocasia unique are the sharp, white veins that dissect the deep green leaves. This is a must have for all true plant lovers.",
      quantity: 1,
    },
  ];
  const [open, setOpen] = useState(false);

  const [cart, setCart] = useState(cartArray);
  const [cartItem, setCartItem] = useState({});

  console.log("cart", cart);
  const [subtotal, setSubtotal] = useState(20);
  const [total, setTotal] = useState(0);
  const [user, setUser, users, setUsers] = useContext(userContext);

  // const [cartItems, setCartItems] = useContext(cartContext);

  function handleRemoveItem(product) {
    console.log("whats product", product.id);
    const filtered = cart.filter((item) => item.id !== product.id);
    setCart(filtered);
    console.log(cart);
  }

  function decreaseQuantity(product) {
    console.log("product", product);

    setCartItem((product.quantity -= 1));
    console.log("CartItem", cartItem);
  }

  function increaseQuantity(product) {
    setCartItem((product.quantity += 1));
  }

  function calcSubItem(product) {
    setSubtotalItem(product.price * product.quantity);
    console.log(subtotalItem);
  }

  if (!open) {
    return (
      <Container fluid="lg">
        <h1>Cart</h1>
        <Row>
          <Col md={8}>
            <Table>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <button
                          className="removeBtn"
                          onClick={() => handleRemoveItem(product)}
                        >
                          x
                        </button>
                      </td>
                      <td>
                        {/* <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "100px" }}
                        /> */}
                      </td>
                      <td>
                        <span>{product.name}</span>
                      </td>
                      <td>
                        <span>{product.price} €</span>
                      </td>
                      <td>
                        <span
                          className="quantity count"
                          onClick={() => decreaseQuantity(product)}
                        >
                          -
                        </span>
                        <span className="quantity">{product.quantity}</span>
                        <span
                          className="quantity count"
                          onClick={() => increaseQuantity(product)}
                        >
                          +
                        </span>
                      </td>
                      <td>
                        <span>{product.price * product.quantity} €</span>
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
                  <td>325</td>
                </tr>
                <tr>
                  <th>shipping:</th>
                  <td>{subtotal < 40 ? "7.50 €" : "free"}</td>
                </tr>
                <tr>
                  <th>TOTAL:</th>
                  <td>{subtotal < 40 ? subtotal + 7.5 : subtotal} €</td>
                </tr>
              </tbody>
            </Table>
            <div className="shippingDetails">
              <strong>plants will be sent to:</strong>
              <p>
                {user.firstName} {user.lastName}
              </p>
              <p>{user.address}</p>
              <p>
                {user.zip} {user.city}
              </p>
            </div>

            <Button variant="success" onClick={() => setOpen(!open)}>
              submit
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
  return <CartOverlay open={open} />;
}
