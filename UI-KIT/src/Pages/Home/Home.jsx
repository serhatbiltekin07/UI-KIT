/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Genre from "../../components/Genre/Genre";
import "../../products/productCard/ProductCard";
import "./Home.css";
import ProductCard from "../../products/productCard/ProductCard";
const Home = () => {
  const [last20Products, setLast20Products] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((res) => setLast20Products(res));
  }, []);
  return (
    <div className="home">
      <Genre />
      <h2>Ürünler:</h2>
      <div className="row">
        {last20Products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
