//Styles
import "./AboutScreen.css";

//Assets
import JS from "../assets/javascript.png";
import HTML from "../assets/html.png";
import Css from "../assets/css.png";
import Redux from "../assets/redux.png";
import Express from "../assets/express.png";
import Node from "../assets/nodeLogo.png";
import Sass from "../assets/sass.png";
import ReactLogo from "../assets/react.png";
import Bootstrap from "../assets/bootstrap-4.png";
import Mongodb from "../assets/mongodb.png";

import Profile from "../assets/profile.png";

const AboutScreen = () => {
  return (
    <div className="aboutScreen" id="about">
      <div className="aboutScreen__title">
        <p className="popout">
          <span className="span1">A</span>
          <span className="span1">B</span>
          <span className="span1">O</span>
          <span className="span1">U</span>
          <span className="span1">T</span>
        </p>
      </div>
      <div className="aboutScreen__about">
        <img src={Profile} alt="" />
        <p>
          <span>Hi, I'm Pedro Goncalves and I'm a web developer</span> and I
          specialize in React. My skills consist of HTML, CSS (Sass) JavaScript
          and Redux, currently developing back end skills with node, express and
          mongodb. Adept at communicating with team members to convey goals and
          needs during a project. Capable of targeting problems within the
          project, and then working with team members to find a solution and
          implement it efficiently. Not only am I passionate about technology,
          but thoroughly enjoy creating and working on innovative web
          applications. I am eager to gain new technical knowledge. Expert
          Googler.
        </p>
      </div>
      <div className="aboutScreen__skills">
        <div className="aboutScreen__skillsContainer">
          <img
            src={ReactLogo}
            className="aboutScreen__skills-img img-big"
            alt=""
          />
          <img src={Redux} className="aboutScreen__skills-img img-big" alt="" />
          <img src={JS} className="aboutScreen__skills-img" alt="" />
          <img src={HTML} className="aboutScreen__skills-img" alt="" />
          <img src={Css} className="aboutScreen__skills-img" alt="" />
          <img src={Sass} className="aboutScreen__skills-img" alt="" />
          <img src={Node} className="aboutScreen__skills-img" alt="" />
          <img
            src={Express}
            className="aboutScreen__skills-img img-big"
            alt=""
          />
          <img
            src={Mongodb}
            className="aboutScreen__skills-img img-big"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
