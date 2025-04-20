
import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";


const MovieList = ({movies}) => {
    const location = useLocation(); 
    return(
        <ul className={css.movieList}>
            {movies.map(({ id, title, poster_path }) => {
                const imageUrl = poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : '/no-image.jpg';
                return (
                    <li key={id} className={css.item}>
                   <Link to={`/movies/${id}`} state={{from: location}}>
                   <img src={imageUrl} alt={title} className={css.poster}/>
                   <h2 className={css.title}>{title}</h2>
                   </Link>     
                    </li>
                );              
           })}
        </ul>
    );
};
export default MovieList