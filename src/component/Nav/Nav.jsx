import { Nav, Navbar, NavItem, NavLink, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "../../assets/Logo_250px.png";
export default function App() {
  return (
    <h2>this is the nav</h2>
    // <Navbar collapseOnSelect expand="xs">
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Brand href="#home">
    //     <img src={Logo} alt="" />
    //   </Navbar.Brand>
    //   <Nav>
    //     <NavLink>
    //       <FontAwesomeIcon icon={faUser} />
    //     </NavLink>
    //     <NavLink>
    //       <FontAwesomeIcon icon={faShoppingBasket} />
    //     </NavLink>
    //   </Nav>

    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link as={Link} to={"/about"}>
    //         About us
    //       </Nav.Link>
    //       <Nav.Link href="#plants">Plants</Nav.Link>
    //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Nav>
    //       <Nav.Link href="#deets">More deets</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}
