import "./main.scss";
import BlogCarousel from "./BlogCarousel.jsx";
import Hero from "./Hero.jsx";
import MainContent from "./MainContent";

export default function Main() {
  return (
    <div className="Main">
      <Hero />
      <MainContent />
      <BlogCarousel />
    </div>
  );
}
