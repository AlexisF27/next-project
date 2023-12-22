

import axios from 'axios';


class MovieUtils {

  static fetchMovies = async () => {
    try {

      const apiKey = "e43f1b43";

      if (!apiKey) {
        console.error('OMDb API key is missing. Make sure to set REACT_APP_OMDB_API_KEY in your .env file.');
        return;
      }

      const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=movie&page=1&type=movie`);

      if (response.data.Response === 'True') {
        return response.data.Search.slice(0, 10);
      } else {
        console.error(response.data.Error);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
}

export default MovieUtils;