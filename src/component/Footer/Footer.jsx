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
            <h5>Angela Herrig</h5>
          </a>
        </div>

        <div>
          <a href="https://github.com/Elenikats" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon-github" />
            <h5>Eleni Katsareli</h5>
          </a>
        </div>

        <div>
          <a href="https://github.com/Latifahal" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon-github" />
            <h5>Latifa Hal</h5>
          </a>
        </div>
      </div>
      {/* <div>
        <p>faq</p>
        <p>contact</p>
        <p>returns</p>
        <p>terms and conditions</p>
        <p>privacy</p>
      </div> */}
    </section>
  );
}
