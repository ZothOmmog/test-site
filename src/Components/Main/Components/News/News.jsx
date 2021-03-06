import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { NewsItem } from './Components';
import { NewsItemWrapper } from './Components';
import { connect } from 'react-redux';
import { getNewsThunk, removeAllNews } from '../../../../redux';
import { Preloader } from '../../../Preloader';

NewsView.propTypes = {
  isLoading: PropTypes.bool,
  items: PropTypes.array,
  getNewsThunk: PropTypes.func,
  removeAllNews: PropTypes.func
}

export function NewsView({ isLoading, items, getNewsThunk, removeAllNews }) {

  useEffect(() => {
    getNewsThunk();
    return removeAllNews;
  }, [getNewsThunk, removeAllNews]);

  const news = items.map(item => (
    <div key={item.id} className='News__Item'>
      <NewsItemWrapper>
        <NewsItem
          imgPath={item.imgPath}
          title={item.title}
          description={item.description}
        />
      </NewsItemWrapper>
    </div>
  ));

  return (
    <div className='News'>
      {news}
      {isLoading ? <div className="News__Preloader"><Preloader /></div> : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.news.isLoading,
  items: state.news.items
});

export const News = connect(mapStateToProps, { getNewsThunk, removeAllNews })(NewsView);