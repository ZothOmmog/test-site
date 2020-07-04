import React from 'react';
import { NavLinkBordered } from './nav-link-bordered';
import { BrowserRouter as Router } from 'react-router-dom';
import  {  } from '~/ui';

export default {
  title: 'NavLinkBordered',
  component: NavLinkBordered
}

export const text = () => (
  <Router>
    <NavLinkBordered
      to='/page'
      className='added-class-name'

    >
      Link
    </NavLinkBordered>
  </Router>
);