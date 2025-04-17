import getMoviesData from './ApiService/ApiService';
import { useEffect } from 'react';
import './App.css'

function App() {
  useEffect(() => {
    getMoviesData({ type: 'search', query: 'avatar' });
  }, []);
  return (
    <div>
      <h1>Movies App</h1>
    </div>
  );
}

export default App
