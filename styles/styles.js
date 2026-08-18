import pxToRem from "@/assets/theme/functions/pxToRem"
import rgba from "@/assets/theme/functions/rgba";
export const styles = {
  glow1: {
    boxShadow: (theme) => `0 0 8px ${theme.palette.primary.main}`,
    background: (theme) => theme.palette.primary.main
  },
  transparentAppBar: {
    backgroundColor: "transparent",
    backdropFilter: "blur(10px)",
  },
  outlinedText: {
    color: "#dec5e3",
    // filter: "drop-shadow(1px 1px 0 aquamarine) drop-shadow(-1px -1px 0 aqua)",
  },
  scrolledAppBar: {
    borderRadius: (theme) => theme.shape.borderRadius,
    transition: "background-color padding border-radius 3s ease-in-out", // Smooth transition
    width: "100%",
    display: "flex",
  },

  styledHeader: {
    fontSize: { xs: pxToRem(24), md: pxToRem(52) },
    textAlign: 'center',
    lineHeight: '120%',
    textTransform: 'capitalize',
    background: 'linear-gradient(90deg, #00CCFF, #7E78D2)',
  },
  defaultBorder: {
    border: "1px solid #FAF0E633",
  },
  borderRadius: {
    borderRadius: "10px",
    overflow: "hidden"
  },
  iconWrap: {
    borderRadius: "8px",
    // height: "32px", 
    // width: "32px",
    border: "1px solid #7E78D255",
  },
  iconXS: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: { xs: "34px", lg: "40px" },
    width: { xs: "34px", lg: "40px" },
    backdropFilter: "blur(20px)",
    border: (theme) => `1px solid ${rgba(theme.palette.text.primary, 0.1)}`,
    borderRadius: "8px",
    background: (theme) => `${rgba(theme.palette.black.main, 0.8)}`,
    "&:hover": {
      background: (theme) => (theme.palette.secondary.focus),
      boxShadow: (theme) => `0 0 10px ${rgba(theme.palette.primary.dark, 0.8)}`,
      border: (theme) => `1px solid ${rgba(theme.palette.text.primary, 0.1)}`,
    }
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    textTransform: "uppercase",
    letterSpacing: "0.125em",
    color: (theme) => theme.palette.text.secondary,
    "&:hover": {
      color: (theme) => theme.palette.primary.main,
    },
  },
  container: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    paddingTop: "14vh",
  },
  section_container_row: {
    width: "100%",
    position: "relative",
    minHeight: "100dvh",
    pt: "10vh",
  },
  section_container: {
    position: "relative",
    minHeight: "100dvh",
    width: "100%",
    pt: "18vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100%"
  },
  section_content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100%"
  },

  absolute_center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)'
  },

  cardStyle: {
    borderRadius: "8px", // Add border radius for rounded corners
    backdropFilter: "blur(8px)",
    background: (theme) => theme.palette.background.card, // Adjust transparency as needed
  },
  glassOutlined: {
    borderRadius: "8px", // Add border radius for rounded corners
    backdropFilter: "blur(8px)",
    background: "#cad5d32c", // Adjust transparency as needed
    border: "1px solid #faf0e606",
    overflow: "hidden"
  },
  glassOutlinedDark: {
    borderRadius: pxToRem(10), // Add border radius for rounded corners
    backdropFilter: "blur(20px)",
    background: "#0e11169a", // Adjust transparency as needed
    border: "1px solid #faf0e639",
    overflow: "hidden"
  },
  glassOutlinedTheme: {
    borderRadius: pxToRem(30), // Add border radius for rounded corners
    backdropFilter: "blur(10px)",
    // background: ${rgba(({ theme }) => theme.palette.secondary.main}, 0.5)`,
    background: "rgba(94, 94, 253, 0.05)",
    border: "1px solid rgba(126, 120, 210, 0.2)",
    overflow: "hidden"
  },
  glassOutlinedDarkTheme: {
    background: (theme) => `${rgba(theme.palette.primary.dark, 0.8)}`
  },
  boxShadowTheme: {
    borderRadius: pxToRem(20),
    overflow: "hidden",
    // boxShadow: (theme) => `1px 1px 10px ${theme.palette.secondary.main}`,
  },
  center_flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  between_flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  column_flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gradient: {
    backgroundImage: `linear-gradient(270deg,
        hsl(295deg 76% 51%) 0%,
        hsl(284deg 70% 73%) 26%,
        hsl(257deg 70% 86%) 39%,
        hsl(202deg 92% 90%) 50%,
        hsl(215deg 77% 81%) 61%,
        hsl(221deg 73% 70%) 74%,
        hsl(220deg 76% 51%) 100%);
    filter: blur(125px)`,
    zIndex: 0,
    position: "absolute",
  },

  landingPage: {
    position: "relative",
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover" /* Adjust as needed */,
    backgroundPosition: "center" /* Adjust as needed */,
    height: "100vh",
  },

  overlayStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(45deg, #449DD180 0%, #9A48D080 100%)`,
    zIndex: 1,
  },
  contactBarWrap: {
    backdropFilter: "blur(10px)",
    background: (theme) => theme.palette.background.card,
    borderRadius: (theme) => theme.shape.borderRadius,
    px: "1rem",
    boxShadow: `0 0 10px ${({ theme }) => theme.palette.secondary.main}`,
  },

  landingPageContent: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "2",
  },
  Content: {
    position: "relative",
    zIndex: 2,
    color: "white",
    textAlign: "center",
    top: "50%",
    transform: "translateY(-50%)",
  },
  contactPage: {
    backgroundImage: `url('/contact_us.jpg')`,
    backgroundSize: "cover" /* Adjust as needed */,
    backgroundPosition: "center" /* Adjust as needed */,
    height: "100%",
  },
  fontSize: {
    xs: (theme) => theme.typography.pxToRem(12), // Example for small screens
    md: (theme) => theme.typography.pxToRem(33), // Example for medium screens
  },
  scale: {
    "&:hover": {
      transform: "scale(2)",
    },
  },
  slidingText: {
    fontSize: {
      xs: pxToRem(48),
      sm: pxToRem(64),
      md: pxToRem(68),
      lg: pxToRem(76),
    },
    whiteSpace: "nowrap",
    textTransform: "capitalize",
  },
  glowingOutline: {
    boxShadow: (theme) => `0 0 10px ${theme.palette.secondary.main}`,
    border: (theme) => `1px solid ${theme.palette.secondary.main} `,
    borderRadius: "8px",
    opacity: "0.8",
  },
  iconHover: {
    "&:hover": {
      // backgroundColor: (theme) => theme.palette.primary.dark,
      boxShadow: (theme) => `0 0 10px ${theme.palette.secondary.main}`,
      border: (theme) => `1px solid ${theme.palette.secondary.main} `,
      color: (theme) => theme.palette.text.primary,
      borderRadius: "8px",
      opacity: "0.8",

    },
  },

  tablehead: {
    backgroundColor: "#333",
  },
  tablerow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#333",
    },
  },
  glowingText: {
    "&:hover": {
      textTransform: "capitalize",
      display: "flex",
      fontweight: "bold",
      color: "textPrimary",
      textShadow:
        "0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f, 0 0 60px #00f, 0 0 70px #00f",
      animation: "$glow 1s ease-in-out infinite alternate",

      color: "black",
    },
  },
  textHighlight: {
    "&:hover": {
      color: "yellow"
    }
  },
  scaleHover: {
    "&:hover": {
      transform: "scale(1.2)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
  },
  glow: {
    "&:hover": {
      position: "absolute",
      background:
        "radial-gradient(circle, rgba(255,255,255,0) 50%, rgba(255,255,255,0.3) 100%)",
      zIndex: 0,
    },
  },
  textHover: {
    "&:hover": {
      color: (theme) => theme.palette.primary.main,
    },
  },
  alignRight: {
    width: "100%",
    display: "flex",
    justifyContent: "right",
  },
  flexEnd: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  cardDefault: {
    backgroundColor: (theme) => theme.palette.background.card,
    width: pxToRem(300),
    margin: pxToRem(16),
    padding: pxToRem(16),
    borderRadius: pxToRem(12),
    boxShadow: (theme) => `0 4px 6px ${theme.palette.primary.main}`,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: (theme) => `0 10px 20px ${theme.palette.primary.main}`,
    },
  },
  stackingCard: {
    backgroundColor: (theme) => theme.palette.background.card,
    borderRadius: pxToRem(32),
    color: (theme) => theme.palette.black.main,
    display: "flex",
    flexDirection: "column",
    gap: pxToRem(16),
    margin: "25vh auto",
    maxWidth: pxToRem(1020),
    padding: `${pxToRem(32)} ${pxToRem(32)} 0`,
  },
  stackingContent: {
    fontSize: pxToRem(18),
    margin: `${pxToRem(20)} 0`,
    paddingBottom: pxToRem(20),
  }

};
