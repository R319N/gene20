export interface NavigationItem {
  name: string;
  url: string;
  href: string;
  isTab?: boolean;
  isFooter?: boolean;
  isNavigation?: boolean;
  isExplore?: boolean;
  icon?: React.ReactNode; // Correct type for JSX icons
}

const navigation: NavigationItem[] = [
  {
    name: "home",
    url: "/#home",
    href: "/",
    isTab: true,
    isFooter: true,
    // isExplore: true,
    isNavigation: true,
  },
  {
    name: "about",
    url: "/#about",
    href: "/",
    isTab: true,
    isNavigation: true,
    isExplore: true,
  },
  {
    name: "services",
    url: "/services",
    href: "/services",
    isTab: true,
    isExplore: true,
    isNavigation: true,
  },

  {
    name: "portfolio",
    url: "/#portfolio",
    href: "/",
    isTab: true,
    // isExplore: true,
    isNavigation: true,
  },
  {
    name: "testimonials",
    url: "/#testimonials",
    href: "/",
  },

  {
    name: "contact",
    url: "/#contact",
    href: "/",
    isTab: false,
    isNavigation: true,
  },
  {
    name: "gallery",
    url: "/#gallery",
    href: "/gallery",
    isTab: false,
    isNavigation: true,
    isExplore: true,
  },
  {
    name: "prizing",
    url: "/prizing",
    href: "/prizing",
    isExplore: true,
    isNavigation: true,
    isTab: true
  },
  {
    name: "careers",
    url: "/careers",
    href: "/",
    isExplore: true,
  },
  {
    name: "help",
    url: "/help",
    href: "/",
    isExplore: true,
  },
];
export default navigation;
