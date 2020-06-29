import React, { useEffect, useState } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { Header, HeaderNavigation } from '../Header';
import { Main } from '../Main';
import { connect } from 'react-redux';
import { getMeWithTokenThunk } from '../../redux';

App.propTypes = {
  getMeWithTokenThunk: PropTypes.func
};

export function App({ getMeWithTokenThunk }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await getMeWithTokenThunk();
      setIsLoading(false);
    })();
  }, [getMeWithTokenThunk]);

  return (
    <div className='App'>
      {!isLoading ? (
        <>
          <Header>
            <HeaderNavigation />
          </Header>
          <Main />
        </>
      ) : 'Загрузка...'} 
    </div>
  );
};

export const AppWithLogin = connect(null, { getMeWithTokenThunk })(App)