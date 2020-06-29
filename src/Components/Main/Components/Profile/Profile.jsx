import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Navigation } from '../../../Navigation';
import { Button } from '../../../Button';
import { connect } from 'react-redux';
import { removeMe } from '../../../../redux';

ProfileView.propType = {
  name: PropTypes.string,
  mail: PropTypes.string,
  city: PropTypes.string,
  img: PropTypes.string,
  removeMe: PropTypes
}

export function ProfileView({ name, mail, city, img, removeMe }) {
  return (
    <div className='ProfileView'>
      <div className="ProfileView__OutherWrapper">
        <div className="ProfileView__InnerWrapper">
          <div className="ProfileView__Header">
            <div className="ProfileView__ImgWarpper">
              <img className='ProfileView__Img' src={img} alt="Изображение профиля"/>
            </div>
            <div className="ProfileView__Name">
              {name}
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
              onClick={removeMe}
            >
              Выход
            </Button>
            </Navigation>
          </div>
          <div className="ProfileView__Info">
            <div className="ProfileView__InfoItem">
              <div className="ProfileView__InfoItemTitle">Email</div>
              <div className="ProfileView__InfoItemDescription">{mail}</div>
            </div>
            <div className="ProfileView__InfoItem">
              <div className="ProfileView__InfoItemTitle">City</div>
              <div className="ProfileView__InfoItemDescription">{city}</div>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.me.name,
  mail: state.me.mail,
  city: state.me.city,
  img: state.me.img
});

export const Profile = connect(mapStateToProps, { removeMe })(ProfileView);