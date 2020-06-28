import React from 'react';
import PropTypes from 'prop-types';
import ClassName from 'classnames';
import './index.scss';

Navigation.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string
};

export function Navigation({ children, className }) {
  const ownClassName = ClassName(
    'Navigation',
    { [className]: className }
  );

  const navListItems = children.map((navItem, index) => (
    <li key={index} className='NavList__Item'>{navItem}</li>
  ));

  return (
    <nav className={ownClassName}>
      <ul className='NavList'>
        {navListItems}
      </ul>
    </nav>
  );
}