import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RotatingCard from "../ui/cards/RotatingCard";
import socialMediaRoutes from "@/constants/socialMediaRoutes";

export default function SocialContacts() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      gap={1}
    >
      <Typography
        variant="body2"
        sx={{
          textTransform: "capitalize",
          color: '#5C6584',
        }}
      >
        follow us on social media
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap={1}
      >
        {socialMediaRoutes.map((social, index) => (
          <Box component="a" href={social.url} key={index}>
            <RotatingCard>{social.icon}</RotatingCard>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
