import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography
} from "@mui/material"

import DialogMovie from "../dialogMovie/DialogMovie";
import PropTypes from 'prop-types'
import { useState } from 'react';

function MovieCard({ movie }) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Grid key={movie.imdbID} item xs={6} md={4}>
        <Card sx={{ maxWidth: 345, border: 2, margin: 2 }}>
          <CardActionArea>
            <CardMedia
              sx={{ height: 350 }}
              image={movie.Poster}
              title={movie.Title}
              onClick={handleClickOpen}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.Title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Rating value={4} sx={{ margin: 2 }} />
        </Card>
      </Grid >
      <DialogMovie open={open} handleClose={handleClose}></DialogMovie>
    </>



  )
}


MovieCard.propTypes = {
  movie: PropTypes.array,

}

export default MovieCard