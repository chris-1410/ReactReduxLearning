import React from 'react'
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./Components/ProductListing";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route> 404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
