import aboutUsImg from "../../plant-photos/homepage-decor/photo-1607604971893-e4a9535a8ca2.jpeg";
import plant1 from "../../plant-photos/plants/albo-monstera.jpeg";
import plant2 from "../../plant-photos/plants/alocasia-frydek.jpeg";
import plant3 from "../../plant-photos/plants/alocasia-portodora.jpeg";
import plant4 from "../../plant-photos/plants/alocasia-zebrina.jpeg";
import plant5 from "../../plant-photos/plants/calathea.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./about.scss";

export default function About() {
  return (
    <section className="secAbout">
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={plant4} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={plant5} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={plant3} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col sm={7}>
            <h2>About us!</h2>
            <p>
              we are lbalblbalblalbalblablabalaalblab.blalbllabla. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Culpa impedit, unde
              fugiat neque adipisci commodi libero non quo ipsam optio
              accusamus! Recusandae quisquam molestias doloribus itaque facilis
              minima aliquam molestiae.
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
