import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LogoIconFull from '@/assets/logo/Logo'
import navigation from '@/constants/navigation_Links'
import Address from '@/components/footer-components/address'
import { Box, Typography, Link, IconButton, Stack, Grid, Divider, TextField, Button } from '@mui/material'
import { styles } from '@/styles/styles'

const FooterSection = () => {
  const currentYear = new Date().getFullYear()
  const exploreItems = navigation.filter((item) => item.isNavigation && item.isExplore);

  return (
    <footer style={{ marginTop: 'auto' }}>
      <Box sx={{ ...styles.column_flex, pt: "2rem", width: "100%", px: { xs: 3, lg: 10, xxl: 20 }, mx: "auto" }}>
        <Grid container spacing={4} sx={{ width: "100%" }}>
          <Grid size={{ xs: 12, lg: 3.5, xl: 3.5 }}>
            <Stack gap={1} sx={{ width: "100%" }}>
              <LogoIconFull />
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, width: {xs:"100%", lg:"35ch"}, textTransform: "capitalize" }}>
                The architect of digital pioneers.
                We build the systems that define
                tomorrow.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  component="a"
                  href="#"
                  sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="#"
                  sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 2.5, xl: 2 }}>
            <Stack sx={{ width: "100%" }} >
              <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
                Explore.
              </Typography>
              <Stack gap={0.5}>
                {exploreItems.map((item) => (
                  <Link
                    sx={{ color: 'grey.300', textDecoration: 'none', '&:hover': { color: 'primary.main' }, textTransform: "capitalize" }}
                    key={item.name}
                    href={item.url}
                  >
                    {item.name}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 2.5 }}>
            <Stack sx={{ width: "100%" }} >
              <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
                Contact.
              </Typography>
              <Address />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 3.5, xl: 3.5 }}>
            <Stack sx={{ width: "100%" }} spacing={3} >
              <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 'bold', textTransform: "capitalize" }}>
                Subscribe to our newsletter.
              </Typography>
              <TextField
                variant="standard"
                placeholder="Enter your email"
                fullWidth
                InputProps={{
                  sx: {
                    backgroundColor: 'white',
                    borderRadius: 1,
                  },
                }}
              />
              <Box sx={{width:"100%", display:"flex", justifyContent:"flex-end"}}>
                 <Button
                variant="contained"
                sx={{ width: "fit-content", px: "4rem", py: 1, textTransform: "capitalize" }}
              >
                Subscribe
              </Button>
              </Box>            
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid grey.700', mt: 4, textAlign: 'center', width: "100%" }}>
          <Divider />
          <Typography variant="body2" sx={{ color: 'grey.400', py: "0.5rem" }}>
            © {currentYear} Gene20. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  )
}

export default FooterSection