import DottedWorldMap from '@/components/contact/DottedWorldMap'
import { Box, Stack } from '@mui/material'
import React from 'react'
import { styles } from '@/styles/styles'
import HeaderText from '@/components/headers/HeaderText'
import HeaderBanner from '@/components/headers/HeaderBanner'
import ContactDetails from '@/components/contact/ContactDetails'
import '@/styles/animatedButton.css'
import GlowButton from '@/components/ui/buttons/GlowButton'


const ContactSection = () => {
  return (
    <Box
     component={"section"} 
     id="contact"
     
      sx={{ ...styles.section_container }}
      >
              <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          opacity: "10%",
          transform: "translate(0%, 20%)"
        }}
      >
        <DottedWorldMap
          dotSpacing={11}
          dotRadius={1.4}
          highlightColor="#8B5CF6"
          opacity={0.22}
        />
      </Box>
      <Box sx={{ ...styles.between_flex,flexDirection:"column", width: "100%", px: { xs: "1rem", md: "8vw", xxl: "10vw" }, }}>
        <Stack spacing={4}>
          <HeaderText label='get in touch' />
          <HeaderBanner
            text="Let&apos;s create something"
            spanText='extraordinary'
            spanColor="rgb(32, 161, 253)"
            subtitle=" I'm currently available for new projects and collaborations. Whether you have a question or just want to say hello, I'd love to hear from you."

          />
        </Stack>
        <Box sx={{
          ...styles.between_flex,
          alignItems: "center",
          height: "100%",
          width: "100%"
        }}>
          <Stack mt={4}>
            <ContactDetails />
            {/* <SocialContacts /> */}
          </Stack>

          <GlowButton
            title="START A PROJECT"
            subtitle="Tell me about your project and let's bring your ideas to life."
          />


        </Box>
      </Box>
    </Box>
  )
}

export default ContactSection




