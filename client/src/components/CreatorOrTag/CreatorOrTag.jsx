import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Typography, CircularProgress, Grid, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Movie from '../Posts/Post/Movie';
import { getMoviesBySearch } from '../../actions/movies';

const CreatorOrTag = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { movies, isLoading } = useSelector((state) => state.movies);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/tags')) {
      dispatch(getMoviesBySearch({ tags: name }));
    } else {
      
    }
  }, [name]);

  if (!movies.length && !isLoading) return 'No posts';

  return (
    <div>
      <Typography variant="h2">{name}</Typography>
      <Divider style={{ margin: '20px 0 50px 0' }} />
      {isLoading ? <CircularProgress /> : (
        <Grid container alignItems="stretch" spacing={3}>
          {movies?.map((movie) => (
            <Grid key={movie._id} item xs={12} sm={12} md={6} lg={3}>
              <Movie movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CreatorOrTag;
