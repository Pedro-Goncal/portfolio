//===================
//CONTAINER VARIANTS
//===================
const containerVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, when: 'beforeChildren' },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

//=================
// IMAGE VARIANTS
//=================
const imageVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 2.5 },
  },
};

//=======================
//COLOR BLOCK VARIANTS
//=======================
const colorBlockVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 3 },
  },
};

//=================
//PATH VARIANTS
//================
//TITLE
const svgVariantsTitle = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 4 },
  },
};

// const titlePathVariants = {
//   initial: {
//     opacity: 1,
//     pathLength: 0,
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     transition: { duration: 15, ease: 'easeInOut' },
//   },
// };

//SUB TITLE
const svgVariantsSubTitle = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 3, delay: 2.5 },
  },
};

// const SubTitlePathVariants = {
//   initial: {
//     opacity: 1,
//     pathLength: 0,
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     transition: { duration: 15, ease: 'easeInOut', delay: 2.5 },
//   },
// };

//ARROWS NEED
const svgVariantsArrow = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 5, delay: 7.5 },
  },
};

const arrowPathVariants = {
  initial: {
    opacity: 1,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 15, ease: 'easeInOut' },
  },
};

export {
  containerVariants,
  imageVariants,
  colorBlockVariants,
  svgVariantsTitle,
  svgVariantsSubTitle,
  svgVariantsArrow,
  arrowPathVariants,
};
