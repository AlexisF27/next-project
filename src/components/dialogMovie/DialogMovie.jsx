import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from "@mui/material"
import { useEffect, useState } from "react";

import CloseIcon from '@mui/icons-material/Close';
import MovieUtils from "../../utils/Movies/MovieUtils";
import PropTypes from 'prop-types'

function DialogMovie({ imdbID, open, handleClose }) {


  const [movieDetail, setMovieDetail] = useState({});

  const getMovieDetail = async (imdbID) => {
    try {
      const result = await MovieUtils.fetchMovieDetail(imdbID);
      setMovieDetail(result)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getMovieDetail(imdbID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(Object.entries(movieDetail))

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {movieDetail.Title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />



      </IconButton>
      <DialogContent dividers>
        <CardMedia
          sx={{ height: 650, border: 50, backgroundColor: "white" }}
          image={movieDetail.Poster}
          title={movieDetail.Title}
        />
        {Object.keys(movieDetail).filter(key => (key !== 'Ratings' && key !== 'Poster')).map(key => (
          <>
            <Typography key={key} sx={{ fontWeight: 'bold'}}>{key}:</Typography>
            <Typography key={key + 'Detail'}>{movieDetail[key]}</Typography>
          </>
        ))}

      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  )

}

DialogMovie.propTypes = {
  imdbID: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default DialogMovie

