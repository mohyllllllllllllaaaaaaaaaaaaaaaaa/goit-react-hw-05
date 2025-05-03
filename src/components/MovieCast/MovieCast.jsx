import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getMoviesData from "../../ApiService/ApiService";
import css from './MovieCast.module.css';

const MoviesCast = () => {
    const {movieId} = useParams();
    const[cast, setCast] = useState([]);
   
    useEffect(() => {
        const fetchCast = async () => {
            const data = await getMoviesData({type: 'cast', query: movieId});
            setCast(data?.cast || []);
        };
        fetchCast();
    },[movieId]);
    return (
        <div>
            <h3 className={css.headline}>Cast</h3>
            <ul className={css.castlist}>
                {cast.map((actor) => (
                    <li className={css.item} key={actor.id}>
                        <img src={actor.profile_path
                     ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                     : '/no-image.jpg'} alt={actor.name} width="140" className={css.image}/>
                        <p className={css.casttext}><strong>{actor.name}</strong> as {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default MoviesCast;