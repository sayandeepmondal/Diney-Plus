import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function SliderNew() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrending.then(resp => {
            setMovieList(resp.data.results)
        })
    }

    let settings= {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    }


    return (
        <Slider {...settings} className='overflow-hidden'>




            {movieList.map((item) => (
                <div className='mb-[10px]  w-full '>
                    <img src={IMAGE_BASE_URL + item.backdrop_path}
                    className='min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in'/>
                </div>
            ))}

        </Slider>
    )
}

export default SliderNew