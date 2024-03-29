import { useState } from 'react';

//Styles
import './LandingScreen.css';

//Router
// import { Link } from 'react-router-dom';

//Framer Motion
import { motion } from 'framer-motion';
import {
  containerVariants,
  imageVariants,
  colorBlockVariants,
  svgVariantsTitle,
  svgVariantsSubTitle,
  // svgVariantsArrow,
  // arrowPathVariants,
} from '../framerMotionVariants/framerMotionVariants';

//Background changing variable
const backgroundImageClass = [
  '--backgroundImageChoise1',
  '--backgroundImageChoise2',
  '--backgroundImageChoise3',
];

const LandingScreen = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    '--backgroundImageChoise1'
  );

  const changeBackground = () => {
    const random = Math.floor(Math.random() * 3);

    setBackgroundImage(backgroundImageClass[random]);
  };

  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      className="landingScreen"
    >
      {/* COLOUR BLOCK */}
      <motion.div
        variants={colorBlockVariants}
        initial="initial"
        animate="visible"
        className="landingScreen__colorBlock"
      ></motion.div>

      {/* MAIN COTAINER */}
      <div className="landingScreen__mainContainer">
        {/* PROFILE PICTURE CONTAINER */}
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="visible"
          className="landingScreen__imageContainer"
        ></motion.div>

        {/* TITLE CONTAINER */}
        <div className="landingScreen__titleContainer">
          <div className="landingScreen_titleWraper" onClick={changeBackground}>
            <motion.h1 className={`landingScreen__titleH1 ${backgroundImage}`}>
              <motion.div
                variants={svgVariantsTitle}
                initial="initial" //Start Point
                animate="visible" //End Point
                className="landingScreen__titleH1--title"
              >
                I'm <span className="landingScreen__titleH1--fliker1">P</span>
                edro <span className="landingScreen__titleH1--fliker2">G</span>
                onçalves
              </motion.div>
              <br />
              <motion.div
                variants={svgVariantsSubTitle}
                initial="initial" //Start Point
                animate="visible" //End Point
                className="landingScreen__titleH1--subTitle"
              >
                <span className="landingScreen__titleH1--fliker3">W</span>eb{' '}
                <span className="landingScreen__titleH1--fliker4">D</span>
                eveloper
              </motion.div>
            </motion.h1>
          </div>
          {/* ARROWS */}
          {/* <div className="landingScreen__arrowsContainer ">
            <div>
              <Link to="/about">
                <motion.svg
                  variants={svgVariantsArrow}
                  initial="initial" //Start Point
                  animate="visible" //End Point
                  width="120"
                  height="100"
                  viewBox="0 0 120 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="triangles" clip-path="url(#clip0_2_4)">
                    <g id="lightGroup">
                      <motion.path
                        variants={arrowPathVariants}
                        id="light1"
                        opacity="0.8"
                        d="M41 45.268C42.3333 46.0378 42.3333 47.9623 41 48.7321L6.5 68.6506C5.16666 69.4204 3.5 68.4582 3.5 66.9186L3.5 27.0814C3.5 25.5418 5.16667 24.5796 6.5 25.3494L41 45.268Z"
                      />
                    </g>
                    <g id="darkGroup">
                      <motion.path
                        variants={arrowPathVariants}
                        id="dark1"
                        opacity="0.8"
                        d="M53.9999 45.268C55.3332 46.0378 55.3332 47.9623 53.9999 48.7321L19.4999 68.6506C18.1665 69.4204 16.4999 68.4582 16.4999 66.9186L16.4999 27.0814C16.4999 25.5418 18.1665 24.5796 19.4999 25.3494L53.9999 45.268Z"
                      />
                      <motion.path
                        variants={arrowPathVariants}
                        id="dark2"
                        opacity="0.8"
                        d="M41 45.268C42.3333 46.0378 42.3333 47.9623 41 48.7321L6.5 68.6506C5.16666 69.4204 3.5 68.4582 3.5 66.9186L3.5 27.0814C3.5 25.5418 5.16667 24.5796 6.5 25.3494L41 45.268Z"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_4">
                      <rect width="120" height="100" fill="white" />
                    </clipPath>
                  </defs>
                </motion.svg>
              </Link>
            </div>
          </div> */}
        </div>

        {/* ICONS CONTAINER */}
        <div className="landingPage__iconsContainer">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 2.5, delay: 3.5 },
            }}
            href="https://github.com/Pedro-Goncal"
            target="_blank"
            rel="noreferrer"
            className="footer__icons"
          >
            <i class="fab fa-github"></i>
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 2.5, delay: 4.5 },
            }}
            href="https://www.linkedin.com/in/pedro-goncalves88/"
            target="_blank"
            rel="noreferrer"
            className="footer__icons"
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 2.5, delay: 5.5 },
            }}
            href="https://resume.creddle.io/resume/12oxw41wfw6"
            target="_blank"
            rel="noreferrer"
            className="footer__icons"
          >
            <i class="fas fa-file-alt"></i>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingScreen;

