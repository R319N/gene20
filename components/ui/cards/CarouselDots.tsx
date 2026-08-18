import { Box } from '@mui/material'
import React from 'react'

const CarouselDots = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "10px",
                width: "10px",
                backgroundColor: (theme) => theme.palette.text.primary,
                borderRadius: '50%',
                boxShadow: '0px 0px 10px rgba(34, 9, 177, 0.838)',

            }} />
    )
}

export default CarouselDots