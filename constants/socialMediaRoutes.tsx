import Twitter from '@mui/icons-material/Twitter'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'

const socialMediaRoutes = [
  {
    name: 'facebook',
    icon: (
      <Facebook
        sx={{
          color: theme => theme.palette.socialMediaColors.facebook.main,
          fontSize: '18px'
        }}
      />
    ),
    url: 'https://web.facebook.com/profile.php?id=100067973402584'
  },

  {
    name: 'instagram',
    icon: (
      <Instagram
        sx={{
          color: theme => theme.palette.socialMediaColors.instagram.main,
          fontSize: '18px'
        }}
      />
    ),
    url: ''
  },
  {
    name: 'twitter',
    icon: <Twitter sx={{ color: theme => theme.palette.socialMediaColors.twitter.main, fontSize: '18px' }} />,
    url: 'https://twitter.com/wilfred_reign'
  },
  {
    name: 'linkedin',
    icon: <LinkedIn sx={{ color: theme => theme.palette.socialMediaColors.linkedin.main, fontSize: '18px' }} />,
    url: 'https://www.linkedin.com/in/wilfred-reign-037702215/'
  }
]
export default socialMediaRoutes
