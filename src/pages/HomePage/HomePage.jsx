import { useEffect, useState } from "react";
import getMoviesData from "../../ApiService/ApiService";
import MovieList from "../../components/MovieList/MovieList";
import style from './HomePage.module.css'
const HomePage = () => {
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const data = await getMoviesData({type: 'trending', query: '', page: 1});
            setMovies(data.results || []);
        };
        fetchTrendingMovies();
    }, []);
    return(
        <main>
            <h2 className={style.text}>Trending Today</h2>
            <MovieList movies={movies}/>
        </main>
    )
};
export default HomePage;