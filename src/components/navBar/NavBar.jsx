import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';



function NavBar() {
  return (
    < AppBar >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton color="inherit" sx={{ display: 'flex', alignItems: 'center', marginRight: '8px' }} >
          <MenuIcon sx={{ padding: '10px' }} />
        </IconButton>
        <Typography variant="h6"  >
          Default
        </Typography>
      </Box>
    </AppBar >
  )
}

export default NavBar