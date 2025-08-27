
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div style={styles.card} onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    cursor: "pointer",
    transition: "0.3s",
  },
  image: {
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px",
  },
};
