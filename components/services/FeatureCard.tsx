import { styles } from '@/styles/styles'
import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

interface Props {
    icon: React.ReactNode
    text: string
    sub: string
    color: string

}
const FeatureCard: React.FC<Props> = ({ icon, text, sub, color }) => {
    return (
        <Grid
            size={12}

            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 2,
            }}
        >
            <Box sx={{
                ...styles.center_flex,

                bgcolor: `${color}66`,
                border: `1px solid ${color}`,
                boxShadow: `0 24px 60px ${color}55`,
                borderRadius: "10px",
                padding: "4px",
                height: "32px",
                width: "32px",
                // color,
                "& svg": { fontSize: 16, },


            }}>
                {icon}
            </Box>
            <Stack>
                <Typography>
                </Typography>
                {text}
                <Typography
                    variant="caption"
                    sx={{
                        color: "rgba(235,239,255,0.52)",
                        display: "flex",
                        fontSize: 11,
                        lineHeight: 1,
                        mt: 0.4,
                        textWrap:"no-wrap"
                    }}
                >
                    {sub}
                </Typography>
            </Stack>
        </Grid>
    )
}

export default FeatureCard