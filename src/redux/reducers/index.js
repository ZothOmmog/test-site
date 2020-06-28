import { combineReducers }  from 'redux';
import { me } from './me';
import { news } from './news';

export const rootReducer = combineReducers({ me, news });
