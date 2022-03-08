import wide1 from "../../plant-photos/homepage-decor/jungle.jpeg";
import wide2 from "../../plant-photos/homepage-decor/livingroom.jpeg";
import wide3 from "../../plant-photos/homepage-decor/slider-3.jpeg";

import Carousel from "react-bootstrap/Carousel";
import "./main.scss";

export default function BlogCarousel() {
  return (
    <div className="BlogCarousel">
      <h1>Blog</h1>
      <div className="flex-carousel-container">
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
      </div>
    </div>
  );
}
