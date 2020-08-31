import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="ui menu">
        <NavLink exact className="item" to="/">
          <strong>Home</strong>
        </NavLink>
        <NavLink className="item" to="/philanthropy">
          <strong>Philanthropy</strong>
        </NavLink>
        <NavLink className="item" to="/roster">
          <strong>Roster</strong>
        </NavLink>
        <NavLink className="item" to="/contact">
          <strong>Contact</strong>
        </NavLink>
        <div class="right menu">
          <div className="item">
            <a href="https://www.facebook.com"><i id="socials" className="facebook icon"/></a>
            <a href="https://twitter.com/OU_Delts"><i id="socials" className="twitter icon"/></a>
            <a href="https://www.instagram.com/ou_delts/"><i id="socials" className="instagram icon"/></a>
          </div>
          <div className="item"></div>
        </div>
      </div> 
    </nav>
  );
}

export default Navbar;