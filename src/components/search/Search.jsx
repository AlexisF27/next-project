import { Box, TextField } from "@mui/material";

import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from 'react';

function Search({ handleSearch }) {

  const [movieQuery, setMovieQuery] = useState('');

  const handleInputChange = (event) => {
    setMovieQuery(event.target.value);
  };

  const handleSearchQuery = () => {
    // Call the onSearch prop with the current query
    handleSearch(movieQuery);
    setMovieQuery('');
  };

  return (
    <Box sx={{ position: 'absolute', top: '100px', left: '450px' }}>
      <TextField type="search"
        placeholder="Search..."
        value={movieQuery}
        onChange={handleInputChange}
        style={{ width: '600px', paddingRight: '20px' }} />
      <IconButton size="large" onClick={handleSearchQuery} >
        <SearchRoundedIcon size="large"  style={{ fontSize: '30px' }} />
      </IconButton>
    </Box>
  )

}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,

}


export default Search