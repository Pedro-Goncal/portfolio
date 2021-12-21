//Styles
import "./Footer.css";
import DescriptionIcon from "@material-ui/icons/Description";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import CopyrightIcon from "@material-ui/icons/Copyright";

const Footer = () => {
  const d = new Date();

  const iconStyles = {
    fontSize: "42px",
    margin: "15px",
    color: "black",
  };

  return (
    <div className="footer">
      <div>
        <a
          href="https://github.com/Pedro-Goncal"
          target="_blank"
          rel="noreferrer"
          className="footer__icons"
        >
          <GitHubIcon className="footer__icons" style={iconStyles} />
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-goncalves88/"
          target="_blank"
          rel="noreferrer"
          className="footer__icons"
        >
          <LinkedInIcon className="footer__icons" style={iconStyles} />
        </a>
        <a
          href="https://resume.creddle.io/resume/12oxw41wfw6"
          target="_blank"
          rel="noreferrer"
          className="footer__icons"
        >
          <DescriptionIcon style={iconStyles} />
        </a>
      </div>
      <div className="footer__name">Pedro Goncalves </div>
      <div className="footer__copy">
        <div>
          <CopyrightIcon
            style={{ fontSize: "20px", margin: "15px", color: "black" }}
          />{" "}
        </div>
        <span className="footer__year">{d.getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;
