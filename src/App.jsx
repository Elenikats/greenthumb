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
import Footer from "./Footer/Footer.jsx";
import { useState } from "react";
import ScrollToTop from "./component/ScrollButton/ScrollButton.jsx";

export default function App() {
  //Array of all items in the cart
  const [cart, setCart] = useState([]);
  const [counterCart, setCounterCart] = useState("");

  return (
    <div>
      <Nav counterCart={counterCart} setCounterCart={setCounterCart} />
      <ScrollToTop />

      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="/home" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={
            <Products
              cart={cart}
              setCart={setCart}
              counterCart={counterCart}
              setCounterCart={setCounterCart}
            />
          }
        />
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

      <Footer />
    </div>
  );
}
