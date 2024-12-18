import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Checkout from "./pages/Checkout.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import { CartProvider } from "./CartContext.js";
import ProductList from "./pages/product.jsx";



function App() {
  return (
    <CartProvider>
      <Router>
        <div style={{ backgroundColor: "#1a1a1a", color: "#f5f5dc", minHeight: "100vh" }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductList/>} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartProvider/>} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
