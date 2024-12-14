import React from "react";
import "./productCard.css";
const ProductCard = ({ item }) => {
  return (
    <div className="card">
      <div className="row">
        <div className="image-container">
          <img src={item.image} alt={item.title} className="card-image" />
        </div>
        <div className="content-container">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}...</p>
            <p className="card-text">
              <small className="text-body">{item.price}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
