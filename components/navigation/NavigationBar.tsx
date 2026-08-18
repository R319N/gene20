"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { styles } from "@/styles/styles";
import Link from "next/link";

// *** MUI5 Icon imports ***
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoThumbnail from "@/assets/logo/LogoThumbnail";
import { useState } from "react";
import NavTabs from "./NavTabs";
import NavigationMenu from "./NavigationMenu";

export type SectionNav = {
    id: string;
    title: string;
};

type NavigationBarProps = {
    sections: SectionNav[];
    onNavigate: (id: string) => void;
    window?: () => Window;
    title?: string;
    children?: React.ReactNode;
};

export default function NavigationBar({ sections, onNavigate, window, ...rest }: NavigationBarProps) {
    const container = window !== undefined ? () => window().document.body : undefined;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <Box
                position="fixed"
                sx={{
                    top: "0",
                    zIndex: 99,
                    width: "100%",
                    p: { xs: "0.5rem", md: "1rem 2rem", xxl: "1rem 8rem" },
                }}
            >
                <AppBar
                    position="sticky"
                    elevation={1}
                    sx={{
                        ...styles.scrolledAppBar,
                        bgcolor: "#00041417",
                        backdropFilter: "blur(10px)",
                        boxShadow: "none",
                    }}
                >
                    <Toolbar
                        sx={{
                            ...styles.between_flex,
                            border: (theme) => theme.palette.mode === "light" ? `1px solid ${theme.palette.text.primary}33` : `1px solid ${theme.palette.text.primary}22`,
                            borderRadius: (theme) => theme.shape.borderRadius,
                            position: "relative",
                            maxWidth: "100%",
                            minHeight: "40px",
                            width: "100%",
                            p: "0.5rem",
                            m: 0,
                        }}
                    >
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "flex-end" }}>
                            {sections.map((section) => (
                                <Button
                                    key={section.id}
                                    color="inherit"
                                    size="small"
                                    onClick={() => onNavigate(section.id)}
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
                                    {section.title}
                                </Button>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                ...styles.between_flex,
                                width: "100%",
                                alignItems: "center"
                            }}
                        >
                            <Link href="/">
                                <LogoThumbnail />
                            </Link>
                            <Box display="flex" alignItems="center" gap={4}>
                                <IconButton
                                    size="medium"
                                    aria-label="open drawer"
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        ...styles.iconHover,
                                        borderRadius: "10px",
                                        border: "1px solid #D0A5C055",
                                        display: { xs: "flex", xl: "none" },
                                    }}
                                >
                                    {!mobileOpen ? <MenuIcon /> : <CloseIcon />}
                                </IconButton>
                            </Box>
                            <Box
                                sx={{
                                    display: { xs: "none", xl: "flex" },
                                    alignItems: "center",
                                    width:"fit-content",
                                }}
                            >
                                <NavTabs />
                            </Box>
                            <Box
                                sx={{
                                    display: { xs: "none", lg: "flex" },
                                    alignItems: "center",
                                }}
                            >
                                <Button variant="contained"
                                >
                                    contact us
                                </Button>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                {...rest}
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: "flex", xl: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: 260,
                        pt: "1rem",
                    },
                }}
            >
                <NavigationMenu
                    open={open}
                    anchorEl={anchorEl}
                    setAnchorEl={setAnchorEl}
                    handleDrawerToggle={handleDrawerToggle}
                />
            </Drawer>
        </>
    );
}