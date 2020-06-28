import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

Button.propTypes = {
  typeStyle: PropTypes.oneOf(['green', 'exit']),
  width: PropTypes.oneOf(['fullContainer', 'fixed']),
  radius: PropTypes.oneOf(['sm', 'lg']),
  className: PropTypes.string,
  children: PropTypes.node
};

const firstCharToUpperCase = (str) => str[0].toUpperCase() + str.slice(1);
const TryFirstCharToUpperCase = (str) => { if(str) return firstCharToUpperCase(str); }

export function Button({ typeStyle, radius, width, className, children, ...outherStyles }) {
  width = TryFirstCharToUpperCase(width);
  radius = TryFirstCharToUpperCase(radius);
  typeStyle = TryFirstCharToUpperCase(typeStyle);
  
  const ownClassName = classNames(
    'Button',
    `Button_Type_${typeStyle}`,
    { [`Button_Width_${width}`]: width },
    { [`Button_Radius_${radius}`]: radius },
    { [className]: className }
  );
  
  return (
    <button
      className={ownClassName} 
      {...outherStyles}
    >
      {children}
    </button>
  );
}
