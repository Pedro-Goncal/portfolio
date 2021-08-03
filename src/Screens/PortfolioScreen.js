//Styles
import "./PortfolioScreen.css";
import PassivePerception from "../assets/PassivePerception.png";
import Proshop from "../assets/ProShop.png";
import DevConnector from "../assets/DevConnector.png";
import Natour from "../assets/Natour.png";
import Netflix from "../assets/Netflix.png";
import CovidTracker from "../assets/covidTracker.png";
import Blog from "../assets/Blog.png";

const PortfolioScreen = () => {
  return (
    <div className="portfolioScreen" id="portfolio">
      <div className="portfolioScreen__title">
        <div>
          <p className="popout2">
            <span className="span2">P</span>
            <span className="span2">O</span>
            <span className="span2">J</span>
            <span className="span2">E</span>
            <span className="span2">C</span>
            <span className="span2">T</span>
            <span className="span2">S</span>
          </p>
        </div>
      </div>
      <div className="portfolio__cardContainer">
        <div className="portfolio__card">
          <img src={PassivePerception} alt="" />
          <h4>Passive Perception</h4>
          <p>
            Own Project. Passive Perception is a tool for Dungeons and Dragons
            GMs, to help them run their campains with ease. Built with React,
            Redux, Node, Express and MongoDB
          </p>
        </div>
        <div className="portfolio__card">
          <img src={Proshop} alt="" />
          <h4>ProShop</h4>
          <p>
            Full Stack E-Comerce app, React, Redux, BootStrap, Node, Express,
            MongoDb
          </p>
        </div>
        <div className="portfolio__card">
          <img src={DevConnector} alt="" />
          <h4>DevConnector</h4>
          <p>
            Full Stack E-Comerce app, React, Redux, BootStrap, Node, Express,
            MongoDb
          </p>
        </div>
        <div className="portfolio__card">
          <img src={Natour} alt="" />
          <h4>Natour - Nature Tours</h4>
          <p>
            Full Stack E-Comerce app, React, Redux, BootStrap, Node, Express,
            MongoDb
          </p>
        </div>
        <div className="portfolio__card">
          <img src={CovidTracker} alt="" />
          <h4>CovidTracker</h4>
          <p>
            Full Stack E-Comerce app, React, Redux, BootStrap, Node, Express,
            MongoDb
          </p>
        </div>
        {/* <div className="portfolio__card">
          <img src={Netflix} alt="" />
          <h4>Netflix Showcase</h4>
          <p>
            Full Stack E-Comerce app, React, Redux, BootStrap, Node, Express,
            MongoDb
          </p>
        </div>
        <div className="portfolio__card">
          <img src={Blog} alt="" />
          <h4>Vanila Blog</h4>
          <p>
            Full Stack E-Comerce app, React, Redux, BootStrap, Node, Express,
            MongoDb
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default PortfolioScreen;
