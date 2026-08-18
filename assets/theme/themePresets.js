import { createTheme } from "@mui/material";
import uLwandleTheme from "./uLwandleTheme";

const themePresets = [
  {
    id: "classic",
    label: "Classic",
    theme: createTheme(uLwandleTheme, {
      palette: {
        mode: "dark",
        background: {
          default: "#000414",
          paper: "#000414",
        },
        text: {
          primary: "#ADC6FF",
          secondary: "#8F9EB7",
        },
        primary: {
          main: "#4392F1",
          light: "#70A0FF",
          dark: "#07244A",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#5047C2",
          light: "#8A85D6",
          dark: "#322D8B",
          contrastText: "#ffffff",
        },
        success: {
          main: "#4CAF50",
        },
        warning: {
          main: "#fb8c00",
        },
        error: {
          main: "#F44335",
        },
        info: {
          main: "#1A73E8",
        },
      },
    }),
  },
  {
    id: "ocean",
    label: "Ocean",
    theme: createTheme(uLwandleTheme, {
      palette: {
        mode: "light",
        background: {
          default: "#031B34",
          paper: "#0B2E4B",
        },
        text: {
          primary: "#E3F4FF",
          secondary: "#A0CFE8",
        },
        primary: {
          main: "#39A0ED",
          light: "#6CC4FF",
          dark: "#0A4C70",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#1BC7D4",
          light: "#6FE2F0",
          dark: "#127177",
          contrastText: "#031B34",
        },
        success: {
          main: "#6CC1A9",
        },
        warning: {
          main: "#F6A560",
        },
        error: {
          main: "#FF6B6B",
        },
        info: {
          main: "#5CC6FF",
        },
      },
    }),
  },
 
];

export default themePresets;
