import axios from "axios";

const movieUrl="https://api.themoviedb.org/3"
const api_key=process.env.REACT_APP_MOVIES_API

const movieByGenreBaseURL=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`

const getTrending=axios.get(movieUrl+"/trending/all/day?api_key="+api_key);

const getMoviebyGenreId=(id)=>
axios.get(movieByGenreBaseURL+"&with_genres="+id);

export default {
    getTrending,
    getMoviebyGenreId

}

