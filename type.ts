import { ReactNode } from "react";
export type Feature = {
  text: string;
  sub?: string;
  icon: ReactNode;

};
export interface Portfolio {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  pageUrl: string;
  technologies?: string;
  categories?: string[];
  features?: Feature[];
  
}
export interface Services {
  key: string
  image: string
  name: string
  description: string
  heading: string
  features: Feature[]
  importance: string
  color: string
  pageUrl: string
  detailIntro: string
  deliverables: string[]
  outcomes: string[]
}

export interface Testimonials {
  name: string,
  quote: string,
  initials: string,
  role: string,
  color: string,
}