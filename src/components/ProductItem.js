import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductItem = ({ el }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.image} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>{el.description}</Card.Text>
          <Card.Text>{el.price}$</Card.Text>
          <Link to={`/product/${el.id}`}>
            <Button variant="primary">More Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductItem;
