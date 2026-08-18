"use client"
import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { white, secondary, primary, text } = colors;
const { size } = typography;

const contained = {
  base: {
    color: text.primary,
    background: `linear-gradient(to bottom left, ${secondary.main} 50%, ${primary.main} 100%)`,
    minHeight: pxToRem(40),
    boxShadow: `0 2px 5px 0 ${primary.main}33, 0 5px 10px 0 ${primary.main}1A`,
    transition: "all 1s ease",

    "&:hover": {
      backgroundColor: primary.light,
      boxShadow: `0 2px 5px 0 ${primary.main}55, 0 5px 10px 0 ${primary.main}75`,
      color: white.main,
      textShadow: `0 0 8px ${primary.main}`,

    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: secondary.main,
    boxShadow: ` 0 0 10px ${({ theme }) => theme.palette.secondary.main}`,
    "&:hover": {
      backgroundColor: secondary.light,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    "&:hover": {
      backgroundColor: secondary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
    },
  },
};

export default contained;
