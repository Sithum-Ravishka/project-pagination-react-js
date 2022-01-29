import { combineReducers } from 'redux';

import movies from './movies';
import auth from './auth';

export const reducers = combineReducers({ movies, auth });
