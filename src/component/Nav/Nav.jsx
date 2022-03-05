import { Nav, Navbar, NavItem, NavLink, NavDropdown } from "react-bootstrap";
// import { BrowserRouter as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/Logo_250px.png";
import { LinkContainer } from "react-router-bootstrap";
export default function App() {
  return (
    // <h2>this is the nav</h2>
    <Navbar collapseOnSelect expand="xs">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <LinkContainer to="/">
        <Navbar.Brand>
          <img src={Logo} alt="" />
        </Navbar.Brand>
      </LinkContainer>
      <Nav>
        <LinkContainer to="/login">
          <NavLink>
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </LinkContainer>
        <LinkContainer to="/cart">
          <NavLink>
            <FontAwesomeIcon icon={faShoppingBasket} />
          </NavLink>
        </LinkContainer>
      </Nav>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/about">
            <Nav.Link>About us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products">
            <Nav.Link>Plants</Nav.Link>
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
