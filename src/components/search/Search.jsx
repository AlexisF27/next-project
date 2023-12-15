import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import { TextField, Box } from "@mui/material";

function Search() {
  return (
    <Box sx={{ position: 'absolute', top: '100px', left: '450px' }}>
      <TextField type="search" style={{width: '600px',paddingRight: '20px'}}/>
      <IconButton size="large" >
        <SearchRoundedIcon size="large"  style={{ fontSize: '30px'}}/>
      </IconButton>
    </Box>
  )

}

export default Search