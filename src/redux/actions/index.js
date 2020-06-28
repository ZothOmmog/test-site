//===========actionTypes===========
export const actionTypesMe = {
    SET_ME: 'SET_ME',
    REMOVE_ME: 'REMOVE_ME'
};
export const actionTypesNews = {
    SET_ONE_NEWS: 'SET_ONE_NEWS',
    REMOVE_ALL_NEWS: 'REMOVE_ALL_NEWS'
};
//=================================

//===========me===========
export const setMe = (name, mail, city, img) => ({
  type: actionTypesMe.SET_ME,
  name: name,
  mail: mail,
  city: city,
  img: img
});

export const removeMe = () => ({
  type: actionTypesMe.REMOVE_ME
});
//========================

//===========news===========
export const setOneNews = (news) => ({
  type: actionTypesNews.SET_ONE_NEWS,
  news: news
});

export const removeAllNews = () => ({
  type: actionTypesNews.REMOVE_ALL_NEWS
});
//==========================
