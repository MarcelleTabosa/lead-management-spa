import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from '../../assets/logo.svg'; 

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <div className="menu-logo">
        <img className="logo-image" src={logo} />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/lead">Lead</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
