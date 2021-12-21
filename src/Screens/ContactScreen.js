//Styles
import './ContactScreen.css';

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

const ContactScreen = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="visible"
      exit="exit"
      className="contactScreen"
    >
      <Nav />
      <div className="contactScreen__title">
        <p className="popout3">
          <span className="span3">C</span>
          <span className="span3">O</span>
          <span className="span3">N</span>
          <span className="span3">T</span>
          <span className="span3">A</span>
          <span className="span3">C</span>
          <span className="span3">T</span>
        </p>
      </div>
      <div className="contactScreen__left"></div>
      <div className="contactScreen__right">
        <div className="contactScreen__contactContainer">
          <span className="text-center">Talk to me</span>
          <form className>
            <div className="input-container">
              <input type="text" required="" />
              <label>Name</label>
            </div>
            <div className="input-container">
              <input type="mail" required="" />
              <label>Email</label>
            </div>
            <div className="input-container">
              <textarea type="textarea" required="" />
              <label>Message</label>
            </div>
            <button type="button" className="btn">
              submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactScreen;
