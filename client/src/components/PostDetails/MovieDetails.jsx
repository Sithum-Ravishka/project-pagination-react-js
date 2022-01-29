import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';

import { getMovie, getMoviesBySearch } from '../../actions/movies';
import CommentSection from './CommentSection';
import useStyles from './styles';

const Post = () => {
  const { movie, movies, isLoading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovie(id));
  }, [id]);

  useEffect(() => {
    if (movie) {
      dispatch(getMoviesBySearch({ search: 'none', tags: movie?.tags.join(',') }));
    }
  }, [movie]);

  if (!movie) return null;

  const openMovie = (_id) => history.push(`/movies/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = movies.filter(({ _id }) => _id !== movie._id);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{movie.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{movie.tags.map((tag) => (
            <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` #${tag} `}
            </Link>
          ))}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">{movie.message}</Typography>
          <Typography variant="h6">
            Created by:
            <Link to={`/creators/${movie.year}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` ${movie.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">{moment(movie.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <CommentSection movie={movie} />
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={movie.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={movie.title} />
        </div>
      </div>
      {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openMovie(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={selectedFile} width="200px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Post;
