import React from 'react';
import './index.scss';
import { Navigation } from '../../../Navigation';
import { Button } from '../../../Button';

const MOCK_DATA = {
  name: 'Admin',
  mail: 'admin@gmail.com',
  city: 'Пермь',
  img: 'https://bit.ly/2A9ZpYE'
}

export function ProfileView() {
  return (
    <div className='ProfileView'>
      <div className="ProfileView__OutherWrapper">
        <div className="ProfileView__InnerWrapper">
          <div className="ProfileView__Header">
            <div className="ProfileView__ImgWarpper">
              <img className='ProfileView__Img' src={MOCK_DATA.img} alt="Изображение профиля"/>
            </div>
            <div className="ProfileView__Name">
              {MOCK_DATA.name}
            </div>
          </div>
          <div className="ProfileView__Navigation">
            <Navigation>
            <div className='ProfileView__NavigationInfoOutherWrapper'>
              <div className='ProfileView__NavigationInfo'>
                Информация
              </div>
            </div>
            <Button
              typeStyle='exit'
            >
              Выход
            </Button>
            </Navigation>
          </div>
          <div className="ProfileView__Info">
            <div className="ProfileView__InfoItem">
              <div className="ProfileView__InfoItemTitle">Email</div>
              <div className="ProfileView__InfoItemDescription">{MOCK_DATA.mail}</div>
            </div>
            <div className="ProfileView__InfoItem">
              <div className="ProfileView__InfoItemTitle">City</div>
              <div className="ProfileView__InfoItemDescription">{MOCK_DATA.city}</div>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}