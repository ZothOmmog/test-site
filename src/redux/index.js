import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';

export {
  removeAllNews
} from './actions'

export {
  getMeWithNamePassThunk,
  getMeWithTokenThunk,
  removeMeThunk,
  getNewsThunk,
} from './thunks'

export const store = createStore(rootReducer, applyMiddleware(thunk));