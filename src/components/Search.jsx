import { useState, useEffect } from "react";
import axios from 'axios'
import Cards from './Cards';



export default function Search() {
    // our rerendering search term letters
    const [movieSearch, setMovieSearch] = useState('');
    console.log(movieSearch);
    // the rerendering title which is used in the fetching 
    const [movieTitle, setMovieTitle] = useState('');
    // movie data variable
    const [movie, setMovie] = useState([])



    // setting the movie title function 
    function handleSubmit(e) {
        e.preventDefault();
        setMovieTitle(movieSearch);
        setMovieSearch('');
    }
    console.log(movieTitle);



    // using axios to fetch movie api data
    useEffect(() => {
        const getMovie = async () => {
            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDhlMzMxZGM4NmI3MjlhZmI0ZjVmNzYzYThkNjRmNiIsInN1YiI6IjY0NzY3MDM1MjU1ZGJhMDEwODQxMDkwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vg_NToRT58vYoUWqG25XsMzVKEJINL0GmLdiO6P5C1w'
                }
            };
            try {
                const response = await axios.request(options);
                {
                    setMovie(response.data.results);
                }
            } catch (error) {
                console.error(error);
            }
        }
        if (movieTitle) {
            getMovie();
        }
    }, [movieTitle]);

    // console.log(movieTitle);


    return (
        <>
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

                    type="submit"
                    class="btn btn-primary">
                    Submit
                </button>
            </form>
            <Cards movie={movie} />
        </>
    )
}