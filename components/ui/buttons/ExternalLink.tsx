import { NorthEast } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

interface ExternalLinkProps {
    activeProject: {
        pageUrl: string
    }
}

const ExternalLink = ({ activeProject }: ExternalLinkProps) => {
    return (
        <Button
            component="a"
            href={activeProject.pageUrl}
            target="_blank"
            rel="noreferrer"
            startIcon={<NorthEast />}
            sx={{
                alignSelf: 'flex-start',
                px: 0,
                color: 'primary.main',
                fontSize: 18,
                textTransform: 'none',
                '& .MuiButton-startIcon': {
                    mr: 1.5,
                    width: 40,
                    height: 40,
                    border: '1px solid',
                    borderColor: 'primary.main',
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    boxShadow: '0 0 22px rgba(82, 111, 255, 0.28)',
                },
                '& .MuiButton-startIcon > svg': {
                    fontSize: 24,
                },
            }}
        >
            View Project
        </Button >
    )
}

export default ExternalLink