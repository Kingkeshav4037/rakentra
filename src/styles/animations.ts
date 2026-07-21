export const animations = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.7,
  },

  easing: {
    default: [0.25, 0.8, 0.25, 1],
    smooth: [0.22, 1, 0.36, 1],
  },

  fadeUp: {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  },

  fadeIn: {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  },

  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
};

export default animations;