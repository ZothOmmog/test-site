import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

export const ButtonExit = ({ children, className, onClick, ...outherProps }) => (
  <button
    className={classNames(
        'button-exit',
        { [className]: className }
    )}
    onClick={onClick}
    {...outherProps}
  >
    {children}
  </button>
);

ButtonExit.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};