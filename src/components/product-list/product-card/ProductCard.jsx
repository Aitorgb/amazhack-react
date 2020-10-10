import "./ProductCard.scss";
import React from "react";

export default function ProductCard({ name, price, user, image, description }) {
  return (
    <div className="ProductCard">
      <div className="ProductCard__image" style={{background: `url(${image})`}}></div>
      <div className="ProductCard__info">
        <div className="ProductCard__name">{name}</div>
        <div className="ProductCard__description">{description}</div>
        <div className="ProductCard__price">{price} €</div>
      </div>
    </div>
  );
}
