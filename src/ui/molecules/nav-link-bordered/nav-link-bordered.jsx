import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './style.scss';
import { NavLinkCustom } from '@ui/atoms';

export const NavLinkBordered = ({ children, className, active, ...outherProps }) => (
  <NavLinkCustom 
    className={ClassNames(
      'nav-link-bordered', 
      {'nav-link-bordered_active': active },
      { [className]: className }
    )}
    {...outherProps}
  >
    {children}
  </NavLinkCustom>
);

NavLinkBordered.propTypes = {
  className: PropTypes.string.isRequired,
  active: PropTypes.bool
};