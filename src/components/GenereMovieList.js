import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'


function GenereMovieList() {
  return (
    <div>
        {GenresList.genere.map((item,index)=>index<=6&&(
            <div className={`md:mt-1 p-4 px-8 md:px-16 `}>
                <h2 className='text-[20px] text-white 
                font-bold'>{item.name}</h2> 
                 <MovieList genreId={item.id} index_={index}/>
            </div>
        ))}
    </div>
  )
}

export default GenereMovieList