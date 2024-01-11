import axios from 'axios';

class MovieUtils {

  static fetchMovies = async (searchInput) => {
    try {

      const API_KEY = import.meta.env.VITE_APP_API_KEY;

      if (!API_KEY) {
        console.error('OMDb API key is missing. Make sure to set REACT_APP_OMDB_API_KEY in your .env file.');
        return;
      }
      console.log(searchInput);
      
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchInput}`);

      if (response.data.Response === 'True') {
        return response.data.Search;
      } else {
        console.error(response.data.Error);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };


  static fetchMovieDetail = async (imdbID) => {
    try {

      const API_KEY = import.meta.env.VITE_APP_API_KEY;

      if (!API_KEY) {
        console.error('OMDb API key is missing. Make sure to set REACT_APP_OMDB_API_KEY in your .env file.');
        return;
      }
      
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`);

      if (response.data.Response === 'True') {

        return response.data;
      } else {
        console.error(response.data.Error);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };



}

export default MovieUtils;