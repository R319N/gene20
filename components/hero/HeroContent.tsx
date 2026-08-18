import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { AccessTime } from '@mui/icons-material';

// import { Box } from '@mui/material';

const HeroContent = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                zIndex: 2,
                py: "7rem",
                width: "100%",
                height: "100%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: { xs: 'center', md: 'flex-end' },
                gap: 4
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontWeight: "900",
                    fontSize: { xs: 32, sm: 58, md: 38, xxl: 56 },
                    lineHeight: "1.2",
                    width: { xs: "12ch", lg: "12ch" },
                    textShadow: '0 12px 34px rgba(91, 139, 255, 0.32)',
                    textWrap: "wrap",
                    textTransform: "uppercase"
                }}
            >
                Digital Excellence Redefined
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: "14px", xl: "20px" },
                    color: 'rgba(238, 243, 255, 0.78)',
                    textTransform: "capitalize",
                    maxWidth: "45ch"

                }}
            >
                We blend <strong>creativity</strong>, <strong>strategy</strong> and <strong>technology</strong> to build next generation digital products that drive growth
                and deliver <strong style={{ color: "#0044ff" }}> real strategic impact.</strong>
            </Typography>
            <Stack gap="4" sx={{ spacing: "4" }}>
                <Button
                    sx={{ width: "fit-content" }}
                    variant="contained"
                    color="secondary"
                    startIcon={
                        <ArrowForwardRounded
                            sx={{ width: "22px", height: "22px" }}
                        />}
                >

                    Let&apos;s Discuss Your Project
                </Button>
                <Box color="#777777" sx={{ display: "flex", alignItems: "center", gap: 1, height: "100%" }}>
                    <AccessTime />
                    <Typography variant="body2" lineHeight="1" my="1rem" color="#d6d1d1" fontWeight="900" >
                        We respond within 24 hours
                    </Typography>
                </Box>

            </Stack>
        </Box>
    )
}

export default HeroContent
