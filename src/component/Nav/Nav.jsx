import { Nav, Navbar, NavLink, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingBasket,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Logo_250px.jpg";
import { LinkContainer } from "react-router-bootstrap";
import "./nav.scss";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext.jsx";
import Login from "../LoginLogout/Login.jsx";
import Register from "../LoginLogout/Register";
import Search from "../Search/Search.jsx";
import { searchContext } from "../../contexts/searchContext";
import { useNavigate } from "react-router-dom";

export default function NavigationBar({ counterCart, setCounterCart }) {
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
  const [search, setSearch, filteredItems, setFilteredItems] =
    useContext(searchContext);

  const navigate = useNavigate();

  function checkUserState() {
    login ? navigate("/cart") : setShow(true);
    setCartIconClicked(true);
  }
  return (
    <Navbar collapseOnSelect expand="xs">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <LinkContainer to="/">
        <Navbar.Brand>
          <div className="image">
            <img
              src={Logo}
              alt="logo"
              className="animate__animated animate__slideInDown"
            />
          </div>
        </Navbar.Brand>
      </LinkContainer>
      <Nav className="loginAndCartContainer">
        <p className="userName">
          {" "}
          {loggedInFirstName ? `Hello ${loggedInFirstName}` : ""}
        </p>
        {/* <LinkContainer to="/login">
          <NavLink> */}
        <Login />
        {/* </NavLink>
        </LinkContainer> */}

        <NavLink>
          <span onClick={checkUserState}>
            <FontAwesomeIcon icon={faShoppingBasket} className="icon" />
          </span>
        </NavLink>

        <div
          className="counterCart"
          style={{ width: ".1rem", paddingRight: ".2rem" }}
        >
          {counterCart}
        </div>

        <NavLink>
          <Search />
        </NavLink>
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

          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
