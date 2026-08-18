"use client";

import { Box, Stack, Typography } from "@mui/material";
import { styles } from "@/styles/styles";

interface SlideIndicatorProps {
  slides: unknown[];
  active: number;
}

export default function SlideIndicator({
  slides,
  active,
}: SlideIndicatorProps) {
  return (
    <Box
      sx={{
        width: { md: "6vw", xxl: "4vw" },
        height: "100vh",
        position: "absolute",
        inset: 0,
        px: "2rem",
        top: 0,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRight: "1px solid rgba(153, 170, 255, 0.1)",
        zIndex: 6,
      }}
    >
      {/* Slide dots */}
      <Stack gap={2}>
        {slides.map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "relative",
              height: "10px",
              width: "10px",
              borderRadius: "50%",
              ...styles.glow1,
              backgroundColor: (theme) =>
                active === i
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
              transition:
                "width 0.25s ease, background-color 0.25s ease",
            }}
          />
        ))}
      </Stack>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          maxWidth: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bottom: 54,
        }}
        gap={4}
      >
        <Typography
          variant="caption"
          sx={{
            letterSpacing: 2,
            textTransform: "uppercase",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          scroll
        </Typography>

        <Box
          sx={{
            height: "3rem",
            width: "1px",
            ...styles.glow1,
          }}
        />
      </Box>
    </Box>
  );
}