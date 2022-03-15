import { useRef, useContext } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./register.scss";
import { userContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const navigate = useNavigate();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

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
  const handleClose = () => setShow(false);

  console.log([...users]);

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      zip: zipRef.current.value,
    };
    setUser(newUser);
    setUsers([...users, newUser]);
    setLogin(true);
    setLoggedInFirstName(firstNameRef.current.value);
    navigate(-1);

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    addressRef.current.value = "";
    cityRef.current.value = "";
    zipRef.current.value = "";
  }

  return (
    <section className="registerContainer default-height">
      <Form onSubmit={handleSubmit} className="registerForm">
        <h1>Registration</h1>
        <a href="/">Home</a>

        <Row className="mb-3" xs={1} md={2}>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="name"
              placeholder="First name"
              ref={firstNameRef}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Last name"
              ref={lastNameRef}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3" xs={1} md={2}>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" ref={addressRef} />
        </Form.Group>

        <Row className="mb-3" xs={1} md={2}>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="City" ref={cityRef} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control placeholder="76285" ref={zipRef} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree with the terms and conditions"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default Register;
