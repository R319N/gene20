import { IconButton } from '@mui/material'
import React from 'react'

interface Props {
    onClick: () => void;
    icon: React.ReactNode;
    ariaLabel: string
}

const NavigationButton = ({ onClick, icon, ariaLabel }: Props) => {
    return (
        <IconButton
            aria-label={ariaLabel}
            onClick={onClick}
            sx={{
                width: { xs: 58, md: 40 },
                height: { xs: 58, md: 40 },
                border: '1px solid rgba(255,255,255,0.42)',
                color: 'text.primary',
                boxShadow: '0 0 24px rgba(82, 111, 255, 0.18)',
                '&:hover': {
                    borderColor: 'primary.main',
                    color: 'primary.main',
                },
            }}
        >
            {icon}
        </IconButton>
    )
}

export default NavigationButton