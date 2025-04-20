import getMoviesData from "../../ApiService/ApiService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieReviews = () =>{
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      getMoviesData({ type: 'reviews', query: movieId }).then(data => {
        setReviews(data?.results || []);
    })})
    return(
        <ul>
            {reviews.length === 0 && <li>No reviews</li>}
            {reviews.map(({id, author, content}) => (
                <li key={id}>
                    <h4>{author}</h4>
                    <p>{content}</p>
                </li>
            ))}
           
        </ul>
    );
};

export default MovieReviews;