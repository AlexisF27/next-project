import { Box, Container, Grid } from "@mui/material"
import { useEffect, useState } from 'react';

import MovieCard from "../movieCard/MovieCard";
import MovieUtils from "../../utils/Movies/MovieUtils";

function NotePad() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const result = await MovieUtils.fetchMovies();
        setMovies(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getMovies()
  }, []);

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

export default NotePad