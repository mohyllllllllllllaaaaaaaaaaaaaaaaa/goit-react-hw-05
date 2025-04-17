const MovieCard = ({movie}) =>{
    const{title, poster_path} = movie;
    const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : '/no-image.jpg';
    return (
        <div>
            <img src={imageUrl} alt={title}/>
            <h3>{title}</h3>
        </div>
    );
};
export default MovieCard;