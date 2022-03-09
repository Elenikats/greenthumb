import pinkWall from "../../plant-photos/homepage-decor/pink-wall.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faEarthAmerica,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default function MainContent() {
  return (
    <div className="MainContent">
      <Row className="mainRow-1 ">
        <Col md={6} className="mainCol-1">
          <h1>Why shop with us?</h1>
          <div className="paragraphs-shopWithUs-con">
            <p>
              <FontAwesomeIcon icon={faLeaf} className="iconShopWithUs" />
              Small sustainable business
            </p>
            <p>
              <FontAwesomeIcon
                icon={faEarthAmerica}
                className="iconShopWithUs"
              />
              Environmentally friendly packaging
            </p>
            <p>
              <FontAwesomeIcon icon={faTruck} className="iconShopWithUs" />
              Free shipping over 50 euro
            </p>
          </div>
        </Col>

        <Col md={6} className="mainCol-2">
          <img className="tropicalWallpaperImg" src={pinkWall} />
        </Col>
      </Row>
    </div>

    // <div className="MainContent">
    //   <Row className="mainRow-1">
    //     <Col md={6} className="mainCol-1">
    //       <h2>Why shop with us?</h2>
    //       <p>
    //         We are three passionate web-developers who just happen to love
    //         houseplants and nature.
    //       </p>
    //       <p>
    //         We created this website with React.js for our SPA final project
    //         during our studies in Digital Career Institute.
    //       </p>
    //     </Col>
    //     <Col md={6} className="mainCol-1">
    //       <img className="tropicalWallpaperImg" src={pinkWall} />
    //     </Col>
    //   </Row>
    // </div>
  );
}