/*
  Cool animation for the name and title
  
   <div className="landingScreen__perspective-text">
          <div className="landingScreen__perspective-line">
            <p></p>
            <p>Pedro</p>
          </div>
          <div className="landingScreen__perspective-line">
            <p>Pedro</p>
            <p>Gonçalves</p>
          </div>
          <div className="landingScreen__perspective-line">
            <p>Gonçalves</p>
            <p>Web</p>
          </div>
          <div className="landingScreen__perspective-line">
            <p>Web</p>
            <p>Developer</p>
          </div>
          <div className="landingScreen__perspective-line">
            <p>Developer</p>
            <p></p>
          </div>
        </div>


=========================================================

<div className="landingScreen__bottom">
        <div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2.5, delay: 1.5 } }}
            href="https://github.com/Pedro-Goncal"
            target="_blank"
            rel="noreferrer"
            className="footer__icons"
          >
            <i class="fab fa-github"></i>
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2.5, delay: 2.5 } }}
            href="https://www.linkedin.com/in/pedro-goncalves88/"
            target="_blank"
            rel="noreferrer"
            className="footer__icons"
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2.5, delay: 3.5 } }}
            href="https://resume.creddle.io/resume/12oxw41wfw6"
            target="_blank"
            rel="noreferrer"
            className="footer__icons"
          >
            <i class="fas fa-file-alt"></i>
          </motion.a>
        </div>
      </div>
*/

