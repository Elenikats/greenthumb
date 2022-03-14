import { Nav, NavLink } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { userContext } from "../../contexts/userContext";
import { useContext, useRef } from "react";
import usersArray from "../../user.js";
import { Routes } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import { Card, Modal } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Login({buttonDisabled, setButtonDisabled}) {
  const [user, setUser, users, setUsers, login, setLogin, loggedInFirstName, setLoggedInFirstName] = useContext(userContext);
  const emailRef = useRef();
  console.log(setButtonDisabled);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [alert, setAlert] = useState(false);
 


  function handleLogin() {
    const checkLogin = users.find(
      (email) => email.email == emailRef.current.value
    );
    console.log(checkLogin);
    if (checkLogin) {
      // console.log("email exist"); 
      // close login box
      setShow(false)
      setAlert(false)
      setLogin(true)
      setLoggedInFirstName(checkLogin.firstName)

    } else {
      // console.log("email doesn't exist ");
      setAlert(true)
      
    }
  }

  function handleLogout() {

    setLogin(false)
    setShow(false)
    setLoggedInFirstName("")

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

        {alert ? <Alert variant="danger"> 
          <p>Account doesn't exist please register</p>
        </Alert> : ""}

        <Modal.Footer>
          { login ? <Button onClick={handleLogout} variant="success">
            Log out
          </Button> : <Button onClick={handleLogin} variant="success">
            Log in
          </Button>}
          
        
          {/* <NavLink to="register"> */}
          <Button variant="secondary" onClick={handleClose}>
            <NavLink to="/register">Register</NavLink>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}