import React from 'react';
import { NavLinkBordered } from './nav-link-bordered';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'NavLinkBordered',
  component: NavLinkBordered
}

export const regular = () => (
  <Router>
    <NavLinkBordered
      to='/page'
      className='added-class-name'

    >
      Link
    </NavLinkBordered>
  </Router>
);

export const active = () => (
  <Router>
    <NavLinkBordered
      to='/page'
      className='added-class-name'
      active={true}
    >
      Link
    </NavLinkBordered>
  </Router>
);