/**
  {/* HI I"M PEDRO GONCALVES 
            {/* <div className="landingScreen__title">
              <motion.svg
                variants={svgVariantsTitle}
                initial="initial" //Start Point
                animate="visible" //End Point
                className="titleSVG"
                width="20"
                height="34"
                viewBox="0 0 20 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  variants={titlePathVariants}
                  d="M45.464 1.24V52H31.352V31.624H14.144V52H0.0320001V1.24H14.144V20.32H31.352V1.24H45.464ZM67.6518 1.24V52H53.5398V1.24H67.6518ZM90.8803 39.904L83.1763 60.928H74.2483L77.9923 39.904H90.8803ZM126.222 1.24V52H112.11V1.24H126.222ZM137.715 1.24H151.971L143.691 21.544H134.259L137.715 1.24ZM218.405 1.24V52H204.293V23.992L194.717 52H182.909L173.261 23.776V52H159.149V1.24H176.213L188.957 34.216L201.413 1.24H218.405ZM280.324 18.16C280.324 21.232 279.604 24.04 278.164 26.584C276.772 29.08 274.636 31.096 271.756 32.632C268.924 34.12 265.444 34.864 261.316 34.864H254.332V52H240.22V1.24H261.316C265.396 1.24 268.852 1.96 271.684 3.4C274.564 4.84 276.724 6.832 278.164 9.376C279.604 11.92 280.324 14.848 280.324 18.16ZM259.948 23.632C263.932 23.632 265.924 21.808 265.924 18.16C265.924 14.464 263.932 12.616 259.948 12.616H254.332V23.632H259.948ZM300.105 12.544V20.824H316.305V31.552H300.105V40.696H318.465V52H285.993V1.24H318.465V12.544H300.105ZM345.526 1.24C350.854 1.24 355.51 2.32 359.494 4.48C363.526 6.592 366.622 9.568 368.782 13.408C370.942 17.248 372.022 21.64 372.022 26.584C372.022 31.48 370.918 35.848 368.71 39.688C366.55 43.528 363.454 46.552 359.422 48.76C355.438 50.92 350.806 52 345.526 52H325.438V1.24H345.526ZM344.446 39.544C348.574 39.544 351.814 38.416 354.166 36.16C356.518 33.904 357.694 30.712 357.694 26.584C357.694 22.408 356.518 19.192 354.166 16.936C351.814 14.632 348.574 13.48 344.446 13.48H339.55V39.544H344.446ZM404.088 52L394.008 33.28H392.496V52H378.384V1.24H400.632C404.712 1.24 408.168 1.96 411 3.4C413.832 4.792 415.968 6.736 417.408 9.232C418.848 11.68 419.568 14.44 419.568 17.512C419.568 20.968 418.608 24.016 416.688 26.656C414.816 29.248 412.056 31.096 408.408 32.2L419.856 52H404.088ZM392.496 23.632H399.48C401.4 23.632 402.84 23.176 403.8 22.264C404.76 21.352 405.24 20.032 405.24 18.304C405.24 16.672 404.736 15.4 403.728 14.488C402.768 13.528 401.352 13.048 399.48 13.048H392.496V23.632ZM450.321 52.504C445.569 52.504 441.201 51.4 437.217 49.192C433.233 46.936 430.065 43.84 427.713 39.904C425.409 35.92 424.257 31.432 424.257 26.44C424.257 21.448 425.409 16.984 427.713 13.048C430.065 9.064 433.233 5.968 437.217 3.76C441.201 1.552 445.569 0.447999 450.321 0.447999C455.121 0.447999 459.489 1.552 463.425 3.76C467.409 5.968 470.553 9.064 472.857 13.048C475.161 16.984 476.313 21.448 476.313 26.44C476.313 31.432 475.161 35.92 472.857 39.904C470.553 43.84 467.409 46.936 463.425 49.192C459.441 51.4 455.073 52.504 450.321 52.504ZM450.321 39.4C453.921 39.4 456.753 38.224 458.817 35.872C460.929 33.52 461.985 30.376 461.985 26.44C461.985 22.408 460.929 19.24 458.817 16.936C456.753 14.584 453.921 13.408 450.321 13.408C446.673 13.408 443.817 14.584 441.753 16.936C439.689 19.24 438.657 22.408 438.657 26.44C438.657 30.424 439.689 33.592 441.753 35.944C443.817 38.248 446.673 39.4 450.321 39.4ZM528.838 17.944C528.022 16.6 526.894 15.568 525.454 14.848C524.062 14.128 522.406 13.768 520.486 13.768C516.934 13.768 514.126 14.92 512.062 17.224C510.046 19.528 509.038 22.624 509.038 26.512C509.038 30.88 510.118 34.216 512.278 36.52C514.486 38.776 517.678 39.904 521.854 39.904C526.798 39.904 530.326 37.672 532.438 33.208H518.254V23.056H544.606V36.736C543.502 39.424 541.87 41.944 539.71 44.296C537.598 46.648 534.91 48.592 531.646 50.128C528.382 51.616 524.662 52.36 520.486 52.36C515.398 52.36 510.886 51.28 506.95 49.12C503.062 46.912 500.038 43.864 497.878 39.976C495.766 36.04 494.71 31.552 494.71 26.512C494.71 21.52 495.766 17.08 497.878 13.192C500.038 9.256 503.062 6.208 506.95 4.048C510.838 1.84 515.326 0.735999 520.414 0.735999C526.798 0.735999 532.078 2.272 536.254 5.344C540.43 8.416 543.022 12.616 544.03 17.944H528.838ZM575.266 52.504C570.514 52.504 566.146 51.4 562.162 49.192C558.178 46.936 555.01 43.84 552.658 39.904C550.354 35.92 549.202 31.432 549.202 26.44C549.202 21.448 550.354 16.984 552.658 13.048C555.01 9.064 558.178 5.968 562.162 3.76C566.146 1.552 570.514 0.447999 575.266 0.447999C580.066 0.447999 584.434 1.552 588.37 3.76C592.354 5.968 595.498 9.064 597.802 13.048C600.106 16.984 601.258 21.448 601.258 26.44C601.258 31.432 600.106 35.92 597.802 39.904C595.498 43.84 592.354 46.936 588.37 49.192C584.386 51.4 580.018 52.504 575.266 52.504ZM575.266 39.4C578.866 39.4 581.698 38.224 583.762 35.872C585.874 33.52 586.93 30.376 586.93 26.44C586.93 22.408 585.874 19.24 583.762 16.936C581.698 14.584 578.866 13.408 575.266 13.408C571.618 13.408 568.762 14.584 566.698 16.936C564.634 19.24 563.602 22.408 563.602 26.44C563.602 30.424 564.634 33.592 566.698 35.944C568.762 38.248 571.618 39.4 575.266 39.4ZM654.618 52H640.506L621.714 23.632V52H607.602V1.24H621.714L640.506 29.968V1.24H654.618V52ZM685.985 39.4C688.097 39.4 689.945 38.896 691.529 37.888C693.161 36.88 694.433 35.416 695.345 33.496H710.537C709.433 38.584 707.129 42.76 703.625 46.024C700.169 49.288 695.849 51.304 690.665 52.072V54.664C693.017 54.664 695.153 55.36 697.073 56.752C699.041 58.144 700.025 60.28 700.025 63.16C700.025 66.088 698.993 68.248 696.929 69.64C694.865 71.032 692.417 71.728 689.585 71.728H677.849V64.312H687.929C689.513 64.312 690.305 63.808 690.305 62.8C690.305 61.792 689.513 61.288 687.929 61.288H682.313V52.144C677.993 51.616 674.225 50.2 671.009 47.896C667.793 45.592 665.297 42.616 663.521 38.968C661.793 35.272 660.929 31.12 660.929 26.512C660.929 21.52 661.961 17.08 664.025 13.192C666.137 9.256 669.113 6.208 672.953 4.048C676.793 1.84 681.209 0.735999 686.201 0.735999C692.537 0.735999 697.865 2.44 702.185 5.848C706.505 9.208 709.289 13.792 710.537 19.6H695.345C694.433 17.68 693.161 16.216 691.529 15.208C689.945 14.2 688.097 13.696 685.985 13.696C682.721 13.696 680.105 14.872 678.137 17.224C676.217 19.528 675.257 22.624 675.257 26.512C675.257 30.448 676.217 33.592 678.137 35.944C680.105 38.248 682.721 39.4 685.985 39.4ZM749.332 43.72H731.332L728.596 52H713.764L732.268 1.24H748.54L766.972 52H752.068L749.332 43.72ZM745.804 32.92L740.332 16.504L734.932 32.92H745.804ZM785.683 41.2H801.451V52H771.571V1.24H785.683V41.2ZM856.33 1.24L838.834 52H820.762L803.194 1.24H818.314L829.834 37.888L841.282 1.24H856.33ZM874.839 12.544V20.824H891.039V31.552H874.839V40.696H893.199V52H860.727V1.24H893.199V12.544H874.839ZM919.325 52.504C913.421 52.504 908.573 51.112 904.781 48.328C900.989 45.496 898.949 41.464 898.661 36.232H913.709C913.853 38.008 914.381 39.304 915.293 40.12C916.205 40.936 917.381 41.344 918.821 41.344C920.117 41.344 921.173 41.032 921.989 40.408C922.853 39.736 923.285 38.824 923.285 37.672C923.285 36.184 922.589 35.032 921.197 34.216C919.805 33.4 917.549 32.488 914.429 31.48C911.117 30.376 908.429 29.32 906.365 28.312C904.349 27.256 902.573 25.744 901.037 23.776C899.549 21.76 898.805 19.144 898.805 15.928C898.805 12.664 899.621 9.88 901.253 7.576C902.885 5.224 905.141 3.448 908.021 2.248C910.901 1.048 914.165 0.447999 917.813 0.447999C923.717 0.447999 928.421 1.84 931.925 4.624C935.477 7.36 937.373 11.224 937.613 16.216H922.277C922.229 14.68 921.749 13.528 920.837 12.76C919.973 11.992 918.845 11.608 917.453 11.608C916.397 11.608 915.533 11.92 914.861 12.544C914.189 13.168 913.853 14.056 913.853 15.208C913.853 16.168 914.213 17.008 914.933 17.728C915.701 18.4 916.637 19 917.741 19.528C918.845 20.008 920.477 20.632 922.637 21.4C925.853 22.504 928.493 23.608 930.557 24.712C932.669 25.768 934.469 27.28 935.957 29.248C937.493 31.168 938.261 33.616 938.261 36.592C938.261 39.616 937.493 42.328 935.957 44.728C934.469 47.128 932.285 49.024 929.405 50.416C926.573 51.808 923.213 52.504 919.325 52.504Z"
                  fill="none"
                />
              </motion.svg>
            </div> 
            // {/* WEB DEVELOPER */
