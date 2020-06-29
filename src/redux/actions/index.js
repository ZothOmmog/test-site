//===========actionTypes===========
export const actionTypesMe = {
    SET_ME: 'SET_ME',
    REMOVE_ME: 'REMOVE_ME',
    SET_IS_lOADING: 'SET_IS_lOADING'
};
export const actionTypesNews = {
    SET_ONE_NEWS: 'SET_ONE_NEWS',
    REMOVE_ALL_NEWS: 'REMOVE_ALL_NEWS',
    SET_IS_lOADING: 'SET_IS_lOADING'
};
//=================================

//===========me===========
export const setMe = ({ name, mail, city, img }) => ({
  type: actionTypesMe.SET_ME,
  name: name,
  mail: mail,
  city: city,
  img: img
});

export const removeMe = () => ({
  type: actionTypesMe.REMOVE_ME
});

export const setIsLoading = (isLoading) => ({
  type: actionTypesMe.SET_IS_lOADING,
  isLoading: isLoading
});
//========================

//===========news===========
export const setNews = (news) => ({
  type: actionTypesNews.SET_ONE_NEWS,
  items: news
});

export const removeAllNews = () => ({
  type: actionTypesNews.REMOVE_ALL_NEWS
});
//==========================
