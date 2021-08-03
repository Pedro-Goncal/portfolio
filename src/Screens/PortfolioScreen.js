//Styles
import "./PortfolioScreen.css";
import PassivePerception from "../assets/PassivePerception.png";
import Proshop from "../assets/ProShop.png";
import DevConnector from "../assets/DevConnector.png";
import Natour from "../assets/Natour.png";
// import CovidTracker from "../assets/covidTracker.png";

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
          <a
            href="https://passiveperception.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Passive Perception</h4>
          </a>
          <p>
            Own Project. Passive Perception is a tool for Dungeons and Dragons
            GMs, to help them run their campains with ease. Built with React,
            Redux, Node, Express and MongoDB
          </p>
        </div>
        <div className="portfolio__card">
          <img src={Proshop} alt="" />
          <a
            href="https://proshop88.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h4>ProShop</h4>
          </a>
          <p>
            Full Stack E-Comerce app, Built with React, Redux, BootStrap, Node,
            Express, MongoDb
          </p>
        </div>
        <div className="portfolio__card">
          <img src={DevConnector} alt="" />
          <a
            href="https://devconnector88.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h4>DevConnector</h4>
          </a>
          <p>
            Full Stack social media for developers app, Built with React, Redux,
            BootStrap, Node, Express, MongoDb
          </p>
        </div>
        <div className="portfolio__card">
          <img src={Natour} alt="" />
          <h4>Natour - Nature Tours</h4>
          <p>
            Nature Tour in a single page app built to develop my design skills
            built with React and sass to develop my skill in design.
          </p>
        </div>
        {/* <div className="portfolio__card">
          <img src={CovidTracker} alt="" />
          <a
            href="https://covid-19-tracker-88fe0.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h4>CovidTracker</h4>
          </a>
          <p>
           App build with React, developed implementing 
          </p>
        </div> */}
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