/* <div className="landingScreen__subtitle">
              <motion.svg
                variants={svgVariantsSubTitle}
                initial="initial" //Start Point
                animate="visible" //End Point
                className="subTitleSVG"
                width="20"
                height="34"
                viewBox="0 0 20 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  variants={SubTitlePathVariants}
                  d="M74.528 1.24L62.072 52H44.72L37.736 20.896L30.608 52H13.256L0.944 1.24H16.208L22.112 35.944L30.104 1.24H45.584L53.36 35.656L59.264 1.24H74.528ZM94.6284 12.544V20.824H110.828V31.552H94.6284V40.696H112.988V52H80.5164V1.24H112.988V12.544H94.6284ZM152.362 25.936C155.338 26.608 157.69 28.096 159.418 30.4C161.194 32.656 162.082 35.248 162.082 38.176C162.082 42.496 160.594 45.88 157.618 48.328C154.642 50.776 150.466 52 145.09 52H119.962V1.24H144.298C149.482 1.24 153.538 2.392 156.466 4.696C159.442 7 160.93 10.24 160.93 14.416C160.93 17.392 160.138 19.888 158.554 21.904C157.018 23.872 154.954 25.216 152.362 25.936ZM134.074 21.4H141.202C144.754 21.4 146.53 19.936 146.53 17.008C146.53 13.984 144.754 12.472 141.202 12.472H134.074V21.4ZM142.282 40.624C145.834 40.624 147.61 39.136 147.61 36.16C147.61 34.624 147.13 33.448 146.17 32.632C145.258 31.816 143.938 31.408 142.21 31.408H134.074V40.624H142.282ZM202.136 1.24C207.464 1.24 212.12 2.32 216.104 4.48C220.136 6.592 223.232 9.568 225.392 13.408C227.552 17.248 228.632 21.64 228.632 26.584C228.632 31.48 227.528 35.848 225.32 39.688C223.16 43.528 220.064 46.552 216.032 48.76C212.048 50.92 207.416 52 202.136 52H182.048V1.24H202.136ZM201.056 39.544C205.184 39.544 208.424 38.416 210.776 36.16C213.128 33.904 214.304 30.712 214.304 26.584C214.304 22.408 213.128 19.192 210.776 16.936C208.424 14.632 205.184 13.48 201.056 13.48H196.16V39.544H201.056ZM249.105 12.544V20.824H265.305V31.552H249.105V40.696H267.465V52H234.993V1.24H267.465V12.544H249.105ZM323.83 1.24L306.334 52H288.262L270.694 1.24H285.814L297.334 37.888L308.782 1.24H323.83ZM342.339 12.544V20.824H358.539V31.552H342.339V40.696H360.699V52H328.227V1.24H360.699V12.544H342.339ZM381.785 41.2H397.553V52H367.673V1.24H381.785V41.2ZM427.376 52.504C422.624 52.504 418.256 51.4 414.272 49.192C410.288 46.936 407.12 43.84 404.768 39.904C402.464 35.92 401.312 31.432 401.312 26.44C401.312 21.448 402.464 16.984 404.768 13.048C407.12 9.064 410.288 5.968 414.272 3.76C418.256 1.552 422.624 0.447999 427.376 0.447999C432.176 0.447999 436.544 1.552 440.48 3.76C444.464 5.968 447.608 9.064 449.912 13.048C452.216 16.984 453.368 21.448 453.368 26.44C453.368 31.432 452.216 35.92 449.912 39.904C447.608 43.84 444.464 46.936 440.48 49.192C436.496 51.4 432.128 52.504 427.376 52.504ZM427.376 39.4C430.976 39.4 433.808 38.224 435.872 35.872C437.984 33.52 439.04 30.376 439.04 26.44C439.04 22.408 437.984 19.24 435.872 16.936C433.808 14.584 430.976 13.408 427.376 13.408C423.728 13.408 420.872 14.584 418.808 16.936C416.744 19.24 415.712 22.408 415.712 26.44C415.712 30.424 416.744 33.592 418.808 35.944C420.872 38.248 423.728 39.4 427.376 39.4ZM499.816 18.16C499.816 21.232 499.096 24.04 497.656 26.584C496.264 29.08 494.128 31.096 491.248 32.632C488.416 34.12 484.936 34.864 480.808 34.864H473.824V52H459.712V1.24H480.808C484.888 1.24 488.344 1.96 491.176 3.4C494.056 4.84 496.216 6.832 497.656 9.376C499.096 11.92 499.816 14.848 499.816 18.16ZM479.44 23.632C483.424 23.632 485.416 21.808 485.416 18.16C485.416 14.464 483.424 12.616 479.44 12.616H473.824V23.632H479.44ZM519.597 12.544V20.824H535.797V31.552H519.597V40.696H537.957V52H505.485V1.24H537.957V12.544H519.597ZM570.634 52L560.554 33.28H559.042V52H544.93V1.24H567.178C571.258 1.24 574.714 1.96 577.546 3.4C580.378 4.792 582.514 6.736 583.954 9.232C585.394 11.68 586.114 14.44 586.114 17.512C586.114 20.968 585.154 24.016 583.234 26.656C581.362 29.248 578.602 31.096 574.954 32.2L586.402 52H570.634ZM559.042 23.632H566.026C567.946 23.632 569.386 23.176 570.346 22.264C571.306 21.352 571.786 20.032 571.786 18.304C571.786 16.672 571.282 15.4 570.274 14.488C569.314 13.528 567.898 13.048 566.026 13.048H559.042V23.632Z"
                  fill="none"
                />
              </motion.svg>
            </div>
 */
