import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav/Nav.jsx";
import About from "./component/About/About.jsx";
import Products from "./component/Products/Products.jsx";
import NotFound from "./component/NotFound.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Login from "./component/Login/Login.jsx";
import Main from "./component/Homepage/Main.jsx";
import Blog from "./component/Blog/Blog.jsx";
import "./App.scss";
import Register from "./component/Login/Register.jsx";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Nav />
      
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="/home" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="login">
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              counterCart={counterCart}
              setCounterCart={setCounterCart}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </div>
  );
}