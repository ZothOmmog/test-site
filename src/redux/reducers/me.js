import { actionTypesMe as actionTypes } from '../actions';

const initialState = {
  isAuth: false,
  name: null,
  mail: null,
  city: null,
  img: null
};

export const me = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_ME:
      return {
        isAuth: true,
        name: action.name,
        mail: action.mail,
        city: action.city,
        img: action.img
      };
    case actionTypes.REMOVE_ME:
      return initialState;
    default:
      return state;
  }
}