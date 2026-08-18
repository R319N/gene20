"use client"
import contained from "./contained";
import outlined from "./outlined";
import root from "./root";
import buttonText from "./text";

const button = {
  defaultProps: {
    disableRipple: false,
  },
  variants: [
    {
      props: { variant: "iconLink" },
      style: ({ theme }) => ({
        position: "relative",
        overflow: "visible",
        minWidth: "fit-content",
        padding: `${theme.spacing(2)} 5`,
        gap: theme.spacing(1.2),
        color: theme.palette.text.primary,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        backgroundColor: "transparent",
        "& .MuiButton-startIcon": {
          marginRight: 0,
          marginLeft: 0,
        },
        "& .icon-shell": {
          width: 28,
          height: 28,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          border: `1px solid ${theme.palette.primary.main}33`,
          background: "#ffffff1a",
          backdropFilter: "blur(10px)",
          overflow: "visible",
          transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
        },
        "& .icon-core": {
          width: "100%",
          height: "100%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.35s ease",
        },
        "& .icon-arrow": {
          fontSize: "14px",
          transition: "transform 0.35s ease",
        },
        "&:hover": {
          backgroundColor: "transparent",
          textShadow: `0 0 8px ${theme.palette.primary.main}`,
          color: theme.palette.primary.focus,
        },
        "&:hover .icon-shell": {
          transform: "translateX(3px) scale(1.04)",
          borderColor: theme.palette.primary.main,
          boxShadow: `0 0 18px ${theme.palette.primary.main}55`,
        },
        "&:hover .icon-core": {
          transform: "translateX(4px)",
        },
        "&:hover .icon-arrow": {
          transform: "translateX(3px) scale(1.08)",
        },
      }),
    },
  ],
  styleOverrides: {
    root: { ...root },
    contained: { ...contained.base },
    containedSizeSmall: { ...contained.small },
    containedSizeLarge: { ...contained.large },
    containedPrimary: { ...contained.primary },
    containedSecondary: { ...contained.secondary },
    outlined: { ...outlined.base },
    outlinedSizeSmall: { ...outlined.small },
    outlinedSizeLarge: { ...outlined.large },
    outlinedPrimary: { ...outlined.primary },
    outlinedSecondary: { ...outlined.secondary },
    text: { ...buttonText.base },
    textSizeSmall: { ...buttonText.small },
    textSizeLarge: { ...buttonText.large },
    textPrimary: { ...buttonText.primary },
    textSecondary: { ...buttonText.secondary },
  },
};

export default button;
