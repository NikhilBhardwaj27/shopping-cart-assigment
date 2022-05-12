import React from "react";
import Button from "../ui/button/button.component";
import Card from "../ui/card/card.component";

import "./products-list.styles.scss";

const ProductsList = ({ product }) => {
  const { name, description, imageURL, price } = product;
  return (
    <div className="product-container">
      <Card cardType="dashed">
        <div className="card-body">
          <h4 className="product-name">{name}</h4>
          <div className="main-container">
            <img
              id="product-image"
              src={require(`../../assets${imageURL}`)}
              alt="not-loaded"
            />
            <div className="description-mobile">
              <div className="description-container">
                <span className="product-description">
                  {description}
                </span>
              </div>
              <Button>Buy Now @ Rs.{price}</Button>
            </div>
          </div>

          <div className="product-price-container">
            <span className="product-price">MRP Rs.{price}</span>
            <Button>Buy Now</Button>
          </div>

          <div className="product-price-container-tablet">
            <Button style={{ width: "100%" }}>Buy Now @ Rs.{price}</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductsList;
