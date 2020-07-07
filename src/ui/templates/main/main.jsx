import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const MainTemplate = ({ children }) => (
    <div className="main-page">
        {children[0]}
        <div className="main-page__body">
            {children[1]}
        </div>
    </div>
);

MainTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.ele)
};