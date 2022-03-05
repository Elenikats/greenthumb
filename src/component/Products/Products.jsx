import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import "./products.scss";

import plants from "../../plants.js";
// import {plantFolder} from "./config.js"
// console.log(plantFolder);

console.log(plants);
export default function Products() {
  return (
    <section>
      <CardGroup>
        {plants.map((plant) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={plant.image} />
              {console.log(plant.image)}
              <Card.Body>
                <Card.Title>{plant.name}</Card.Title>
                <Card.Text>{plant.description}</Card.Text>
                <Button variant="success">Buy now</Button>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
    </section>
  );
}

//import imgs

///array of obj{name:fadsfs, img:dggsf, description:gggd}
