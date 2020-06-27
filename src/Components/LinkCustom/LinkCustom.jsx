import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';
import { Link } from 'react-router-dom';

const activeValidator = (acceptableValues) => (props, propName, componentName) => {
  let error = null;
  const propValue = props[propName];

  if(propValue) {
    if(props.type === 'withoutActive') {
      error = new Error(
        `Нельзя передавать проп ${propName} в компонент ${componentName}, когда передается проп type со значением withoutActive`
      );
    }
    else if(!acceptableValues.includes(propValue)) {
      error = new Error(
        `Значение пропа ${propName} из компонента ${componentName} должно быть одним из: ${acceptableValues.toString()}`
      );
    }
  }

  return error;
};

LinkCustom.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['green', 'transparent', 'withoutActive']),
  radius: PropTypes.oneOf(['sm', 'lg']),
  width: PropTypes.oneOf(['fullContainer', 'fixed']),
  className: PropTypes.string,
  active: activeValidator(['borderGreen', 'borderBlack']),
  children: PropTypes.node
};

const firstCharToUpperCase = (str) => str[0].toUpperCase() + str.slice(1);
const TryFirstCharToUpperCase = (str) => { if(str) return firstCharToUpperCase(str); }

export function LinkCustom({ type, radius, width, active, className, children, ...outherStyles }) {
  radius = TryFirstCharToUpperCase(radius);
  width = TryFirstCharToUpperCase(width);
  type = TryFirstCharToUpperCase(type);
  active = TryFirstCharToUpperCase(active);
  
  const ownClassName = classNames(
    'Link',
    `Link_Type_${type}`,
    { [`Link_Radius_${radius}`]: radius },
    { [`Link_Width_${width}`]: width },
    { [`Link_Active_${active}`]:  active},
    { [className]: className }
  );
  
  return (
    <Link
      className={ownClassName} 
      {...outherStyles}
    >
      {children}
    </Link>
  );
}
