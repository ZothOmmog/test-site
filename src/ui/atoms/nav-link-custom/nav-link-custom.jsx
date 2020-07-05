import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';
import { Link } from 'react-router-dom';

export const NavLinkCustom = ({ children, className, ...outherProps }) => (
  
  <Link
    className={classNames('link', { [className]: className })} 
    {...outherProps}
  >
    {children}
  </Link>
);

NavLinkCustom.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
