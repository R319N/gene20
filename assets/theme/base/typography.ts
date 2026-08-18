import { orbitron } from "@/assets/fonts/fonts";
import pxToRem from "../functions/pxToRem";
import colors from "./colors";
import { Share_Tech_Mono, Roboto } from "next/font/google";

const { text } = colors;

const roboto = Roboto({
  weight: ["400",],
  subsets: ["latin"],
  display: "swap",
});
const shareTech = Share_Tech_Mono({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const baseProperties = {
  fontFamily: `${roboto.style.fontFamily}, sans-serif`,
  fontWeightLighter: 300,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontWeightExtraBold: 900,
  fontSizeXXS: pxToRem(10),
  fontSizeXS: pxToRem(12),
  fontSizeSM: pxToRem(14),
  fontSizeMD: pxToRem(16),
  fontSizeLG: pxToRem(18),
  fontSizeXL: pxToRem(20),
  fontSize2XL: pxToRem(24),
  fontSize3XL: pxToRem(30),
  fontSize4XL: pxToRem(36),
  fontSize5XL: pxToRem(40),
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: text.primary,
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  fontWeight: baseProperties.fontWeightBold,
  lineHeight: 1.2,
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLighter: baseProperties.fontWeightLighter,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,
  color: text.primary,

  h1: {
    fontSize: baseProperties.fontSize3XL,
    lineHeight: 1.5,
    ...baseHeadingProperties,
    fontWeight: baseProperties.fontWeightBold,
    letterSpacing: "3px",
    fontFamily: orbitron.style.fontFamily,
  },

  h2: {
    fontSize: baseProperties.fontSize4XL,
    lineHeight: 1.25,
    ...baseHeadingProperties,
    fontWeight: baseProperties.fontWeightBold,
  },

  h3: {
    fontSize: baseProperties.fontSize3XL,
    lineHeight: 1.3,
    ...baseHeadingProperties,
    fontWeight: baseProperties.fontWeightBold,
  },

  h4: {
    fontSize: baseProperties.fontSize2XL,
    lineHeight: 1.35,
    ...baseHeadingProperties,
    fontWeight: baseProperties.fontWeightMedium,
  },

  h5: {
    fontSize: baseProperties.fontSizeXL,
    lineHeight: 1.4,
    ...baseHeadingProperties,
    fontWeight: baseProperties.fontWeightMedium,
  },

  h6: {
    fontSize: baseProperties.fontSizeLG,
    lineHeight: 1.45,
    ...baseHeadingProperties,
    fontWeight: baseProperties.fontWeightMedium,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.5,
    color: text.primary,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.45,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.8,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.45,
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.5,
    textTransform: "none",
  },

  caption: {
    fontFamily: shareTech.style.fontFamily,
    fontSize: baseProperties.fontSizeXXS,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.35,
    color: text.primary,
  },

  overline: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXXS,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.5,
    textTransform: "uppercase",
  },

  d1: {
    fontSize: pxToRem(80),
    ...baseDisplayProperties,
  },

  d2: {
    fontSize: pxToRem(72),
    ...baseDisplayProperties,
  },

  d3: {
    fontSize: pxToRem(64),
    ...baseDisplayProperties,
  },

  d4: {
    fontSize: pxToRem(56),
    ...baseDisplayProperties,
  },

  d5: {
    fontSize: pxToRem(48),
    ...baseDisplayProperties,
  },

  d6: {
    fontSize: pxToRem(40),
    ...baseDisplayProperties,
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
    "2xl": baseProperties.fontSize2XL,
    "3xl": baseProperties.fontSize3XL,
    "4xl": baseProperties.fontSize4XL,
    "5xl": baseProperties.fontSize5XL,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

export default typography;
