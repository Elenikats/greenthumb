import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="Footer">
      <p>©Made with love by</p>

      <div className="footer-links">
        <div>
          <a href="https://github.com/AngelaHerrig" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon-github" />
            <h5>Angela</h5>
          </a>
        </div>

        <div>
          <a href="https://github.com/Elenikats" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon-github" />
            <h5>Eleni</h5>
          </a>
        </div>

        <div>
          <a href="https://github.com/Latifahal" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon-github" />
            <h5>Latifah</h5>
          </a>
        </div>
      </div>
    </section>
  );
}
