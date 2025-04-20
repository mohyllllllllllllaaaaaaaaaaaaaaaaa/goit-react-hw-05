import axios from "axios";

const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
const getMoviesData = async ({type, query, page = 1}) => {
    const options = {
        headers: {
            accept: 'application/json',
          Authorization: API_TOKEN
        }
      };
      let url = '';
      switch(type){
        case 'trending':
          url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`;
          break;
        case 'search':
          url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=${page}`;
          break;
        case 'id':
          url = `https://api.themoviedb.org/3/movie/${query}?language=en-US`;
          break;
        case 'cast':
          url = `https://api.themoviedb.org/3/movie/${query}/credits?language=en-US`;
          break;
        case 'reviews':
          url = `https://api.themoviedb.org/3/movie/${query}/reviews?language=en-US`;
          break;
            default:
                console.warn('Unknown request type');
                return null;
      }

      try{
        const response = await axios.get(url, options);
     
        return response.data;
      }catch(error){
console.error('Error fetching data:', error);
return null;
      }
      
     
};

export default getMoviesData;