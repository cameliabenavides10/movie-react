import { useState } from 'react';




export default function Cards({ movie }) {


    console.log(movie);
    return (
        <>
            {movie.map(movie => {
                return (
                    <div key={movie.id} className="d-inline-flex picture-cards m-2 picture-cards" >


                        <div className='container'>

                            <p style={{height:"50px"}}
                            className=" row mb-4"> {movie.original_title}</p>
                            <img
                                className='row mb-4'
                                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                class="img-fluid"
                                alt="Responsive image"
                               />

                        </div>
                    </div>
                )

            }
            )}
            {/* {url.map((url) => {
                return (
                    <>
                        {url && url.url ?
                            (<div className='container'> 
                                <div className="row d-inline-flex picture-cards m-2 picture-cards"> 
                            <img src=https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc{movie.backdrop_path}

                                class="img-fluid" alt="Responsive image" style={{ height: "270px", width: "300px" }} /> 
                          <div className="row">      
{url.caption.plainText}
</div>        
                                </div>
                                </div>):
                            (<p>"no pic</p>)
                        }
                        
                    </>
                )
            }
            )} */}



        </>
    )
}