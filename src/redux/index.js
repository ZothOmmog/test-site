import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';

export {
  removeMe,
  removeAllNews
} from './actions'

export {
  getMeWithNamePassThunk,
  getMeWithTokenThunk,
  getNewsThunk,
} from './thunks'

export const store = createStore(rootReducer, applyMiddleware(thunk));