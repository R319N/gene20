"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
// import SiteTransition from "./SiteTransition";
import uLwandleTheme from "@/assets/theme/uLwandleTheme";
import NavigationBar from "../navigation/NavigationBar";
import FooterSection from "@/sections/FooterSection";
import SmoothScrollProvider from "@/assets/providers/smooth-scroll-provider";

const ClientLayout = (props: { children: React.ReactNode }) => {
    const { children } = props;

    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={uLwandleTheme}>
                <CssBaseline />
                <NavigationBar sections={[]} onNavigate={function (id: string): void {
                    throw new Error("Function not implemented.");
                }} />

<SmoothScrollProvider/>

                {/* <AppBar
          position="fixed"
          color="default"
          elevation={1}
          sx={{
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1300,
            backgroundColor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", justifyContent: "space-between", gap: 2, px: { xs: 2, sm: 3 } }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: "text.primary" }}>
              Gene20
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "flex-end" }}>
              {[
                { label: "Home", href: "#" },
                { label: "Work", href: "#" },
                { label: "About", href: "#" },
              ].map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  size="small"
                  sx={{
                    borderRadius: 999,
                    border: "1px solid",
                    borderColor: "divider",
                    color: "text.primary",
                    backgroundColor: "background.paper",
                    px: 1.5,
                    py: 0.75,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar> */}

                {/* <SiteTransition> */}
                  {children}
                {/* </SiteTransition> */}
                <FooterSection />
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default ClientLayout
