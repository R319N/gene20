// "use client";

// // import LivingAbstractSphere from "@/components/three/LivingAbstractSphere";
// import { styles } from "@/styles/styles";
// import { Box, Divider, Stack, Typography, Link, Container } from "@mui/material";
// import LinkButton from "@/components/ui/buttons/LinkButton";
// import socialMediaRoutes from "@/constants/socialMediaRoutes";

// export default function ContactSection() {
//   return (
//     <section id="contact" style={{background:"transparent"}}>
//       <Container

//         sx={{
//           position: "relative",
//           width: "100%",
//           minHeight: "100dvh",
//           overflow: "visible",
//           zIndex: 0,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {/* <Box
//         sx={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           pointerEvents: "none",
//           zIndex: 0,
//           left: "-40%",
//           top: 0,
//           transform: "translateY(30%)",
//           overflow:"hidden"

//         }}>
//         <LivingAbstractSphere />
//       </Box>
//       <Box
//         sx={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           pointerEvents: "none",
//           zIndex: 0,
//           right: "-45%",
//           top: 0,
//           transform: "translateY(-20%)",
//            overflow:"hidden"

//         }}>
//         <LivingAbstractSphere />
//       </Box> */}
//         <Box className="body-gradient1" />
//         <Box
//           sx={{
//             ...styles.glassOutlinedTheme,
//             width: "700px",
//             height: "100%",
//             p: "1rem",
//             // ...styles.column_flex,
//             gap: 2,
//           }}>

//           <Stack sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py: "1rem" }}>
//             <Typography variant="h1"
//               sx={{
//                 width: { xs: "100%", xxl: "15ch" },
//                  textAlign: "center", fontWeight: 900, fontSize: {xs:"32px", lg:"3rem"},
//                 background: "linear-gradient(90deg, #bbd4da, #3a47d5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
//               }}>
//               Ready to build the future
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 2, mb: 4, width: "100%", textAlign: "center", fontSize: "14px", color: "rgba(255, 255, 255, 0.8)", }}>
//               Let&apos; s connect and create something amazing together. Whether you have a project in mind or just want to say hi, I&apos;m always open to new opportunities and collaborations.
//             </Typography>
//             <Stack direction="row" spacing={2}>

//               {/* <Button variant="contained" color="primary" startIcon={<QuestionMark />}>
//               Ask Any Questions
//             </Button> */}
//               <LinkButton pageUrl="/contact" label="get in touch with us" />
//             </Stack>
//           </Stack>
//           <Divider />
//           <Stack direction="row" sx={{ justifyContent: "space-between", py: "1rem", px:"2rem" }}>
//             {socialMediaRoutes.map((social, i) => (
//               <Link href={social.url} key={i} sx={{ color: "textPrimary", textTransform: "capitalize" }}>
//                 {social.icon}
//               </Link>
//             ))}
//           </Stack>
//         </Box>
//       </Container>
//     </section>
//   );
// }
import pxToRem from '@/assets/theme/functions/pxToRem'
import ContactDetails from '@/components/contact/ContactDetails'
import SocialContacts from '@/components/contact/socialContact'
import HeaderBanner from '@/components/headers/HeaderBanner'
import HeaderText from '@/components/headers/HeaderText'
import socialMediaRoutes from '@/constants/socialMediaRoutes'
import { styles } from '@/styles/styles'
import { BookOnline, SubdirectoryArrowRight } from '@mui/icons-material'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
// import Head from 'next/head'
import React from 'react'

const ContactSection = () => {
  return (
    <section id="contact" className='h-[100%]'>
      <Container
        sx={{
          ...styles.section_container,
          // ...styles.between_flex,
          flexDirection: "column",
          pb: "10vh",
          gap: 6,
          alignItems: "flex-start",
        }}>
        <div className="w-full">
          <HeaderText label="get in touch" />
        </div>
        <ContactDetails />
        <Box sx={{ ...styles.column_flex, width: "100%", gap: 8 }}>
          <HeaderBanner
            text="Ready to build"
            spanText="the future"
            spanColor="primary.main"
            subtitle="Join forces with a digital partner that understands the intersection of high-end design and mission-critical engineering."
          />
          <Stack
            direction={"row"}
            spacing={4}
            sx={{
              width: "100%",
              ...styles.center_flex
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              startIcon={<BookOnline />}
              sx={{ mt: 2, width: { xs: "100%", lg: "fit-content" } }}
            >
              book a consultation
            </Button>
            <Button
              variant='contained'
              startIcon={<SubdirectoryArrowRight />}
            >
              send us an email
            </Button>
          </Stack>
          {/* <SocialContacts /> */}
          <Box sx={{...styles.center_flex, width:"100%", gap:8, textTransform:"uppercase",}}>
            {socialMediaRoutes.map((social, index) => (
              <Box component="a" href={social.url} key={index} >
                <Typography variant="body2" fontWeight={"600"}>
                  {social.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>




        {/* <Typography variant="h2"
         sx={{ fontWeight: 900, fontSize: { xs: "1.5rem", lg: pxToRem(48) }, textAlign: { xs: "center", lg: "left" } }}>
          info@gene20.co.za
        </Typography> */}


        {/* <Grid container spacing={4} sx={{ width: "100%", }}>
          <Grid size={{ xs: 12, lg: 12 }} sx={{}}>
            <Stack spacing={2} sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: { xs: "center", lg: "flex-start" }, justifyContent: "center", py: "1rem" }}>
              <Stack>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 2, alignItems: { xs: "center", lg: "flex-start" } }}>
                  
                  <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "1.5rem", lg: pxToRem(32) }, textAlign: { xs: "center", lg: "left" } }}>
                      info@gene20.co.za
                    </Typography>
                </Box>
              </Stack>
              <Stack>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<BookOnline />}
                  sx={{ mt: 2, width: { xs: "100%", lg: "fit-content" } }}>
                  book a consultation
                </Button>
                <Box display="flex" alignItems="center" gap={1} sx={{ mt: 2, width: { xs: "100%", lg: "fit-content" } }}>
                  <Box
                    sx={{
                      ...styles.center_flex,
                      width: "40px", height: "40px",
                      borderRadius: "20%",
                      background: "linear-gradient(135deg, #29adff 0%, #8f7cff 100%)", boxShadow: "0 0 14px rgba(41,173,255,0.6)"
                    }} >
                    <SubdirectoryArrowRight />
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 900, textAlign: { xs: "center", lg: "left" }, width: { xs: "100%", lg: "40ch" }, textTransform: "capitalize" }}>
                    send us an email
                  </Typography>
                </Box>
              </Stack>

            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 12 }} sx={{}}>
            contact form
          </Grid>
        </Grid> */}
        {/* <Box
          sx={{
            ...styles.glassOutlinedTheme,
            width: "700px",
            height: "100%",
            p: "1rem",
            // ...styles.column_flex,
            gap: 2,
          }}>
          hie
        </Box> */}
      </Container>
    </section>
  )
}


export default ContactSection