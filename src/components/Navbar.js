import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="ui mini menu">
      <a className="item" href="/">
        Home
      </a>
      <a className="item" href="/Philanthropy">
        Philanthropy
      </a>
      <a className="item" href="/Roster">
        Roster
      </a>
      <a className="item" href="/Contact">
        Contact
      </a>
      <div class="right menu">
        <div className="item">
          <a href="https://www.facebook.com"><i id="socials" className="facebook icon"/></a>
          <a href="https://twitter.com/OU_Delts"><i id="socials" className="twitter icon"/></a>
          <a href="https://www.instagram.com/ou_delts/"><i id="socials" className="instagram icon"/></a>
        </div>
        <div className="item"></div>
      </div>
    </div> 
  );
}

export default Navbar;