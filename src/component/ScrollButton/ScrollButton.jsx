import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./scrollButton.scss";

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeVisibility);

    return () => {
      window.removeEventListener("scroll", changeVisibility);
    };
  }, []);

  return (
    <div className="arrow">
      <FontAwesomeIcon
        icon={faCircleArrowUp}
        onClick={scrollToTop}
        style={{ opacity: isVisible ? "100" : "0" }}
        className="icon-scrollUp"
      />
    </div>
  );
}
