import React from "react";
import Box from "@mui/material/Box";
import NavigationDrawer from "./NavigationDrawer";
import navigation from "@/constants/navigation_Links";
import SocialContacts from "../contact/socialContact";

interface NavigationMenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  handleDrawerToggle: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  handleDrawerToggle,
}) => {
  const tabItems = navigation.filter((item) => item.isTab);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh", // Adjust height to match your layout needs
        position: "relative",
        p: 2,
      }}
    >
      {/* Menu Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        {tabItems.map((item, index) => (
          <NavigationDrawer
            item={item}
            key={index}
            handleDrawerToggle={handleDrawerToggle}
          />
        ))}
      </Box>

      {/* Social Contacts Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "auto", // Push to the bottom
        }}
      >
        <SocialContacts />
      </Box>
    </Box>
  );
};

export default NavigationMenu;
