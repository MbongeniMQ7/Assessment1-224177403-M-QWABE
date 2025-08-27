
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product...</p>;

  return (
    <div style={styles.container}>
      <button onClick={() => navigate("/")}>Back</button>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>
        <b>Price:</b> ${product.price}
      </p>
      <p>
        <b>Category:</b> {product.category}
      </p>
      <p>
        <b>Rating:</b> {product.rating.rate} ⭐ ({product.rating.count} reviews)
      </p>
    </div>
  );
}

const styles = {
  container: { padding: "20px", maxWidth: "600px", margin: "auto" },
  image: { width: "200px", objectFit: "contain" },
};
