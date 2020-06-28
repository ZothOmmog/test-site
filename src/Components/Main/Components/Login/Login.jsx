import React from 'react';
import './index.scss';
import logo from '../../../../img/logo.png';
import { Button } from '../../../Button';

export function Login() {
  const submit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='Login'>
      <div className='Login__Left'>
        <div className="Login__LoginFormWrapper">
          <div className='LoginForm'>
            <div className='LoginForm__LogoWrapper'>
              <img className='LoginForm__Logo' src={logo} alt='Логотип' />
            </div>
            <h2 className="LoginForm__Title">Профиль</h2>
            <form onSubmit={submit}>
                <input type="text" className="LoginForm__Input" placeholder='Логин'/>
                <input type="password" className="LoginForm__Input" placeholder='Пароль'/>
                <Button 
                  typeStyle="green"
                  radius="lg"
                  width="fixed"
                  type='submit'
                  className="LoginForm__Submit"
                >
                  Войти
                </Button>
            </form>
          </div>
        </div>
      </div>
      <div className='Login__Right'></div>
    </div>
  );
}
