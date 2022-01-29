import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { getMoviesBySearch } from '../../actions/movies';
import Movies from '../Posts/Movies';
import Pagination from '../Pagination';
import "./home.scss";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [ setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags] = useState([]);
  const history = useHistory();

  const searchMovie = () => {
    if (search.trim() || tags) {
      dispatch(getMoviesBySearch({ search, tags: tags.join(',') }));
      history.push(`/movies/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchMovie();
    }
  };

  return (

    <div className='main-content'>
      <div className='content'>
      <div className='search'>
        <span >
          <input onKeyDown={handleKeyPress} className='serInput'  placeholder="Search" name="search" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
        </span> 
        <span >  
          <button onClick={searchMovie} className='searchButton'>Search</button>
        </span>
        </div>
        <div className='movie'>
            <Movies setCurrentId={setCurrentId} />
        </div>
      

        {(!searchQuery && !tags.length) && (
          <div className='pag'>
            <Pagination page={page} />
          </div>
        )}
        </div>
    </div>
  );
};

export default Home;
