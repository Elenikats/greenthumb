import "./cart.scss";

import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { userContext } from "../../contexts/userContext.jsx";
import { cartContext } from "../../contexts/cartContext.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import CartOverlay from "./CartOverlay.jsx";

export default function Cart({ cart, setCart, counterCart, setCounterCart }) {
  //check if shopping is in progress or done
  const [shoppingCompleted, setShoppingCompleted] = useState(false);

  //--??---
  const [cartItem, setCartItem] = useState({});

  //Pricing
  const itemsPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  const shippingCosts = itemsPrice < 40 ? "7.50 €" : "free";
  const totalPrice = itemsPrice < 40 ? itemsPrice + 7.5 : itemsPrice;

  //User details
  const [user, setUser, users, setUsers] = useContext(userContext);
  console.log(user);
  // const [cartItems, setCartItems] = useContext(cartContext);

  //delete an item
  function handleRemoveItem(product) {
    setCounterCart((counterCart = counterCart - product.quantity));
    counterCart <= 0 ? setCounterCart("") : setCounterCart(counterCart);
    const filtered = cart.filter((item) => item.id !== product.id);
    setCart(filtered);
  }

  //decrease number or items. If 0 item will be removed
  function decreaseQuantity(product) {
    setCartItem((product.quantity = product.quantity - 1));
    counterCart == 1 ? setCounterCart("") : setCounterCart(counterCart - 1);

    if (product.quantity < 1) {
      const filtered = cart.filter((item) => item.id !== product.id);
      setCart(filtered);
    }
  }

  //increase number of items
  function increaseQuantity(product) {
    setCartItem((product.quantity = product.quantity + 1));
    setCounterCart(counterCart + 1);
  }

  if (!shoppingCompleted) {
    return (
      <Container fluid="lg">
        <h1>Cart</h1>
        <Row>
          {/* Left side table */}
          <Col md={8}>
            {cart.length === 0 && (
              <div className="emptyCart animate__animated animate__slideInLeft">
                Cart is empty
              </div>
            )}
            <Table className="cartItemsTable">
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <div>
                          <button
                            className="removeBtn"
                            onClick={() => handleRemoveItem(product)}
                          >
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              className="icon icon1"
                            />
                          </button>
                        </div>
                      </td>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "4rem" }}
                        />
                      </td>
                      <td>
                        <div>{product.name}</div>
                      </td>
                      <td>
                        <div>{product.price} €</div>
                      </td>
                      <td>
                        <div className="quantityContainer">
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
                        </div>
                      </td>
                      <td>
                        <div>{product.price * product.quantity} €</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>

          {/* Right side table */}
          {cart.length !== 0 && (
            <Col md={4}>
              <Table className="cartItemsTable">
                <tbody className="summary">
                  <tr>
                    <th>subtotal:</th>
                    <td>{itemsPrice.toFixed(2)} €</td>
                  </tr>
                  <tr>
                    <th>shipping:</th>
                    <td>{shippingCosts}</td>
                  </tr>
                  <tr>
                    <th>TOTAL (incl. tax):</th>
                    <td>{totalPrice.toFixed(2)} €</td>
                  </tr>
                </tbody>
              </Table>
              <div className="shippingDetails">
                <strong>plants will be sent to:</strong>
                <br />
                <br />
                <p>
                  {user.firstName} {user.lastName}
                  <br />
                  {user.address}
                  <br />
                  {user.zip} {user.city}
                </p>
              </div>

              <Button
                variant="success"
                onClick={() => setShoppingCompleted(!shoppingCompleted)}
              >
                submit
              </Button>
              <NavLink to="/products">Forgot something?</NavLink>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
  return (
    <CartOverlay
      shoppingCompleted={shoppingCompleted}
      setCounterCart={setCounterCart}
      setCart={setCart}
    />
  );
}
