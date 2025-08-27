// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  return (
    <Router>
      <header style={headerStyles.header}>
        <h1 style={headerStyles.title}>Mbongrizzy's Store</h1>
      </header>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

const headerStyles = {
  header: {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "1rem 2rem",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginBottom: "20px"
  },
  title: {
    margin: 0,
    fontSize: "2rem",
    fontWeight: "bold"
  }
};
