import {
  GET_ME_FROM_SERVER_IF_LOGIN,
  GET_ME_FROM_SERVER_IF_TOKEN,
  GET_NEWS_FROM_SERVER
} from '../../MOCK_DATA';

import {
  setMe,
  setIsLoading,
  setOneNews
} from '../actions';

//===========me===========
export const getMeWithTokenThunk = () => async (dispatch) => {
  dispatch(
    setIsLoading(true)
  );

  const token = localStorage.getItem('me');

  if (!token) {
    dispatch(
      setIsLoading(false)
    );

    return;
  } 
  
  const me = await GET_ME_FROM_SERVER_IF_TOKEN(token);

  dispatch(
    setMe(me)
  );

  dispatch(
    setIsLoading(false)
  );
};

export const getMeWithNamePassThunk = (name, password) => async (dispatch) => {
  dispatch(
    setIsLoading(true)
  );

  const me = await GET_ME_FROM_SERVER_IF_LOGIN(name, password);
  
  if (!me) {
    dispatch(
      setIsLoading(false)
    );
    return false;
  }

  const { token, ...meForSate } = me;
  localStorage.setItem('me', token);

  dispatch(
    setMe(meForSate)
  );

  dispatch(
    setIsLoading(false)
  );

  return true;
};
//========================

//===========news===========
export const getNewsThunk = () => async (dispatch) => {
  dispatch(
    setIsLoading(true)
  );

  let news;

  news = await GET_NEWS_FROM_SERVER();
  dispatch(
    setOneNews(news)
  );

  news = await GET_NEWS_FROM_SERVER();
  dispatch(
    setOneNews(news)
  );

  news = await GET_NEWS_FROM_SERVER();
  dispatch(
    setOneNews(news)
  );

  news = await GET_NEWS_FROM_SERVER();
  dispatch(
    setOneNews(news)
  );

  dispatch(
    setIsLoading(false)
  );
};
//==========================
