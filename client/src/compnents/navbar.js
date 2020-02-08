import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>
  <div className="navbar">
  
      <NavLink
        to="/"
        exact
        className="btn btn-info"
        activeStyle={{
          background: 'grey'
        }}

      >Home</NavLink>
      
      <NavLink
        to="/tasks"
        exact
        className="btn btn-info"
        activeStyle={{
          background: 'grey'
        }}
      >All Tasks</NavLink>

      <NavLink
      to="/tasks/new"
      exact
      className="btn btn-info"
      activeStyle={{
        background: 'grey'
      }}
    >Add Task</NavLink>
    
  </div>

export default NavBar;