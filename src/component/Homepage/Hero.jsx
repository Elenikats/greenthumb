import monsti from "../../plant-photos/homepage-decor/monsti-big.jpg";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Hero() {
  return (
    <div className="Hero">
      <div
        className="animate__animated animate__fadeIn animate__slower"
        style={{
          width: "100vw",
          height: "89vh",
          backgroundImage: `url(${monsti})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="banner">
        <h1>Happy plants for happy people</h1>
        <LinkContainer to="/products">
          <NavLink>
            <Button variant="success">
              Shop Now
              <FontAwesomeIcon icon={faArrowRightLong} className="icon-arrow" />
            </Button>
          </NavLink>
        </LinkContainer>
      </div>
    </div>
  );
}
