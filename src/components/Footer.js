import React from 'react';
import { NavLink } from 'react-router-dom';
import './stylesheets/Footer.css';
import logo from './photos/logo.PNG';

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="ui grid container footer">
                <div className="eight wide column">
                    <div className="ui tiny images">
                    <NavLink exact className="item" to="/">
                        <img className="ui image" src={ logo } alt=""></img>
                    </NavLink>
                    </div>
                </div>
                <div className="six wide column">
                    <h4>Designed & Developed By Brother Zachary Schmitz</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer;