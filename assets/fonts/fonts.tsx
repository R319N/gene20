// app/fonts.ts
import localFont from "next/font/local";

export const mandalore = localFont({
  src: "../../public/font-packages/Mandalore3D.otf",
  variable: "--font-mandalore",
  display: "swap",
});
export const orbitron = localFont({
  // src: "../../public/font-packages/Orbitron-Regular.ttf",
  // variable: "--font-orbitron",
  // display: "swap",
  src: [
    {
      path: "../../public/font-packages/Orbitron-Regular.ttf",
      weight: "400",
      style: "normal",
    },
     {
      path: "../../public/font-packages/Orbitron-ExtraBold.ttf",
      weight: "400",
      style: "bold",
    },
  ]
});