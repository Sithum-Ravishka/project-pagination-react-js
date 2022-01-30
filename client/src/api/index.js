import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const fetchMovie = (id) => API.get(`/movies/${id}`);
export const fetchMovies = (page) => API.get(`/movies?page=${page}`);
export const fetchMoviesBySearch = (searchQuery) => API.get(`/movies/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

