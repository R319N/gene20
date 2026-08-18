import colors from "../base/colors";
import rgba from "../functions/rgba";
import pxToRem from "../functions/pxToRem";

const { transparent, white, dark, text } = colors;

const divider = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      backgroundImage:`linear-gradient(to right, #0a046011 0%, #2c59d6 30%, #1a0bf808 100%),
       linear-gradient(to right, #7E78D211 0%, #2e37b2 50%, #2d20db08 100%)`,
      height: pxToRem(1.5),
      margin: `${pxToRem(4)} 0`,
      borderBottom: "none",
      opacity: 0.25,
    },

    vertical: {
      // backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to bottom, ${rgba(
        dark.main,
        0
      )}, ${rgba(text.primary, 0.4)}, ${rgba(text.primary, 0)}) !important`,
      width: pxToRem(2),
      height: pxToRem(40),// transform to dynamic @100%
      margin: `0 ${pxToRem(16)}`,
      borderRight: "none",
      opacity: 0.25,
    },

    light: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${rgba(white.main, 0)}, ${white.main
        }, ${rgba(white.main, 0)}) !important`,

      "&.MuiDivider-vertical": {
        backgroundImage: `linear-gradient(to bottom, ${rgba(white.main, 0)}, ${white.main
          }, ${rgba(white.main, 0)}) !important`,
      },
    },
  },
};

export default divider;
