import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home/Home";
import Product from "../screens/Product/Product";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Product" element={<Product />} />
    </Routes>
  );
}

export default AppRoutes;
