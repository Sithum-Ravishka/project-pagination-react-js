import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Movie from './Post/Movie';
import useStyles from './styles';

const Movies = ({ setCurrentId }) => {
  const { movies, isLoading } = useSelector((state) => state.movies);
  const classes = useStyles();

  if (!movies.length && !isLoading) return 'No posts';

  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={1}>
        {movies?.map((movie) => (
          <Grid key={movie._id} item xs={12} sm={12} md={6} lg={3}>
            <Movie movie={movie} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Movies;
