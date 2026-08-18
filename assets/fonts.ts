import localFont from "next/font/local";

export const bespokeStencil = localFont({
  src: "../public/fonts/BespokeStencil-Bold.woff2",
  display: "swap",
//   weight:"600"
});

export const supreme = localFont({
  src: [
    {
      path: "../public/fonts/Supreme-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Supreme-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Supreme-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-supreme",
  display: "swap",
});
export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "300",
      style: "regular",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-supreme",
  display: "swap",
});
export const bevellier = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "light",
    }, 
     {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "medium",
    },

    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "extra-bold",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});