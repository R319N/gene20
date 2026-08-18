import React from 'react'
import Link from 'next/link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import { NavigationItem } from '@/constants/navigation_Links'

interface NavigationDrawerProps {
  item: NavigationItem;
  handleDrawerToggle: () => void;
}


const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  item,
  handleDrawerToggle,
}) => {
  return (
    <Box
      sx={{
        p: "0.5rem",
        position: "relative",
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      <List>
        <ListItem
          component={MenuItem}
          sx={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'left',
            width: "100%"
          }}
          onClick={handleDrawerToggle}
        >
          <ListItemButton
            sx={{
              display: 'flex', justifyContent: 'space-evenly', py: '1rem', width: "200px"
            }}
          >
            <ListItemText>
              <Link href={item.url}>
                <Typography
                  color="white"
                  display='block'
                  variant='caption'
                  fontWeight='regular'
                  textTransform='uppercase'
                >
                  {item.name}
                </Typography>
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default NavigationDrawer
