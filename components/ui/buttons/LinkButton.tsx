import { styles } from '@/styles/styles'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { ArrowForwardRounded } from '@mui/icons-material'

interface LinkButtonProps {
    label: string
    pageUrl: string
    color?: string
}

const LinkButton = ({ label, pageUrl, color }: LinkButtonProps) => {
    return (
        <Box
            className="slide-button"
            component={Link}
            href={pageUrl}
            sx={{
                ...styles.center_flex,
                justifyContent: "flex-start",
                gap: 2,
                width: "fit-content",
                color: { color },
                textDecoration: "none",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    ...styles.center_flex,
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                  

                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        padding: "0.8px",
                        background: "linear-gradient(90deg, #31a6d8, #737eff)",
                        WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                    },

                    ".slide-button:hover &": {
                        transform: "translateX(4px)",
                    },
                }}
            >

                <ArrowForwardRounded
                    sx={{
                        fontSize: 22,
                        background: "linear-gradient(45deg, #d831a9, #e9e9e9)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                        // fill: "url(#gradient)",
                    }}
                />

            </Box>
            <Typography sx={{
                fontWeight: 700,
                fontSize: { xs: 14, md: 16 }, color: { color },
                background: "linear-gradient(90deg, #00a9d3, #3a47d5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                  textTransform:"capitalize",
            }}>
                {label}
            </Typography>
        </Box>
    )
}

export default LinkButton