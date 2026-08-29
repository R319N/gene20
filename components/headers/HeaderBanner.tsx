import pxToRem from '@/assets/theme/functions/pxToRem';
import { styles } from '@/styles/styles';
import { ArrowRight, DoubleArrow } from '@mui/icons-material';
import { Typography, Stack } from '@mui/material'
import React from 'react'

interface Props {
    text: string;
    spanText?: string;
    spanColor?: string;
    subtitle?: string;
}

const HeaderBanner = ({ text, spanText, spanColor, subtitle }: Props) => {
    return (
        <Stack gap={0.5} width="100%" sx={{...styles.center_flex, flexDirection: "column", px:"2rem"}}>
            <Typography variant="h1"
                sx={{
                    width: {xs:"100℅", lg:"12ch"},
                    textAlign: "center",
                     lineHeight: 1,
                    fontSize: { xs: "2rem", sm: "4rem", md: "5rem", lg: pxToRem(48) }
                }}>
                {text}&nbsp;
                <Typography variant="h1" component="span"
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        color: spanColor,
                        fontSize: { xs: "2rem", sm: "4rem", md: "5rem", lg: pxToRem(48) }
                    }}>

                    {spanText}
                </Typography>
            </Typography>
            <Stack direction="row" alignItems="center" gap={4}>
                {/* <span>
                    <DoubleArrow />
                </span> */}
                <Typography variant="body1"
                    sx={{ maxWidth: {xs:"100%", lg:"40ch"}, lineHeight:"120%", textAlign: "center", fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem", lg: pxToRem(14) } }}
                >

                    {subtitle}
                </Typography>
            </Stack>

        </Stack>
    )
}

export default HeaderBanner
