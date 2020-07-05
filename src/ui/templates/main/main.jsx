import React from 'react';
import './style.scss';

export const MainPage = ({ Header, MainBody }) => (
    <div className="main-page">
        <Header />
        <div className="main-page__body">
            <MainBody />
        </div>
    </div>
);