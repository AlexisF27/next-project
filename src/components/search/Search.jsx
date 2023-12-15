import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import { TextField, Box } from "@mui/material";

function Search() {
  return (
    <Box sx={{ position: 'absolute', top: '100px', left: '650px' }}>
      <TextField type="search" />
      <IconButton size="large">
        <SearchRoundedIcon />
      </IconButton>
    </Box>
  )

}

export default Search