"use client";

import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface GlowButtonProps {
  title?: string;
  subtitle?: string;
  onClick?: () => void;
}

export default function GlowButton({
  title = "START A PROJECT",
  subtitle = "Tell me about your project and let's bring your ideas to life.",
  onClick,
}: GlowButtonProps) {
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "fit-content",
        minHeight: "100%",

        display: "flex",
        alignItems: "center",
        gap: 4,

        px: 4,
        py: 2,

        color: "white",
        textAlign: "left",

        background: "rgba(255,255,255,0.015)",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: "14px",
        boxShadow: "inset 0 0 20px rgba(139,92,246,0.04)",

        cursor: "pointer",
        overflow: "hidden",

        transition:
          "border-color 500ms ease, transform 500ms cubic-bezier(.16,1,.3,1)",

        // Ambient glow
        "&::after": {
          content: '""',
          position: "absolute",
          width: "180px",
          height: "180px",
          right: "-80px",
          bottom: "-100px",

          background:
            "radial-gradient(circle, rgba(118, 59, 255, 0.28), transparent 70%)",

          filter: "blur(25px)",
          opacity: 0.16,
          transition: "opacity 500ms ease",
          pointerEvents: "none",
        },

        "&:hover": {
          transform: "translateY(-3px)",
          borderColor: "rgba(139,92,246,0.55)",

          "&::after": {
            opacity: 1,
          },

          "& .glow-icon": {
            transform: "translate(3px, -3px)",
            background: "rgba(139,92,246,0.12)",
            borderColor: "rgba(139,92,246,0.7)",
            boxShadow:
              "0 0 25px rgba(139,92,246,0.35), inset 0 0 20px rgba(139,92,246,0.08)",
          },

          "& .glow-icon svg": {
            transform: "translate(3px, -3px)",
          },

          "& .glow-line": {
            transform: "scaleX(1)",
          },
        },
      }}
    >
      {/* Arrow circle */}
      <Box
        className="glow-icon"
        sx={{
          flexShrink: 0,

          width: 54,
          height: 54,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "50%",

          background: "rgba(255,255,255,0.02)",

          transition:
            "all 500ms cubic-bezier(.16,1,.3,1)",

          "& svg": {
            fontSize: 28,
            transition:
              "transform 500ms cubic-bezier(.16,1,.3,1)",
          },
        }}
      >
        <ArrowOutwardIcon />
      </Box>

      {/* Text */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          gap:1
        }}
      >
        <Typography
        variant="h6"
          sx={{
            letterSpacing: "0.18em",
            fontWeight: 700,
            fontVariant:"all-small-caps",
            mb:0.5
          }}
        >
          {title}
        </Typography>

        <Typography
        variant="body1"
          sx={{
            maxWidth: "200px",
            // fontSize: "0.95rem",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.5)",
            fontWeight:"regular"
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Animated bottom glow line */}
      <Box
        className="glow-line"
        sx={{
          position: "absolute",
          bottom: 0,
          left: "8%",
          width: "84%",
          height: "1px",

          background:
            "linear-gradient(90deg, transparent, #8b5cf6, transparent)",

          transform: "scaleX(0.15)",
          transition:
            "transform 700ms cubic-bezier(.16,1,.3,1)",

          boxShadow: "0 0 15px rgba(139,92,246,0.8)",
        }}
      />
    </Box>
  );
}