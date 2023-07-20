import React from 'react'
import { useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../Services/ContextApi';

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";


function HrMovieCard({movie}) {
    const {movies, setMovies} = useContext(AppContext);
    const navigate=useNavigate();

    function showDetail(){
        navigate("/detail")
        setMovies(movie);
        
    }
    return (
            <section className='hover:scale-110 transition-all duration-150 ease-in ' onClick={showDetail}>
                <img src={IMAGE_BASE_URL + movie.backdrop_path}
                    className='w-[110px] md:w-[260px] rounded-lg
    hover:border-[3px] border-gray-400 cursor-pointer
    '/>
                <h2 className='w-[110px] md:w-[260px] text-white
    mt-2'>{movie.title.length<25 ? movie.title : movie.title.substring(0,25) + "..." }</h2>
            </section>
    )
}

export default HrMovieCard