import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_MOVIE, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, movies: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        movies: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, movies: action.payload.data };
    case FETCH_MOVIE:
      return { ...state, movie: action.payload.movie };
    case LIKE:
      return { ...state, movies: state.movies.map((movie) => (movie._id === action.payload._id ? action.payload : movie)) };
    case COMMENT:
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie._id == +action.payload._id) {
            return action.payload;
          }
          return movie;
        }),
      };
    case CREATE:
      return { ...state, movies: [...state.movies, action.payload] };
    case UPDATE:
      return { ...state, movies: state.movies.map((movie) => (movie._id === action.payload._id ? action.payload : movie)) };
    case DELETE:
      return { ...state, movies: state.movies.filter((movie) => movie._id !== action.payload) };
    default:
      return state;
  }
};

