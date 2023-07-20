import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Services/ContextApi'
import playwhite from "./../assets/images/play-icon-white.png"
import playblack from "./../assets/images/play-icon-black.png"
import groupicon from "./../assets/images/group-icon.png"
import imdb from "./../assets/images/imdb.png"
import Header from './Header'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Detail() {

  const {user,setUser} = useContext(AppContext)

  const { movies } = useContext(AppContext);
  console.log(movies)
  const ndate=movies.release_date

  const [year, month, day] = ndate.split('-');
  
  
  return (
    <div>
      <Header/>
      <div className='relative'>
      <div className='fixed top-0 left-0 right-0 bottom-0 z-[-1] opacity-30'>
        <img src={IMAGE_BASE_URL + movies.poster_path} className='w-[100vw] h-[100vh] object-cover' />
      </div>
      <div>
        <div className='w-3/4 md:h-[500px] md:w-1/3  absolute md:left-44 left-16 top-10 hover:scale-110 transition-all duration-150 ease-in z-[2]' >
          < img src={IMAGE_BASE_URL + movies.backdrop_path} className=' w-full h-full object-cover rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-80 transition-all duration-150 ease-in z-[50]'/>
        </div>
        <div className='flex flex-col gap-y-4 md:gap-y-6 absolute mr-20 md:left-1/2 md:top-20 top-60 left-16 w-72 md:w-96'>
          <div >
            <h2 className=' text-xl md:text-3xl font-semibold font-mono'>{movies.original_title}</h2>
          </div>
          <div >
            <h4 className=' text-xs  font-light '> {movies.overview}</h4>
          </div>
          <div className='flex gap-x-8  ' >
            <button className='flex items-center justify-center bg-white w-16 h-8 md:w-28 md:h-10 rounded-md'>
              <img src={playblack} className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]"/>
              <span className='text-black text-xs font-semibold'>PLAY</span>
            </button>
            <button className='flex items-center justify-center bg-transparent w-20 h-8 md:w-32 md:h-10  border-solid border-2 border-white rounded-md'>
              <img src={playwhite}  className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]"/>
              <span className='text-xs font-semibold'>TRAILER</span>
            </button>
            <button className='flex items-center justify-center bg-black   border-solid border-2 border-white rounded-full'>
              <img src={groupicon} className="w-[30px] h-[20px]  md:w-[40px] md:h-[40px]"/>
            </button>
          </div>
          <div >
            <h3 className='text-sm md:text-xl font-semibold font-mono'>Released on {day}-{month}-{year}</h3>
          </div>
          <div className='flex items-center gap-x-4'>
            <img src={imdb} className='w-14 md:w-20'/>
            <span className='text-sm font-mono border-solid border-2 border-white pl-3 pr-3 rounded-md'>{movies.vote_average}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Detail