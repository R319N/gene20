import DottedWorldMap from '@/components/contact/DottedWorldMap'
import { Box, Container, Stack, Typography, Link } from '@mui/material'
import React from 'react'
import { Mail, Phone, LocationPin, RocketLaunch } from '@mui/icons-material'
import socialMediaRoutes from '@/constants/socialMediaRoutes'
import { styles } from '@/styles/styles'
import HeaderText from '@/components/headers/HeaderText'
import HeaderBanner from '@/components/headers/HeaderBanner'
import SocialContacts from '@/components/contact/socialContact'
import pxToRem from '@/assets/theme/functions/pxToRem'
import ContactDetails from '@/components/contact/ContactDetails'
import '@/styles/animatedButton.css'
import GlowButton from '@/components/ui/buttons/GlowButton'

const ContactSection = () => {
  return (
    <section id="contact" style={{ background: "transparent", position: "relative", }}>
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

      <Box
        sx={{
          ...styles.section_container,
          gap: 4,
          maxHeight: "100dvh",
          height: "100%",
          boxSizing: "border-box",
          px: { xs: "1rem", md: "8vw", xxl: "10vw" },
          pb: "10vh"
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            gap: 4,
            ...styles.between_flex, flexDirection: "column"
          }}
        >
          <Stack spacing={4}>
            <HeaderText label='get in touch' />
            <HeaderBanner
              text="Let&apos;s create something"
              spanText='extraordinary'
              spanColor="rgb(32, 161, 253)"
              subtitle=" I'm currently available for new projects and collaborations. Whether you have a question or just want to say hello, I'd love to hear from you."

            />
          </Stack>
          <Box sx={{ ...styles.between_flex, alignItems: "flex-end", height: "100%" }}>
            <Stack>
              <ContactDetails /><SocialContacts />
            </Stack>
            {/* <Box
            // className="animated-button"
              sx={{
                // ...styles.between_flex,
                // alignItems: "center", width: "fit-content",
                border: "1px solid white",
                // padding: "0.8rem 1.5rem",
                // borderRadius: "10px",
                gap: 4
              }}>
              <Box sx={{ borderRadius: "50%", border: "1px solid white", p: "0.5rem" }}>
                <RocketLaunch />
              </Box>

              <Stack spacing={1} sx={{ textTransform: "capitalize" }}>
                <Typography
                  variant='h6'
                  sx={{ letterSpacing: "1.5px", fontVariant: "all-small-caps", fontWeight: "bold" }}>
                  Start a Project
                </Typography>
                <Typography variant='body2' lineHeight={"140%"} fontWeight="regular" width={"25ch"}  color= "rgba(255, 255, 255, 0.6)">
                  tell us about your project and lets bring your ideas to life
                </Typography>
              </Stack>
            </Box> */}
            <GlowButton
              title="START A PROJECT"
              subtitle="Tell me about your project and let's bring your ideas to life."
              onClick={() => {
                // navigation / modal / contact action
              }}
            />


          </Box>
          {/* Contact Details */}
          {/* <Stack gap={3}>
            
            <Stack direction="row" gap={2} alignItems="flex-start">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  color: "#6366f1",
                  flexShrink: 0,
                }}
              >
                <Mail />
              </Box>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "11px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontWeight: 600,
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.9)",
                    mt: 0.5,
                  }}
                >
                  hello@wilfredreignn.dev
                </Typography>
              </Stack>
            </Stack>

          
            <Stack direction="row" gap={2} alignItems="flex-start">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  color: "#6366f1",
                  flexShrink: 0,
                }}
              >
                <Phone />
              </Box>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "11px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontWeight: 600,
                  }}
                >
                  Phone
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.9)",
                    mt: 0.5,
                  }}
                >
                  +27 73 052 3779
                </Typography>
              </Stack>
            </Stack>

           
            <Stack direction="row" gap={2} alignItems="flex-start">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  color: "#6366f1",
                  flexShrink: 0,
                }}
              >
                <LocationPin />
              </Box>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "11px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontWeight: 600,
                  }}
                >
                  Location
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.9)",
                    mt: 0.5,
                  }}
                >
                  South Africa
                </Typography>
              </Stack>
            </Stack> 
          </Stack>*/}

          {/* Social Links */}
          {/* <Box>
            <Typography
              sx={{
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.5)",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Let&apos;s Connect
            </Typography>
            <Stack direction="row" gap={3}>
              {socialMediaRoutes.map((social, index) => (
                <Link
                  href={social.url}
                  key={index}
                  sx={{
                    fontSize: "12px",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#6366f1",
                    },
                  }}
                >
                  {social.name}
                </Link>
              ))}
            </Stack>
          </Box>
        </Box> */}

          {/* Right Content - Project Card */}
          {/* <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              pr: 4,
            }}
          >
            <Box
              sx={{
                border: "1px solid rgba(99, 102, 241, 0.2)",
                borderRadius: "16px",
                p: 4,
                backgroundColor: "rgba(10, 10, 20, 0.4)",
                backdropFilter: "blur(10px)",
                maxWidth: "350px",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "2px solid rgba(99, 102, 241, 0.5)",
                  mx: "auto",
                  mb: 3,
                }}
              >
                <Typography sx={{ fontSize: "28px" }}>→</Typography>
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  mb: 2,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Start a Project
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "14px",
                  lineHeight: 1.5,
                }}
              >
                Tell me about your project and let's bring your ideas to life.
              </Typography>
            </Box>
          </Box>*/}
        </Box>
      </Box>
    </section>
  )
}

export default ContactSection