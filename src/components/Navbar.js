import React from 'react';
import { NavLink } from 'react-router-dom';
import './stylesheets/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="ui menu">
        <NavLink exact className="item" to="/">
          <i className="icon home"></i>
        </NavLink>
        <NavLink className="item" to="/roster">
          <i className="icon user"></i>
        </NavLink>
        <NavLink className="item" to="/philanthropy">
        <i className="icon handshake"></i>
        </NavLink>
        <NavLink className="item" to="/contact">
        <i className="icon mail"></i>
        </NavLink>
        <div className="right menu">
          <div className="item">
            <a href="https://www.facebook.com/ohioudelts"><i id="socials" className="facebook icon"/></a>
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