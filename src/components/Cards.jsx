import { useState } from 'react';




export default function Cards({ movie, url }) {


    console.log(url);
    return (
        <>
            {/* {movie.map(movie => {
                return (
                    <div key={movie.id} className="d-inline-flex picture-cards m-2 picture-cards" >

                        <div >

                            <div className="mb-4">
                                {movie.originalTitleText.text}
                            </div>
                        </div>
                    </div>
                )

            }
            )} */}
            {url.map((url) => {
                return (
                    <>
                        {url && url.url ?
                            (<div className='container'> 
                                <div className="row d-inline-flex picture-cards m-2 picture-cards"> 
                            <img src={url.url}

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
            )}



        </>
    )
}