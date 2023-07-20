import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Services/ContextApi';


const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";


function MovieCard({movie}) {
    const {movies, setMovies} = useContext(AppContext);
    const navigate=useNavigate();

    function showDetail(){
        navigate("/detail")
        setMovies(movie);
        
    }
  return (
    <div className='hover:scale-110 transition-all duration-150 ease-in' onClick={showDetail}>
        <img src={IMAGE_BASE_URL+movie.poster_path} 
        className='w-[110px] md:w-[200px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in'/>
        <h2 className='w-[110px] md:w-[200px] text-white mt-5'>{movie.title.length<25 ? movie.title : movie.title.substring(0,25) + "..." }</h2>
    </div>
  )
}

export default MovieCard