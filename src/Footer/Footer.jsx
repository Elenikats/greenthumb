import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="Footer">
      <p>©Made with love by</p>

      <FontAwesomeIcon icon={faGithub} className="icon" />
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
