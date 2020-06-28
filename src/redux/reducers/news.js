import { actionTypesNews as actionTypes } from '../actions';

const initialState = [];

export const news = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_ONE_NEWS:
      return [
        ...state,
        action.news
      ];
    case actionTypes.REMOVE_ALL_NEWS:
      return initialState;
    default:
      return state;
  }
}