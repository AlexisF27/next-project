
import { Container, Box, Rating, Card, CardActionArea, CardContent, Typography, Grid, CardMedia } from "@mui/material"
import MovieUtils from "../../utils/Movies/MovieUtils";

import { useState, useEffect } from 'react';


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
    <>

      <Container sx={{ paddingTop: '200px' }} >
        <Box sx={{ bgcolor: '#cfe8fc' }}>
          <Grid container spacing={4}>
            {movies.map((movie) => ((
              <Grid key={movie.imdbID} item xs={6} md={4}>
                <Card sx={{ maxWidth: 345, border: 2, margin: 2 }}>
                  <CardActionArea>
                    <CardMedia
                      sx={{ height: 250 }}
                      image={movie.Poster}
                      title={movie.Title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {movie.Title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Rating value={4} sx={{ margin: 2 }} />
                </Card>

              </Grid>


            )))}

          </Grid>


        </Box>
      </Container>
    </>
  )
}

export default NotePad