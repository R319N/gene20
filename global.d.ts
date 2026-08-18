import type { Palette, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    socialMediaColors: {
      facebook: { main: string; dark: string };
      twitter: { main: string; dark: string };
      instagram: { main: string; dark: string };
      linkedin: { main: string; dark: string };
      pinterest: { main: string; dark: string };
      youtube: { main: string; dark: string };
      vimeo: { main: string; dark: string };
      slack: { main: string; dark: string };
      dribbble: { main: string; dark: string };
      github: { main: string; dark: string };
      reddit: { main: string; dark: string };
      tumblr: { main: string; dark: string };
    };
  }

  interface PaletteOptions {
    socialMediaColors?: Partial<{
      facebook: { main: string; dark: string };
      twitter: { main: string; dark: string };
      instagram: { main: string; dark: string };
      linkedin: { main: string; dark: string };
      pinterest: { main: string; dark: string };
      youtube: { main: string; dark: string };
      vimeo: { main: string; dark: string };
      slack: { main: string; dark: string };
      dribbble: { main: string; dark: string };
      github: { main: string; dark: string };
      reddit: { main: string; dark: string };
      tumblr: { main: string; dark: string };
    }>;
  }
}

declare module "*.glsl" {
  const source: string;
  export default source;
}

declare module "*.vs" {
  const source: string;
  export default source;
}

declare module "*.fs" {
  const source: string;
  export default source;
}

declare module "*.vert" {
  const source: string;
  export default source;
}

declare module "*.frag" {
  const source: string;
  export default source;
}

export {};

