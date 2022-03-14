import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav/Nav.jsx";

import Login from "./component/LoginLogout/Login.jsx";
import LoggedIn from "./component/LoginLogout/LoggedIn.jsx";
import Welcome from "./component/LoginLogout/Welcome.jsx"
import RequireLogin from "./App.jsx"
import Register from "./component/LoginLogout/Register.jsx";

import About from "./component/About/About.jsx";
import Products from "./component/Products/Products.jsx";
import NotFound from "./component/NotFound.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Main from "./component/Homepage/Main.jsx";
import Blog from "./component/Blog/Blog.jsx";
import "./App.scss";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [counterCart, setCounterCart] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true)
  return (
    <div>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setButtonDisabled={setButtonDisabled} />}/>
        <Route path="/products" element={<Products  cart={cart} setCart={setCart} counterCart={counterCart} setCounterCart={setCounterCart} buttonDisabled={buttonDisabled} setButtonDisabled={setButtonDisabled} />} />
        <Route path="register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} counterCart={counterCart} setCounterCart={setCounterCart} />} />
        <Route path="*" element={<NotFound />} />
      
        
      </Routes>
    </div>
  );
}