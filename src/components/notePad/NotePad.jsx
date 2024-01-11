import { Box, Container, Grid } from "@mui/material"
import { useEffect, useState } from 'react';

import MovieCard from "../movieCard/MovieCard";
import MovieUtils from "../../utils/Movies/MovieUtils";
import PropTypes from 'prop-types'

function NotePad({inputSearch}) {

  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const getMovies = async () => {
      try {
        console.log(inputSearch);
        const result = await MovieUtils.fetchMovies(inputSearch);
        setMovies(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    if (inputSearch) {
      getMovies();
    }

  }, [inputSearch]);

  return (
    <Container sx={{ paddingTop: '200px' }} >
      <Box sx={{ bgcolor: '#cfe8fc' }}>
        <Grid container spacing={4}>
          {movies.map((movie) => ((
            <MovieCard key={movie.imdbID} movie={movie} />
          )))}
        </Grid>
      </Box>
    </Container>
  )
}

NotePad.propTypes = {
  inputSearch: PropTypes.string.isRequired,

}

export default NotePad