import { useState } from "react";
import axios from 'axios'
export default function Search() {
    // our rerendering search term letters
    const [movieSearch, setMovieSearch] = useState('');
    console.log(movieSearch);
    // the rerendering title which is used in the fetching 
    const [movieTitle, setMovieTitle] = useState('');

    // setting the movie title function 
    function handleSubmit(e) {
        e.preventDefault();
        setMovieTitle(movieSearch);
        setMovieSearch('');
    }
    console.log(movieTitle);

// axios fetch movie API
const getMovie = async() => {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    headers: {
      'X-RapidAPI-Key': '23188ebbdcmsh7aeb3fccfa1534cp172313jsnbcc398cc377f',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      const movieData= response.data.results;
      const ids = movieData.map(movie => movie.id)
      console.log(movieData);
      console.log(ids)
  } catch (error) {
      console.error(error);
  }
}




    return (
        <form
            type="submit"
            onSubmit={handleSubmit}>
            <div class="form-group mb-3 w-25 p-3 mx-auto">
                <label for="exampleInputEmail1">Search Movie Titles</label>
                <input
                    value={movieSearch}
                    onChange={(e) => setMovieSearch(e.target.value)}
                    type="text"
                    label="exampleInputEmail1"
                    class="form-control"
                    placeholder="Enter Movie Title"
                />
            </div>
            <button
            onClick={getMovie}
                type="submit"
                class="btn btn-primary">
                Submit
            </button>
        </form>
    )
}