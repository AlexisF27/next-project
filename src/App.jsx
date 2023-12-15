import { ThemeProvider, TextField, Box } from "@mui/material";
import NavBar from "./components/navBar/NavBar"
import { theme } from './utils/Themes/theme';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />

        <Box sx={{ position: 'absolute', top: '100px', left: '650px' }}>
          <IconButton size="large">
            <SearchRoundedIcon />
          </IconButton>
          <TextField type="search" />

        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
