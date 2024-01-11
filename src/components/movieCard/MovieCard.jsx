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
              sx={{ height: 300 }}
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

      {open ? <DialogMovie imdbID={movie.imdbID} open={open} handleClose={handleClose} /> : null}
    </>

  )
}


MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,

}

export default MovieCard