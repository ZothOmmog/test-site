import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './style.scss';
import { NavLinkCustom } from '@ui/atoms';

export const NavLinkColored = ({ children, className, active, ...outherProps }) => (
  <NavLinkCustom
    className={ClassNames(
      'nav-link-colored', 
      {'nav-link-colored_active': active },
      { [className]: className }
    )}
    {...outherProps}
  >
    {children}
  </NavLinkCustom>
);

NavLinkColored.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool
};