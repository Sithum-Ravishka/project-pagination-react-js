import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './movie/Movie';
import useStyles from './styles';

const Movies = ({ setCurrentId }) => {
  const { movies, isLoading } = useSelector((state) => state.movies);
  const classes = useStyles();

  if (!movies.length && !isLoading) return 'No Movies';

  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {movies?.map((Movie) => (
          <Grid key={Movie._id} item xs={12} sm={12} md={6} lg={3}>
            <Post Movie={Movie} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Movies;
