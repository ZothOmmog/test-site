import React from 'react';
import { NewsItem } from './news-item';

export default {
    title: 'NewsItem',
    component: NewsItem
}

export const Redular = () => (
    <NewsItem
        imgPath='https://st.depositphotos.com/1152339/1972/i/450/depositphotos_19723583-stock-photo-news-concept-news-on-digital.jpg'
        description='Описание данной новости'
        title='Новость'
    />
);