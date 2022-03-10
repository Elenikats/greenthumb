import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import "./products.scss";
import image1 from "../../plant-photos/plants/albo-monstera.jpeg";

import plants from "../../plants.js";
// import {plantFolder} from "./config.js"
// console.log(plantFolder);

console.log(plants);
export default function Products() {
  return (
    <div className="Products container-fluid d-flex justify-content-center animate__animated animate__fadeIn">
      <Row xs={1} md={2} lg={3}>
        {plants.map((plant) => {
          return (
            <Col className="container-fluid d-flex justify-content-center  ">
              <Card>
                <div
                  style={{
                    width: "100%",
                    height: "60vh",
                    backgroundImage: `url(${plant.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                <Card.Body>
                  {/* <Card.Text>{plant.description}</Card.Text> */}
                  <div>
                    <Card.Title>{plant.name}</Card.Title>
                    <h6>{plant.price} €</h6>
                  </div>
                  <div className="button-buy">
                    <Button variant="success">Buy now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
