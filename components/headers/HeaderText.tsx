import pxToRem from '@/assets/theme/functions/pxToRem'
import { Typography } from '@mui/material'
import React from 'react'

const HeaderText = ({ label }: { label: string }) => {
    return (
        <Typography
            variant="caption"
            sx={{
                background: `
      linear-gradient(#0e1116, #0e1116) padding-box,
      linear-gradient(90deg, #5876db, #4f5ad9, #3729ff) border-box
    `,
                border: "1px solid transparent",
                fontSize: { xs: 10, md: pxToRem(14), xxl: pxToRem(14) },
                fontWeight: "bold",
                letterSpacing: 2,
                lineHeight: 1.5,
                fontVariant: "all-small-caps",
                width: "fit-content",
                p: "0.3rem 1.5rem",
                height: "100%",
                borderRadius: "20px",
                "&::before": {
                    content: '""',
                    display: "inline-block",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background:
                        "linear-gradient(135deg, #29adff 0%, #8f7cff 100%)",
                    boxShadow: "0 0 14px rgba(41,173,255,0.6)",
                    mr: 1,
                    verticalAlign: "middle",
                },
            }}
        >
            {label}
        </Typography>
    )
}

export default HeaderText