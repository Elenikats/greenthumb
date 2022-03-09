import "./main.scss";
import BlogCarousel from "./BlogCarousel.jsx";
import Hero from "./Hero/Hero.jsx";

export default function Main() {
  return (
    <div className="Main">
      <Hero />
      <BlogCarousel />
    </div>
  );
}
