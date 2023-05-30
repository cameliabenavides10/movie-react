import { useState } from "react";
import axios from 'axios'
import Cards from './Cards';





export default function Search() {
    // // our rerendering search term letters
    // const [movieSearch, setMovieSearch] = useState('');
    // console.log(movieSearch);
    // // the rerendering title which is used in the fetching 
    // const [movieTitle, setMovieTitle] = useState('');
    // // movie data variable
    const [popularMovie, setPopularMovie] = useState([])

    // setting the movie title function 
    function handleSubmit(e) {
        e.preventDefault();
    
    }
    
    // using axios to fetch movie api data
    const getMovie = async () => {

        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en&page=1&sort_by=popularity.desc',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDhlMzMxZGM4NmI3MjlhZmI0ZjVmNzYzYThkNjRmNiIsInN1YiI6IjY0NzY3MDM1MjU1ZGJhMDEwODQxMDkwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vg_NToRT58vYoUWqG25XsMzVKEJINL0GmLdiO6P5C1w'
          }
        };
        
       try{
          const response= await axios.request(options);
          { setPopularMovie(response.data.results);
            console.log(response.data); }
        } catch (error) {
            console.error(error);
          }
        }




    return (
        <>  
        <form
            type="submit"
            onSubmit={handleSubmit}>
            <div class="form-group mb-3 w-25 p-3 mx-auto">
                <label for="exampleInputEmail1">Need Suggestions?</label>
                {/* <input
                    value={movieSearch}
                    onChange={(e) => setMovieSearch(e.target.value)}
                    type="text"
                    label="exampleInputEmail1"
                    class="form-control"
                    placeholder="Enter Movie Title"
                /> */}
            </div>
            <button
                onClick={getMovie}
                type="submit"
                class="btn btn-primary">
                Yes!
            </button>
        </form>
      <Cards movie={popularMovie} />
        </> 
    )
    }