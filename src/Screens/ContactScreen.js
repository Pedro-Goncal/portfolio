//Styles
import "./ContactScreen.css";

// import PersonIcon from "@material-ui/icons/Person";
// import EmailIcon from "@material-ui/icons/Email";
// import CommentIcon from "@material-ui/icons/Comment";

const ContactScreen = () => {
  return (
    <div className="contactScreen" id="contact">
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
    </div>
  );
};

export default ContactScreen;
