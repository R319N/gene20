"use client";

// import LivingAbstractSphere from "@/components/three/LivingAbstractSphere";
import { styles } from "@/styles/styles";
import { Box, Divider, Stack, Typography, Link, Container } from "@mui/material";
import LinkButton from "@/components/ui/buttons/LinkButton";
import socialMediaRoutes from "@/constants/socialMediaRoutes";

export default function ContactSection() {
  return (
    <section id="contact" style={{background:"transparent"}}>
      <Container

        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100dvh",
          overflow: "visible",
          zIndex: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 0,
          left: "-40%",
          top: 0,
          transform: "translateY(30%)",
          overflow:"hidden"

        }}>
        <LivingAbstractSphere />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 0,
          right: "-45%",
          top: 0,
          transform: "translateY(-20%)",
           overflow:"hidden"

        }}>
        <LivingAbstractSphere />
      </Box> */}
        <Box className="body-gradient1" />
        <Box
          sx={{
            ...styles.glassOutlinedTheme,
            width: "700px",
            height: "100%",
            p: "1rem",
            // ...styles.column_flex,
            gap: 2,
          }}>

          <Stack sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py: "1rem" }}>
            <Typography variant="h1"
              sx={{
                width: { xs: "100%", xxl: "15ch" },
                 textAlign: "center", fontWeight: 900, fontSize: {xs:"32px", lg:"3rem"},
                background: "linear-gradient(90deg, #bbd4da, #3a47d5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>
              Ready to build the future
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 4, width: "100%", textAlign: "center", fontSize: "14px", color: "rgba(255, 255, 255, 0.8)", }}>
              Let&apos; s connect and create something amazing together. Whether you have a project in mind or just want to say hi, I&apos;m always open to new opportunities and collaborations.
            </Typography>
            <Stack direction="row" spacing={2}>

              {/* <Button variant="contained" color="primary" startIcon={<QuestionMark />}>
              Ask Any Questions
            </Button> */}
              <LinkButton pageUrl="/contact" label="get in touch with us" />
            </Stack>
          </Stack>
          <Divider />
          <Stack direction="row" sx={{ justifyContent: "space-between", py: "1rem", px:"2rem" }}>
            {socialMediaRoutes.map((social, i) => (
              <Link href={social.url} key={i} sx={{ color: "textPrimary", textTransform: "capitalize" }}>
                {social.icon}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </section>
  );
}
