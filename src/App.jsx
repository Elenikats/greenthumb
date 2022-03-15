import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav/Nav.jsx";
import Register from "./component/LoginLogout/Register.jsx";
import About from "./component/About/About.jsx";
import Products from "./component/Products/Products.jsx";
import ProductItem from "./component/ProductItem/ProductItem.jsx";
import NotFound from "./component/NotFound.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Main from "./component/Homepage/Main.jsx";
import Blog from "./component/Blog/Blog.jsx";
import "./App.scss";
import Footer from "./component/Footer/Footer.jsx";
import { useState } from "react";
import ScrollButton from "./component/ScrollButton/ScrollButton.jsx";

export default function App() {
  const [cart, setCart] = useState([]);
  const [counterCart, setCounterCart] = useState("");
  return (
    <div>
      <Nav counterCart={counterCart} setCounterCart={setCounterCart} />
      <ScrollButton />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="products">
          <Route
            index
            element={
              <Products
                cart={cart}
                setCart={setCart}
                counterCart={counterCart}
                setCounterCart={setCounterCart}
              />
            }
          />
          <Route
            path=":productName"
            element={
              <ProductItem
                cart={cart}
                setCart={setCart}
                counterCart={counterCart}
                setCounterCart={setCounterCart}
              />
            }
          />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="register" element={<Register />} />

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
