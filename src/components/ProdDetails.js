import axios from "axios";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RemoveSelectProduct, selectProduct } from "../redux/actions";

const ProdDetails = () => {
  const { prodId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;

  const fetchProductSelected = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${prodId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectProduct(response.data));
  };

  useEffect(() => {
    if (prodId && prodId !== "") fetchProductSelected();
    return () => {
      dispatch(RemoveSelectProduct());
    };
  }, [prodId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <h2>...Loading</h2>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>{category}</Card.Title>
            <Card.Title>{description}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Link to="/">
              <Button variant="primary">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ProdDetails;
