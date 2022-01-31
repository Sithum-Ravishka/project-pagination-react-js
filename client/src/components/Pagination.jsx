/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import { getMovies } from '../actions/movies';
import './pagination.scss';

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) {
      dispatch(getMovies(page));
    }
  }, [dispatch, page]);

  return (
    <div className='pag-bl'>
    <Pagination 
      className= 'ul'
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem className='item' {...item} component={Link} to={`/movies?page=${item.page}`} />
      )}
    />
    </div>
  );
};

export default Paginate;
