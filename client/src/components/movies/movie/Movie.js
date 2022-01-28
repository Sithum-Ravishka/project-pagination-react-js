import { Card, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';

  const Movie = ({ movie, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const classes = useStyles();

  const openMovie = (e) => {
    // dispatch(getMovie(movie._id, history));

    navigate(`/movies/${movie._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openMovie}
      >
        <CardMedia className={classes.media} image={movie.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={movie.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{movie.name}</Typography>
          <Typography variant="body2">{moment(movie.createdAt).fromNow()}</Typography>
        </div>
        {(user?.result?.googleId === movie?.creator || user?.result?._id === movie?.creator) && (
        <div className={classes.overlay2} name="edit">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentId(movie._id);
            }}
            style={{ color: 'white' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        )}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{movie.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{movie.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{movie.message.split(' ').splice(0, 20).join(' ')}...</Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default Movie;
