import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import getMoviesData from "../../ApiService/ApiService";
import MovieList from "../../components/MovieList/MovieList";
import css from './MoviesPage.module.css';
import NotFoundPage from "../NotFoundPage/NotFoundPage";


const MoviesPage = () => {
const[searchParams, setSearchParams] = useSearchParams();
const[movies, setMovies] = useState([]);
const query = searchParams.get('query') || '';
const[inPutValue, setInPutValue] = useState('');

useEffect(() => {
   
    const fetchMovie = async () => {
        const data = await getMoviesData({type: 'search', query, page: 1});
        setMovies(data.results || []);
    };
    fetchMovie()
   
}, [query]);

const handelSubmit = (event) => {
    event.preventDefault();
    const trimmedValue = inPutValue.trim();
    if (!trimmedValue) {
      alert('Please enter a valid search term');
      return;
    }
  
    setSearchParams({query: trimmedValue});
};

const handelChenge = (event) => {
    setInPutValue(event.target.value);
};


return (
    
    <div className={css.container}>
  <form className={css.form} onSubmit={handelSubmit}>
    <input value={inPutValue} onChange={handelChenge} className={css.input} placeholder="Search for a movie..."/> 
    <button type="submit" className={css.button}>Search</button>
  </form>
  {query && movies.length === 0 && (<p>No movies found for your search. Try something else.</p>)}
  {movies.length > 0 && <MovieList movies={movies} />}

  </div>
);
};
export default MoviesPage;