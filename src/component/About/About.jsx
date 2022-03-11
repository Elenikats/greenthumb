import aboutUsImg from "../../plant-photos/homepage-decor/about-photo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.scss";

export default function About() {
  return (
    <section className="secAbout">
      <Container>
        <Row>
          <Col sm={7}>
            <h2>Let us introduce ourselves!</h2>
            <p>
              We are three passionate web-developers who just happen to love
              houseplants and nature.
            </p>
            <p>
              We created this website with React.js for our SPA final project
              during our studies in Digital Career Institute.
            </p>
          </Col>
          <Col sm={5}>
            <img className="aboutUsImg" src={aboutUsImg} alt="that's us" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
