import React from 'react';
import { NavLinkColored } from './nav-link-colored';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'NavLinkColored',
  component: NavLinkColored
}

export const regular = () => (
  <Router>
    <NavLinkColored
      to='/page'
      className='added-class-name'

    >
      Link
    </NavLinkColored>
  </Router>
);

export const active = () => (
  <Router>
    <NavLinkColored
      to='/page'
      className='added-class-name'
      active={true}
    >
      Link
    </NavLinkColored>
  </Router>
);