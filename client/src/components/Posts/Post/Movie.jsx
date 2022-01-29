import React, { useState } from 'react';
import { CardActions, CardContent, Button  } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory, Link } from 'react-router-dom';
import { AccessTimeOutlined, Folder } from "@material-ui/icons"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './movie.scss'

import { likeMovie } from '../../../actions/movies';

const Movie = ({ movie, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(movie?.likes);
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = movie.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likeMovie(movie._id));

    if (hasLikedPost) {
      setLikes(movie.likes.filter((id) => id !== userId));
    } else {
      setLikes([...movie.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  const openMovie = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`/movies/${movie._id}`);
  };

  return (
    <div className='card'>
      <div className='cardAction'>
        <div >
          <img className="image" src={movie.selectedFile} alt=''  onClick={openMovie}/>
        </div>
        <div className='overlay'>
          <span className='title' onClick={openMovie}>{movie.title}</span>
          <span className='cre'>Creator: {movie.name}</span>
          <span className='time'><AccessTimeOutlined className='accTimeIcon'/>{moment(movie.createdAt).fromNow()}</span>
        </div>
      </div>
        <div>
          <span className='tags'><Folder className='tgFloder'/>{movie.tags.map((tag) => (
            <Link to={`/tags/${tag}`}  className='details'>
              {` ${tag}, `}
            </Link>))}
            </span>
        </div>
       
      <div className='cont'>
        <span className='desc' onClick={openMovie}>{movie.message.split(' ').splice(0, 15).join(' ')} ...</span>
        
        
      </div> 
    </div>
  );
};

export default Movie;
