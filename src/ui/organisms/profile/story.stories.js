import React from 'react';
import { Profile } from './profile';

export default {
    title: 'Profile',
    components: Profile
}

export const Regular = () => (
    <Profile
        login='Admin'
        mail='admin@gmail.com'
        city='Пермь'
        img='https://img.freepik.com/free-vector/_1270-395.jpg?size=338&ext=jpg'
    />
);