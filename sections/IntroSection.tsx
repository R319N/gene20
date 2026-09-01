'use client';

import MountainField3D from '@/components/intro/MountainField3D';
import { styles } from '@/styles/styles';
// import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
// import ShieldRounded from '@mui/icons-material/ShieldRounded';
// import BoltRounded from '@mui/icons-material/BoltRounded';
import { Box, Button, Typography } from '@mui/material';

// const laptopStats = [
//   { icon: <AutoAwesomeRounded />, label: 'Visual Identity', value: 'Brand-led UI' },
//   { icon: <BoltRounded />, label: 'Performance', value: 'Fast pages' },
//   { icon: <ShieldRounded />, label: 'Credibility', value: 'Trust signals' },
// ];

const IntroSection = () => {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        width: "100%",
        position: 'relative',
        minHeight: "100dvh",
        height:"100%",
        color: '#dbe7ff',
        px: { xs: 1.4, sm: 4, md: 7 },
        ...styles.center_flex,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          // overflowX: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div className="gradient-wrapper">
          <div className="intro-gradient" />
        </div>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          // background:"yellow",
          inset: 0,
          opacity: { xs: 0.46, md: 0.2 },
          pointerEvents: 'none',
          overflow: "hidden"
        }}
      >
        <MountainField3D />
      </Box>
      <Box sx={{
        ...styles.center_flex, flexDirection: "column", gap: 0, zIndex: 1, height: "100%"
      }}>
        <Typography variant='h1'
          sx={{
            background: 'linear-gradient(90deg, #84d8ff, #8157ff)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            width: { xs: "100%", xl: "30ch" },
            textAlign: "center", lineHeight: 1.4,
            textTransform: "capitalize",

          }}
        >
          Your website shapes how people perceive your business.
        </Typography>

        <Typography
          variant='body1'
          sx={{
            mt: 4,
            textTransform: "capitalize",
            width: { xs: "100%", xl: "80ch" },
            textAlign: "center",
            lineHeight: "2"
          }}>
          In today&apos;s digital world, customers often judge a brand before they ever make contact. A slow, outdated, or poorly designed website can reduce trust, weaken credibility, and cost opportunities.
        </Typography>
        <Button variant="text" endIcon={<TrendingFlatIcon />} sx={{ mt: 5, fontWeight: 700, textTransform: "capitalize", color: "#c8d9ff", borderBottom: "1px solid #c8d9ff" }} >
          Let&apos;s Build Your Digital Presence
        </Button>
      </Box>
    </Box>
  );
}

export default IntroSection;
