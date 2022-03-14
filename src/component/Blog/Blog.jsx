import "./blog.scss";
import plants from "../../plants.js";
import tropi from "../../plant-photos/homepage-decor/tropical-wallpaper.jpeg";

export default function Blog() {
  return (
    <div className="Blog default-height">
      <h1
        style={{
          backgroundImage: `url(${tropi})`,
        }}
      >
        Blog
      </h1>
    </div>
  );
}
