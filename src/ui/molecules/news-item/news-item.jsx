import React from 'react';
import {
    NewsBody,
    NewsItemWrapper
} from '@ui/atoms';

export const NewsItem = ({ imgPath, title, description }) => (
    <NewsItemWrapper>
        <NewsBody 
            imgPath={imgPath}
            description={description}
            title={title}
        />
    </NewsItemWrapper>
);