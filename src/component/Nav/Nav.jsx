import { Nav, Navbar, NavLink, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Logo_250px.jpg";
import { LinkContainer } from "react-router-bootstrap";
import "./nav.scss";
import { useContext } from "react";
import { userContext } from '../../contexts/userContext.jsx'
import Login from "../LoginLogout/Login.jsx";
import Register from "../LoginLogout/Register";

export default function App() {

  const [user, setUser, users, setUsers] = useContext(userContext) 
  console.log(user);
  return (
    // <h2>this is the nav</h2>
    <Navbar collapseOnSelect expand="xs">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            src={Logo}
            alt="logo"
            className="animate__animated animate__slideInDown"
          />
        </Navbar.Brand>
      </LinkContainer>

      <Nav className="loginAndCartContainer">
          <p className="userName">{user.firstName}</p>
        {/* <LinkContainer to="/login">
          <NavLink> */}
            <Login />
          {/* </NavLink>
        </LinkContainer> */}

        <LinkContainer to="/cart">
          <NavLink>
            <FontAwesomeIcon icon={faShoppingBasket} className="icon" />
          </NavLink>
        </LinkContainer>
      </Nav>

      {/* Sidebar */}

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products">
            <Nav.Link>Plants</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/plantdoctor">
            <Nav.Link>Plant-doctor</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
