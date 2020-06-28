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
  let me;

  if (
    token
  ) me = await GET_ME_FROM_SERVER_IF_TOKEN(token);

  if (!me) {
    dispatch(
      setIsLoading(false)
    );

    return;
  }

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

  dispatch(
    setMe(me)
  );

  dispatch(
    setIsLoading(false)
  );
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
