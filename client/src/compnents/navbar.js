import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>
  <div className="navbar">
    <div>
      <NavLink
        to="/"
        exact
        activeStyle={{
          background: 'grey'
        }}
      >Home</NavLink>
      <NavLink
        to="/tasks/new"
        exact
        activeStyle={{
          background: 'darkblue'
        }}
      >Add Task</NavLink>
    </div>
  </div>

export default NavBar;