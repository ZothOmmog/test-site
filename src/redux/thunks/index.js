import {
  GET_ME_FROM_SERVER_IF_LOGIN,
  GET_ME_FROM_SERVER_IF_TOKEN,
  GET_NEWS_FROM_SERVER
} from '../../MOCK_DATA';

import {
  setMe,
  removeMe,
  setOneNews
} from '../actions';

//===========me===========
export const getMeWithTokenThunk = () => async (dispatch) => {
  const token = localStorage.getItem('me');
  let me;

  if (
    token
  ) me = await GET_ME_FROM_SERVER_IF_TOKEN(token);

  if(!me) return false;

  dispatch(
    setMe(me)
  );
  return true;
};

export const getMeWithNamePassThunk = (name, password) => async (dispatch) => {
  const me = await GET_ME_FROM_SERVER_IF_LOGIN(name, password);

  if(!me) return false;

  dispatch(
    setMe(me)
  );
  return true;
};

export const removeMeThunk = () => async (dispatch) => {
  localStorage.removeItem('me');

  dispatch(
    removeMe()
  );
  return true;
};
//========================

//===========news===========
export const getNewsThunk = () => async (dispatch) => {
  let news;

  news =  GET_NEWS_FROM_SERVER();
  dispatch(
    setOneNews(news)
  );

  news =  GET_NEWS_FROM_SERVER();
  dispatch(
    setOneNews(news)
  );

  news =  GET_NEWS_FROM_SERVER();
  dispatch(
    setOneNews(news)
  );

  news =  GET_NEWS_FROM_SERVER();
  dispatch(
    setOneNews(news)
  );

  return true;
};
//==========================
