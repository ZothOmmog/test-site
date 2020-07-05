import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const MainPage = ({ Header, MainBody }) => (
    <div className="main-page">
        <div className="main-page__header">
            <Header />
        </div>
        <div className="main-page__body">
            <MainBody />
        </div>
    </div>
);

MainPage.propTypes = {
    Header: PropTypes.node.isRequired,
    MainBody: PropTypes.node.isRequired
};