import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './index.scss';

NewsItemWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element
};

export function NewsItemWrapper({ className, children }) {
  const ownClassName = ClassNames('NewsItemWrapper', { [className]: className });

  return (
    <div className={ownClassName}>
      <div className="NewsItemWrapper__InnerWrapper">
        {children}
      </div>
    </div>
  );
}