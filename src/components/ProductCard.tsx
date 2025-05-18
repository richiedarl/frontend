"use client";
import React from "react";
import "./ProductCard.css"; // Import the CSS file

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <button onClick={() => alert(`Add ${product.title} to cart!`)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
