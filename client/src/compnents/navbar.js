import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>
  <div className="navbar-right">
    <div>
      <NavLink
        to="/"
        exact
        className="btn btn-primary"
        activeStyle={{
          background: 'grey'
        }}
      >Home</NavLink>
      <NavLink
        to="/tasks/new"
        exact
        className="btn btn-primary"
        activeStyle={{
          background: 'darkblue'
        }}
      >Add Task</NavLink>
    </div>
  </div>

export default NavBar;