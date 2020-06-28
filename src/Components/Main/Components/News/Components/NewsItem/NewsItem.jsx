import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

NewsItem.propTypes = {
  imgPath: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export function NewsItem({ imgPath, title, description }) {
  return (
    <div className="NewsItem">
      <div className='NewsItem__ImgWrapper'>
        <img className='NewsItem__Img' src={imgPath} alt="Изображение новости"/>
      </div>
      <div className="NewsItem__Body">
        <div className="NewsItem__Title">
          {title}
        </div>
        <div className="NewsItem__Description">
          {description}
        </div>
      </div>
    </div>
  );
}