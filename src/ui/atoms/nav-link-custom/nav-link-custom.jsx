import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './nav-link-custom.scss';
import { Link } from 'react-router-dom';

export const NavLinkCustom = ({ children, className, ...outherProps }) => (
  
  <Link
    className={classNames('link', { [className]: className })} 
    {...outherProps}
  >
    Link
  </Link>
);

NavLinkCustom.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};