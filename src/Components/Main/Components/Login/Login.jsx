import React from 'react';
import './index.scss';
import logo from '../../../../img/logo.png';
import ClassNames from 'classnames';
import { Button } from '../../../Button';
import { Formik } from 'formik';

export function Login() {
  return (
    <div className='Login'>
      <div className='Login__Left'>
        <div className='Login__LoginFormWrapper'>
          <div className='LoginForm'>
            <div className='LoginForm__LogoWrapper'>
              <img className='LoginForm__Logo' src={logo} alt='Логотип' />
            </div>
            <h2 className='LoginForm__Title'>Профиль</h2>
            <Formik
              initialValues={{ login: '', password: '' }}
              validate={(values) => {
                const errors = {};

                if (!values.login) {
                  errors.login = 'Обязательно для заполнения';
                }

                if (!values.password) {
                  errors.password = 'Обязательно для заполнения';
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                }, 2000);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type='text'
                    name='login'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.login}
                    className={ClassNames(
                      'LoginForm__Input', 
                      { 'LoginForm__Input_Error': touched.login && errors.login }
                    )}
                    placeholder='Логин'
                  />
                  <div className={ClassNames(
                    'LoginForm__InputError',
                    { 'LoginForm__InputError_Visible': touched.login && errors.login }
                  )}>
                    {touched.login && errors.login}
                  </div>
                  <input
                    type='password'
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={ClassNames(
                      'LoginForm__Input', 
                      { 'LoginForm__Input_Error': touched.password && errors.password }
                    )}
                    placeholder='Пароль'
                  />
                  <div className={ClassNames(
                    'LoginForm__InputError',
                    { 'LoginForm__InputError_Visible': touched.password && errors.password }
                  )}>
                    {touched.password && errors.password}
                  </div>
                  <Button
                    typeStyle='green'
                    radius='lg'
                    width='fixed'
                    type='submit'
                    className={ClassNames(
                      'LoginForm__Submit',
                      { 'LoginForm__Submit_Disable': isSubmitting }
                    )}
                    disabled={isSubmitting}
                  >
                    Войти
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className='Login__Right'></div>
    </div>
  );
}
