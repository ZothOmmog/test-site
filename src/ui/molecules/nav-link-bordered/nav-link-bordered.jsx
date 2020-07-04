import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './nav-link-bordered.scss';
import { NavLinkCustom } from '@ui';

export const NavLinkBordered = ({ children, className, ...outherProps }) => (
  <NavLinkCustom 
    className={ClassNames(
      'nav-link-bordered', 
      { [className]: className }
    )}
    {...outherProps}
  >
    {children}
  </NavLinkCustom>
);

NavLinkBordered.propTypes = {
  className: PropTypes.string.isRequired
};