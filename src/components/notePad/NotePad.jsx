
import { Container, Box, Rating, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"

import { useState, useEffect } from 'react';
import axios from 'axios';





function NotePad() {


  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "e43f1b43";
        const apiKey1 = process.env.REACT_APP_API_KEY;
        
        if (!apiKey) {
          console.error('OMDb API key is missing. Make sure to set REACT_APP_OMDB_API_KEY in your .env file.');
          return;
        }

        const response = await axios.get(`http://www.omdbapi.com/?apikey=e43f1b43&s=movie&page=1&type=movie`);

        if (response.data.Response === 'True') {
          setMovies(response.data.Search.slice(0, 10));
          console.log(apiKey, apiKey1)
          console.log(response.data.Search.slice(0, 10))
        } else {
          console.error(response.data.Error);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);



  return (
    <>
      <Container sx={{ paddingTop: '200px', width: '6000px' }} >
        <Box sx={{ bgcolor: '#cfe8fc', height: '90vh' }}>
          <div className="pokemon-grid">
            {movies.map((movie) => (
              <Card key={movie.imdbID} sx={{ maxWidth: 345 }}>
                <CardActionArea>
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
              </Card>
            ))}
          </div>
          <Rating value={4} />

        </Box>
      </Container>
    </>
  )
}

export default NotePad