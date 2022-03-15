import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { userContext } from "../../contexts/userContext";
import { useContext, useRef } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Login() {
  const navigate = useNavigate();
  const [
    user,
    setUser,
    users,
    setUsers,
    login,
    setLogin,
    show,
    setShow,
    alert,
    setAlert,
    cartIconClicked,
    setCartIconClicked,
    loggedInFirstName,
    setLoggedInFirstName,
  ] = useContext(userContext);

  const emailRef = useRef();
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setCartIconClicked(false);
    setAlert(false);
  };

  function handleLogin() {
    const checkLogin = users.find(
      (email) => email.email == emailRef.current.value
    );

    console.log(checkLogin);
    if (checkLogin) {
      setShow(false);
      setAlert(false);
      setLogin(true);
      setLoggedInFirstName(checkLogin.firstName);
      setCartIconClicked(false);
      if (cartIconClicked) {
        navigate("/cart");
      }
    } else {
      setAlert(true);
    }
  }

  function handleLogout() {
    setLogin(false);
    setShow(false);
    setLoggedInFirstName("");
  }

  return (
    // #### Login Collapsing Event On Click ####
    <>
      <FontAwesomeIcon
        icon={faUser}
        className="icon icon1"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        {cartIconClicked ? (
          <Alert variant="warning">
            <p>Please log in</p>
          </Alert>
        ) : (
          ""
        )}
        <Modal.Body className="loginContainer">
          {/* Floating Inputs */}
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Modal.Body>

        {alert ? (
          <Alert variant="danger">
            <p>Account doesn't exist, please register!</p>
          </Alert>
        ) : (
          ""
        )}

        <Modal.Footer>
          {login ? (
            <Button onClick={handleLogout} variant="success">
              Log out
            </Button>
          ) : (
            <Button onClick={handleLogin} variant="success">
              Log in
            </Button>
          )}

          <LinkContainer to="/register">
            <NavLink>
              <Button variant="secondary" onClick={handleClose}>
                Register
              </Button>
            </NavLink>
          </LinkContainer>
        </Modal.Footer>
      </Modal>
    </>
  );
}
