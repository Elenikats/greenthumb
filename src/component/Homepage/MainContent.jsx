import pinkWall from "../../plant-photos/homepage-decor/pink-wall.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faEarthAmerica,
  faTruck,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

export default function MainContent() {
  return (
    <div className="MainContent">
      <Row className="mainRow-1 ">
        <Col md={6} className="mainCol-1">
          <h1>Why shop with us ?</h1>
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
            <p>
              <FontAwesomeIcon icon={faFaceSmile} className="iconShopWithUs" />
              Excellent customer service
            </p>
          </div>
        </Col>

        <Col md={6} className="mainCol-2">
          <img className="tropicalWallpaperImg" src={pinkWall} />
        </Col>
      </Row>
    </div>
  );
}
