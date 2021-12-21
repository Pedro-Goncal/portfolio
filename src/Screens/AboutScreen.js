//Styles
import './AboutScreen.css';

import Nav from '../Components/Nav/Nav';

//Assets
// import JS from '../assets/javascript.png';
// import HTML from '../assets/html.png';
// import Css from '../assets/css.png';
// import Redux from '../assets/redux.png';
// import Express from '../assets/express.png';
// import Node from '../assets/nodeLogo.png';
// import Sass from '../assets/sass.png';
// import ReactLogo from '../assets/react.png';
// import Mongodb from '../assets/mongodb.png';
import Profile from '../assets/profile.png';

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

const AboutScreen = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="visible"
      exit="exit"
      className="aboutScreen"
    >
      <Nav />
      {/* TITLE */}
      <div className="aboutScreen__title">
        <p className="popout">
          <span className="span1">A</span>
          <span className="span1">B</span>
          <span className="span1">O</span>
          <span className="span1">U</span>
          <span className="span1">T</span>
        </p>
      </div>
      {/* ABOUT CONTAINER */}
      <div className="aboutScreen__about">
        <img src={Profile} alt="" />
        <p>
          <span>
            Hi, I'm Pedro Goncalves and I'm a self-starting web developer
          </span>{' '}
          Proficient in HTML, CSS, SASS, JavaScript, Redux, and Typescript, as
          well as a working knowledge of back-end skills with node, express,
          MongoDB, and AWS. Adept at communicating with team members to convey
          goals and needs during a project. Capable of targeting problems within
          the project, and then working with team members to find a solution and
          implement it efficiently. Not only am I passionate about technology,
          but thoroughly enjoy creating and working on innovative web
          applications. I am eager to gain new technical knowledge. Expert
          Googler.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutScreen;
