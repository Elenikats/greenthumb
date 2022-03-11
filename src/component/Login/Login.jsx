import { Nav, NavLink } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { userContext } from "../../contexts/userContext";
import { useContext, useRef } from "react";
import usersArray from "../../user.js";
import { Routes } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useContext(userContext);
  console.log(user);

  // const [users, setUsers] = useContext(defaultUser)
  const emailRef = useRef();
  function handleLogin() {
    const checkLogin = usersArray.find(
      (email) => email.email == emailRef.current.value
    );
    if (checkLogin) {
      console.log("email exist");
    } else {
    }
    // console.log(checkLogin);
    console.log(emailRef);
  }

  return (
    <>
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
      <Button onClick={handleLogin} variant="success">
        Log in
      </Button>{" "}
      <NavLink to="register">
        {/* <Button variant="success">Register</Button>{' '} */}
        Register
      </NavLink>
    </>
  );
}
