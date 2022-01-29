import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchMovie = (id) => API.get(`/movies/${id}`);
export const fetchMovies = (page) => API.get(`/movies?page=${page}`);
export const fetchMoviesByCreator = (name) => API.get(`/movies/creator?name=${name}`);
export const fetchMoviesBySearch = (searchQuery) => API.get(`/movies/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createMovie = (newMovie) => API.post('/movies', newMovie);
export const likeMovie = (id) => API.patch(`/movies/${id}/likeMovie`);
export const comment = (value, id) => API.post(`/movies/${id}/commentMovie`, { value });
export const updateMovie = (id, updatedMovie) => API.patch(`/movies/${id}`, updatedMovie);
export const deleteMovie = (id) => API.delete(`/movies/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
