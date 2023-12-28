import axios from 'axios';

class MovieUtils {

  static fetchMovies = async () => {
    try {

      const API_KEY = import.meta.env.VITE_APP_API_KEY;

      if (!API_KEY) {
        console.error('OMDb API key is missing. Make sure to set REACT_APP_OMDB_API_KEY in your .env file.');
        return;
      }
      
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=movie&page=1&plot=full`);

      if (response.data.Response === 'True') {
        console.log(response.data.Search)
        return response.data.Search;
      } else {
        console.error(response.data.Error);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
}

export default MovieUtils;