import React from 'react';
import { NavLinkCustom } from './nav-link-custom';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'NavLinkCustom',
  component: NavLinkCustom
};

export const redular = () => (
  <Router>
    <NavLinkCustom 
      to='/page'
    >
      Ссылка
    </NavLinkCustom>
  </Router>
);
