import { Portfolio } from "../type";
import { Brush, Code, Dashboard, PhotoCamera } from '@mui/icons-material';
// import { SiCssdesignawards } from "react-icons/si";
// import { MdDashboard } from "react-icons/md";
// import { TbBrandAdobeXd } from "react-icons/tb";

const myProjects: Portfolio[] = [
  {
    id: "city-kicks",
    imgUrl: "/images/city-kicks.png",
    title: "city kicks",
    categories: ["e-commerce", "shoes", "online store"],
    description: "Shoe Freaks is an e-commerce web app that allows users to explore, filter, and buy footwear with a seamless shopping experience.",
    pageUrl: "https://shoe-freaks.vercel.app",
    features: [
      { text: "full-stack website", icon: <Code/> },
      { text: "website design", icon: <Brush /> },
      { text: "admin dashboard", icon: <Dashboard /> },
      { text: "product design", icon: <PhotoCamera /> },
    ]
  },
  {
    id: "igugu-projects",
    imgUrl: "/images/igugu.png",
    title: "igugu projects",
    categories: ["construction", "gardening", "business website"],
    description:
      "igugu empire is a company that offers varieties of construction and garderning services.",
    pageUrl: "https://igugu-empire-projects.netlify.app",
    features: [
      { text: "front-end", icon: <Code /> },
      { text: "website design", icon: <Code /> },
      { text: "content strategy", icon: <Code /> },
    ]
  },

  {
    id: "jhb-shoefreaks",
    imgUrl: "/images/shoe-freaks1.png",
    title: "Shoe Freaks South-Africa",
    categories: ["e-commerce", "fashion", "retail"],
    description:
      "shoe freaks is an online store that sells shoes to its customers",
    pageUrl: "https://jhb-shoefreaks.vercel.app/",
     features: [
      { text: "full-stack website", icon: <Code /> },
       { text: "product design", icon: <Code /> },
      { text: "database setup", icon: <Code /> },
      { text: "admin-dashboard", icon: <Code /> },
    ]
  },
  {
    id: "project-5",
    imgUrl: "/images/moti.png",
    title: "moti",
    categories: ["marketplace", "multi-vendor", "shopping"],
    description:
      "an online mall type with multiple registered shops selling their stuff",
    pageUrl: "https://moti.netlify.app",
     features: [
      { text: "full-stack website", icon: <Code /> },
       { text: "product design", icon: <Code /> },
      { text: "database setup", icon: <Code /> },
      { text: "cloud setup", icon: <Code /> },
    ]
    
  },
];

export default myProjects;
