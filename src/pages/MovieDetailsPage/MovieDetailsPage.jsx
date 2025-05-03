import { useEffect, useState, useRef } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import getMoviesData from "../../ApiService/ApiService";
import css from './MovieDetailsPage.module.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { IoIosText } from "react-icons/io";

const MovieDetailsPage = () => {
const {movieId} = useParams();
const location = useLocation();
const[movie, setMovie] = useState(null);
const backLinkRef = useRef(location.state?.from || '/movies');

useEffect(() => { 
    getMoviesData({ type: 'id', query: movieId }).then(setMovie);
},[movieId]);
if(!movie) return <p>Loading...</p>

const genres = movie.genres ? movie.genres.map(genre => genre.name).join(', ') : 'N/A';
return (
    <>
    <Link to={backLinkRef.current} className={css.linkback}>< IoMdArrowRoundBack className={css.backicon}/>Go back</Link>
    <h2 className={css.title}>{movie.title}</h2>
    <div className={css.headcard}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width="260" className={css.poster}/>
            <span className={css.infomatio}>
            <h4 >User score: {movie.vote_average * 10}%</h4>
            <h4 >Genres: {genres}</h4> 
            <h4 >Overview:</h4>
            <p>{movie.overview}</p> 
            </span>
            </div>
      <ul className={css.infolist}>
        <li><Link to="cast" state={{ from: backLinkRef }} className={css.link}><IoMdPeople className={css.navicon}/>Cast</Link></li>
        <li><Link to="reviews" state={{ from: backLinkRef }} className={css.link}><IoIosText className={css.navicon}/>Reviews</Link></li>
      </ul>
      <Outlet />
    </>
)

};
export default MovieDetailsPage;