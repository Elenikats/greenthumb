import aboutUsImg from "../../plant-photos/homepage-decor/about-photo.png";
// import plant1 from "../../plant-photos/plants/albo-monstera.jpeg";
// import plant2 from "../../plant-photos/plants/alocasia-frydek.jpeg";
// import plant3 from "../../plant-photos/plants/alocasia-portodora.jpeg";
// import plant4 from "../../plant-photos/plants/alocasia-zebrina.jpeg";
// import plant5 from "../../plant-photos/plants/calathea.jpeg";

/////
// import wide1 from "../../plant-photos/homepage-decor/jungle.jpeg";
// import wide2 from "../../plant-photos/homepage-decor/livingroom.jpeg";
// import wide3 from "../../plant-photos/homepage-decor/slider-3.jpeg";

/////
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./about.scss";

export default function About() {
  return (
    <section className="secAbout">
      {/* <div className="flex-container">
        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={wide1} alt="First slide" />
            <Carousel.Caption>
              <h5>Jungle vibes</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={wide2} alt="Second slide" />
            <Carousel.Caption>
              <h5>101 guide: decorate your house with plants</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={wide3} alt="Third slide" />
            <Carousel.Caption>
              <h5>All about hanging plants</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */}

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
