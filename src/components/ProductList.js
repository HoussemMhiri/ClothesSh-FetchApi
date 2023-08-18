import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [laoding, setLoading] = useState(true);
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    setLoading(false);
  }, []);

  return (
    <div>
      {laoding ? (
        <h2>...loading</h2>
      ) : (
        products.map((el) => <ProductItem key={el.id} el={el} />)
      )}
    </div>
  );
};

export default ProductList;
