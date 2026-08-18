import { Services } from "@/type";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import DevicesIcon from "@mui/icons-material/Devices";
import ExploreIcon from "@mui/icons-material/Explore";
import HandymanIcon from "@mui/icons-material/Handyman";
import PaletteIcon from "@mui/icons-material/Palette";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SpeedIcon from "@mui/icons-material/Speed";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import EmailIcon from "@mui/icons-material/Email";

const ourServices: Services[] = [
  {
    key: "1",
    name: "Website Development",
    heading: "Build Powerful, Scalable Websites",
    image: "/images/web-dev.png",
    pageUrl: "/services#website-development",
    description:
      "We develop high-performance websites that are fast, secure, and built to grow with your business. From concept to launch, we turn your ideas into fully functional digital platforms that work seamlessly across all devices.",
    detailIntro:
      "This service is built for brands that need more than a brochure site. We plan, design, and build web experiences that are reliable under real traffic, clear on mobile, and flexible enough to grow with new content, offers, and product directions.",
    features: [
      {
        text: "Performance",
        sub: "Fast loading",
        icon: <DashboardCustomizeIcon className="icon-small" />
      },
      {
        text: "Responsive",
        sub: "All devices",
        icon: <DevicesIcon className="icon-small" />
      },
      {
        text: "Speed",
        sub: "Optimized code",
        icon: <SpeedIcon className="icon-small" />
      },
      {
        text: "Support",
        sub: "Ongoing care",
        icon: <HandymanIcon className="icon-small" />
      },
    ],
    deliverables: [
      "Custom website builds shaped around your brand, content, and goals",
      "Responsive layouts for desktop, tablet, and mobile screens",
      "Performance improvements, SEO-ready structure, and clean deployment",
      "Support for feature additions, iterations, and post-launch fixes",
    ],
    outcomes: [
      "A site that feels credible and polished from the first visit",
      "Better performance across devices and connection speeds",
      "A codebase that is easier to maintain and extend over time",
    ],
    color: "#7E78D2",
    importance:
      "A well-developed website ensures reliability, better user experience, and long-term growth.",
  },
  {
    key: "2",
    name: "UI/UX & Web Design",
    heading: "Design Clear, Conversion-Friendly Experiences",
    image: "/images/web-dev.png",
    pageUrl: "/services#ui-ux-design",
    description:
      "We design intuitive and seamless user experiences that make interacting with your website effortless. Our focus is on usability, accessibility, and creating meaningful digital journeys.",
    detailIntro:
      "UI/UX work here is about making digital products feel obvious in the best way. We shape structure, hierarchy, and interaction patterns so visitors know where to look, what to do next, and why the experience feels trustworthy.",
    features: [
      {
        text: "Research",
        sub: "User insights",
        icon: <PersonSearchIcon className="icon-small" />
      },
      {
        text: "Scalability",
        sub: "Future ready",
        icon: <ExploreIcon className="icon-small" />
      },
      {
        text: "Accessibility",
        sub: "Inclusive design",
        icon: <AccessibilityNewIcon className="icon-small" />
      },
      {
        text: "SEO",
        sub: "Search friendly",
        icon: <AltRouteIcon className="icon-small" />
      },
    ],
    deliverables: [
      "Wireframes and interface concepts tailored to your audience",
      "Page structure and navigation systems that reduce friction",
      "Consistent visual language for buttons, cards, sections, and forms",
      "Accessibility-minded design decisions that improve clarity and flow",
    ],
    outcomes: [
      "Clearer journeys from landing to enquiry or conversion",
      "Interfaces that feel lighter, more modern, and easier to scan",
      "Stronger trust because the product looks considered and coherent",
    ],
    color: "#F26430",
    importance:
      "Great UX keeps users engaged, reduces frustration, and increases conversions.",
  },
  {
    key: "3",
    name: "Branding & Graphic Design",
    heading: "Content That Connects",
    image: "/images/ui-ux-webDesign.png",
    pageUrl: "/services#content-creation",
    description:
      "We create engaging and relevant content that tells your story and speaks directly to your audience. From visuals to written content, we help your brand stay active and impactful.",
    detailIntro:
      "Content creation is where your brand voice turns into something visible and useful. The focus is not just posting more, but building content that looks aligned, sounds intentional, and helps people understand what you offer.",
    features: [
      {
        text: "Strategy",
        sub: "Brand focused",
        icon: <CampaignIcon className="icon-small" />
      },
      {
        text: "Visuals",
        sub: "Creative assets",
        icon: <PaletteIcon className="icon-small" />
      },
      {
        text: "Consistency",
        sub: "Unified presence",
        icon: <CalendarMonthIcon className="icon-small" />
      },
      {
        text: "Storytelling",
        sub: "Audience connection",
        icon: <AutoStoriesIcon className="icon-small" />
      },
    ],
    deliverables: [
      "Visual and written content shaped around your brand tone",
      "Creative assets for campaigns, posts, launches, and updates",
      "Content direction that supports consistency across channels",
      "Story-led messaging that helps your audience connect faster",
    ],
    outcomes: [
      "A stronger presence that feels active instead of patchy",
      "Content that supports trust, recall, and brand recognition",
      "Messaging that helps people understand your value quickly",
    ],
    color: "#4392F1",
    importance:
      "Strong content builds relationships, increases visibility, and drives engagement.",
  },
  {
    key: "4",
    name: "Social Media & Digital Marketing",
    heading: "Reach Your Audience Effectively",
    image: "/images/digital-marketing.png",
    pageUrl: "/services#digital-marketing",
    description:
      "We develop and execute data-driven digital marketing strategies to increase your online visibility, attract qualified leads, and drive conversions.",
    detailIntro:
      "Digital marketing is about connecting with your audience where they are most active. It's about using data to inform decisions and create campaigns that resonate with your target market.",
    features: [
      {
        text: "SEO",
        sub: "Organic growth",
        icon: <SearchIcon className="icon-small" />
      },
      {
        text: "PPC",
        sub: "Targeted ads",
        icon: <MonetizationOnIcon className="icon-small" />
      },
      {
        text: "Social Media",
        sub: "Brand engagement",
        icon: <SocialDistanceIcon className="icon-small" />
      },
      {
        text: "Email",
        sub: "Lead nurturing",
        icon: <EmailIcon className="icon-small" />
      },
    ],
    deliverables: [
      "SEO audit and optimization plan",
      "PPC campaign setup and management",
      "Social media strategy and content calendar",
      "Email marketing automation workflows",
    ],
    outcomes: [
      "Increased organic traffic and search rankings",
      "Higher conversion rates from paid advertising",
      "Stronger social media presence and engagement",
      "Improved email open and click-through rates",
    ],
    color: "#00fbff",
    importance:
      "Effective digital marketing amplifies your reach, drives targeted traffic, and maximizes return on investment.",
  }
];

export default ourServices;
