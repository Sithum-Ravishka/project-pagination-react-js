import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';

import { createMovie, updateMovie } from '../../actions/movies';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [movieData, setPostData] = useState({ title: '', message: '', tags: [], selectedFile: '' });
  const movie = useSelector((state) => (currentId ? state.movies.movies.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: [], selectedFile: '' });
  };

  useEffect(() => {
    if (!movie?.title) clear();
    if (movie) setPostData(movie);
  }, [movie]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createMovie({ ...movieData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updateMovie(currentId, { ...movieData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  const handleAddChip = (tag) => {
    setPostData({ ...movieData, tags: [...movieData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({ ...movieData, tags: movieData.tags.filter((tag) => tag !== chipToDelete) });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${movie?.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={movieData.title} onChange={(e) => setPostData({ ...movieData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={movieData.message} onChange={(e) => setPostData({ ...movieData, message: e.target.value })} />
        <div style={{ padding: '5px 0', width: '94%' }}>
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={movieData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...movieData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
