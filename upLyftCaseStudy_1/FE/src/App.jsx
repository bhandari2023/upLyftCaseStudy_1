import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Allproducts from "./pages/Allproducts";
import ProductEntryForm from "./components/ProductEntryForm";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Allproducts />} />
        <Route path="/pentry" element={<ProductEntryForm />} />
      </Routes>
    </Router>
  );
}

export default App;
