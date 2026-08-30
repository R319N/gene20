import pxToRem from '@/assets/theme/functions/pxToRem';
import { styles } from '@/styles/styles';
import { ArrowRight, DoubleArrow } from '@mui/icons-material';
import { Typography, Stack, Box } from '@mui/material'
import React from 'react'

interface Props {
    text: string;
    spanText?: string;
    spanColor?: string;
    subtitle?: string;
}

const HeaderBanner = ({ text, spanText, spanColor, subtitle }: Props) => {
    return (
        <Stack gap={2} width="100%">
            <Typography variant="h1"
                sx={{
                    width: {xs:"80vw", lg:"14ch"},
                    lineHeight:1.125,
                    textAlign: "left",
                    fontSize: { xs: pxToRem(32), sm: "4rem", md: "5rem", lg: pxToRem(48), xxl:pxToRem(64) }
                }}>
                {text}&nbsp;
                <Typography variant="h1" component="span"
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        color: spanColor,
                        lineHeight:1,
                        fontSize: { xs: pxToRem(32), sm: "4rem", md: "5rem", lg: pxToRem(48), xxl:pxToRem(64) }
                    }}>

                    {spanText}
                </Typography>
            </Typography>
            <Stack direction="row" alignItems="center" gap={4}>
                <Box sx={{display:{xs:"none", md:"flex"}}}>
                    <DoubleArrow />
                </Box>
                <Typography variant="body1"
                    sx={{ maxWidth: {xs:"100%", lg:"40ch", xxl:"60ch"}, lineHeight:"130%", textAlign: "left", fontSize: { xs: pxToRem(12), sm: "1.2rem", md: "1.4rem", lg: pxToRem(14), xxl:pxToRem(14) } }}
                >

                    {subtitle}
                </Typography>
            </Stack>

        </Stack>
    )
}

export default HeaderBanner
