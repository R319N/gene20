import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { size, fontWeightBold, fontWeightRegular } = typography;
const { primary } = colors;

const tab = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flex: "1 1 auto",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "unset !important",
      minHeight: "unset !important",
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textTransform: "capitalize",
      lineHeight: "inherit",
      padding: pxToRem(2),
      margin: pxToRem(1),
      width: pxToRem(90),
      opacity: "1 !important",
      borderRadius:"50px",
      transition: "all 0.5s ease",

      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: pxToRem(10),
      },

      "& svg": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },
      "&:hover": {
        color: `${primary.main} !important`,
        fontWeight: fontWeightBold,
      },
      "&:focus": {
        color: `${primary.main} !important`,
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};

export default tab;
