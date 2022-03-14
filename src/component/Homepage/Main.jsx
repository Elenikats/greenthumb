import "./main.scss";
import BlogCarousel from "./BlogCarousel.jsx";
import Hero from "./Hero.jsx";
import MainContent from "./MainContent";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="Main">
      <Hero />
      <MainContent />
      <BlogCarousel />
    </div>
  );
}
