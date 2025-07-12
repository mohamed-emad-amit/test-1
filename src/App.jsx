import axios from "axios";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="">Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="" Component={Home} />
        <Route path="/products" Component={Products} />
        <Route path="/product-details/:id" Component={ProductDetails} />

      </Routes>
    </>
  );
}

export default App;
