//Styles
import './PortfolioScreen.css';
import PassivePerception from '../assets/PassivePerception.png';
import Proshop from '../assets/ProShop.png';
import DevConnector from '../assets/DevConnector.png';
import Natour from '../assets/Natour.png';
import CovidTracker from '../assets/covidTracker.png';

import Nav from '../Components/Nav/Nav';

//Framer Motion
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'none' },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const PortfolioScreen = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="visible"
      exit="exit"
      className="portfolioScreen"
    >
      <Nav />
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
          <div>
            <a
              href="https://passiveperception.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={PassivePerception} alt="" />
            </a>
          </div>
          <div>
            <h4>Passive Perception</h4>
            <p>
              Passive Perception is a tool for Dungeons and Dragons GMs, to help
              them run their campains with ease. Built with React, Redux, Node,
              Express and MongoDB
            </p>
          </div>
        </div>
        <div className="portfolio__card" id="reverse-row">
          <div>
            <a
              href="https://proshop88.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Proshop} alt="" />
            </a>
          </div>
          <div>
            <h4>ProShop</h4>
            <p>
              Full Stack E-Comerce app, Built with React, Redux, BootStrap,
              Node, Express, MongoDb
            </p>
          </div>
        </div>
        <div className="portfolio__card">
          <div>
            <a
              href="https://devconnector88.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={DevConnector} alt="" />
            </a>
          </div>
          <div>
            <h4>DevConnector</h4>
            <p>
              Full Stack social media for developers app, Built with React,
              Redux, BootStrap, Node, Express, MongoDb
            </p>
          </div>
        </div>
        <div className="portfolio__card" id="reverse-row">
          <div>
            <img src={Natour} alt="" />
          </div>
          <div>
            <h4>Natour - Nature Tours</h4>
            <p>
              Nature Tour in a single page app built to develop my design skills
              built with React and sass to develop my skill in design.
            </p>
          </div>
        </div>
        <div className="portfolio__card">
          <div>
            <a
              href="https://covid-19-tracker-88fe0.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={CovidTracker} alt="" />
            </a>
          </div>
          <div>
            <h4>CovidTracker</h4>
            <p>App build with React, developed implementing</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioScreen;
