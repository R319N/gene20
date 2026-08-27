import pxToRem from '@/assets/theme/functions/pxToRem'
import contactDetailsdata from '@/constants/contact_detailsData'
import { styles } from '@/styles/styles'
import { Box, Divider, Stack, Typography } from '@mui/material'
import React, { forwardRef, useRef } from 'react'
// import SocialMediaLinks from './SocialMediaLinks'

const ContactDetails = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <Stack gap={3} ref={ref} className='details w-full items-start'>
            {contactDetailsdata.map((item, i) => (
                <Stack key={i} gap={1} className='flex justify-start'>
                    <div className="flex items-center gap-5">
                        <Box sx={{
                            // ...styles.iconXS
                        }}>
                            {item.component}
                        </Box>

                        {/* <Box className='flex flex-col '> */}
                        {/* <Typography variant="body1" sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
                                {item.name}
                            </Typography> */}
                        < Typography variant='body1' color="textSecondary"
                            sx={{ fontWeight: "light", lineHeight: "100%", letterSpacing: "0.5px", fontSize: { xs: "0.9rem", sm: pxToRem(14) } }}
                        >
                            {item.details}
                        </Typography>

                        {/* </Box> */}

                    </div>

                </Stack>
            ))}
            <Divider sx={{ width: "100%" }} />
            {/* <SocialMediaLinks /> */}
        </Stack>
    )
})

ContactDetails.displayName = 'ContactDetails'

export default ContactDetails