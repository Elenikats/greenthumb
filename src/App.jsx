import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav/Nav.jsx";
import About from "./component/About/About.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Nav />
    </div>
  );
}
