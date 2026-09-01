import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { AccessTime } from '@mui/icons-material';
import pxToRem from '@/assets/theme/functions/pxToRem';

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
                    fontSize: { xs: pxToRem(32), sm: 58, md: 38, xxl: 56 },
                    lineHeight: "1.2",
                    width: { xs: "12ch", lg: "12ch" },
                    textShadow: '0 12px 34px rgba(91, 139, 255, 0.32)',
                    textWrap: "wrap",
                    textTransform: "uppercase"
                }}
            >
                Creating Experiences Beyond The Ordinary
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: "14px", xxl: pxToRem(16) },
                    color: 'rgba(238, 243, 255, 0.78)',
                    textTransform: "capitalize",
                    maxWidth: "45ch",
                    mixBlendMode:""

                }}
            >
                We blend <strong>creativity</strong>, <strong>strategy</strong> and <strong>technology</strong> to build next generation digital products that drive growth
                and deliver <strong style={{ color: "#4a74e9" }}> real strategic impact.</strong>
            </Typography>
            <Stack direction={{xs:"column", md:"row"}} spacing={2} sx={{ width: {xs:"max-content", lg:"35vw", xxl:"24vw"}  }}>
                 <Button
                    sx={{
                        width: "100%",
                        justifyContent: "space-between",
                        '& .MuiButton-endIcon': {
                            marginLeft: 0,
                        }
                    }}
                    variant="outlined"
                    color="secondary"
                    endIcon={
                        <ArrowForwardRounded
                            sx={{ width: "22px", height: "22px" }}
                        />}
                >

                    let&apos;s build your project
                </Button>
                <Button
                    sx={{
                        width: "100%",
                        justifyContent: "space-between",
                        '& .MuiButton-endIcon': {
                            marginLeft: 0,
                        }
                    }}
                    variant="contained"
                    color="secondary"
                    endIcon={
                        <ArrowForwardRounded
                            sx={{ width: "22px", height: "22px" }}
                        />}
                >

                    get in touch
                </Button>
              



                {/* <Box color="#777777" sx={{ display: "flex", alignItems: "center", gap: 1, height: "100%" }}>
                    <AccessTime />
                    <Typography variant="body2" lineHeight="1" my="1rem" color="#d6d1d1" fontWeight="900" >
                        We respond within 24 hours
                    </Typography>
                </Box> */}

            </Stack>
        </Box>
    )
}

export default HeroContent
