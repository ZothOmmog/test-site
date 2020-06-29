import { actionTypesNews as actionTypes } from '../actions';

const initialState = {
  isLoading: false,
  items: []
};

export const news = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_ONE_NEWS:
      return {
        ...state,
        items: [
        ...state.items,
        action.news
      ]};
    case actionTypes.REMOVE_ALL_NEWS:
      return initialState;
    case actionTypes.SET_IS_lOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
}