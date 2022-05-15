import React from "react";
import Button from "../ui/button/button.component";
import Card from "../ui/card/card.component";

import "./home-preview.styles.scss";

const HomePreview = ({ category }) => {
  const { name, description, imageUrl, key, order } = category;

  return (
    <div className="home-preview-container">
      <Card cardType="normal">
        <div className="card-body">
          {(order % 2 == 0) ? (
            <>
              <img
                id="category-image"
                src={require(`../../assets${imageUrl}`)}
              />
              <div className="category-item">
                <h2 className="category-name">{name}</h2>
                <span className="category-description">{description}</span>
                <br />
                <Button>Explore {key}</Button>
              </div>
            </>
          ) : (
            <>
              <div className="category-item">
                <h2 className="category-name">{name}</h2>
                <span className="category-description">{description}</span>
                <br />
                <Button>Explore {key}</Button>
              </div>
              <img
                id="category-image"
                src={require(`../../assets${imageUrl}`)}
              />
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default HomePreview;
