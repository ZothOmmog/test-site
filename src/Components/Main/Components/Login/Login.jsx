import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import logo from '../../../../img/logo.png';
import ClassNames from 'classnames';
import { Button } from '../../../Button';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { getMeWithNamePassThunk } from '../../../../redux';

LoginView.propTypes = {
  isLoading: PropTypes.bool,
  getMeWithNamePassThunk: PropTypes.func
}

// TODO выяснилось, что isLoading тут не нужен, надо будет переделать BLL
function LoginView({ isLoading, getMeWithNamePassThunk }) {
  const [errorFromServer, setErrorFromServer] = useState();

  return (
    <div className='Login'>
      <div className='Login__Left'>
        <div className='Login__LoginFormWrapper'>
          <div className='LoginForm'>
            <div className='LoginForm__LogoWrapper'>
              <img className='LoginForm__Logo' src={logo} alt='Логотип' />
            </div>
            <h2 className='LoginForm__Title'>Профиль</h2>
            <div className={ClassNames(
              'LoginForm__InputError',
              { 'LoginForm__InputError_Visible': errorFromServer }
            )}>
              {errorFromServer}
            </div>
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
              onSubmit={async (values, { setSubmitting }) => {
                const name = values.login;
                const password = values.password;

                const isAuth = await getMeWithNamePassThunk(name, password);

                if (!isAuth) setErrorFromServer('Имя пользователя или пароль введены не верно');
                else if (errorFromServer) setErrorFromServer('');

                setSubmitting(false);
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
                <form onSubmit={handleSubmit} className='LoginForm__Form'>
                  <input
                    type='text'
                    name='login'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.login.trim()}
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
                    value={values.password.trim()}
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

const mapStateToProps = (state) => ({
  isLoading: state.me.isLoading
});

export const Login = connect(mapStateToProps, {
  getMeWithNamePassThunk
})(LoginView);