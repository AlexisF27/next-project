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

import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types'
import { useState } from 'react';

function DialogMovie({ movieDetail, open, handleClose }) {

  


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
        
        {Object.entries(movieDetail).map(([key, data]) => (
          <Typography key={key}> {key}: {data}</Typography>
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
  movieDetail: PropTypes.object,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default DialogMovie

