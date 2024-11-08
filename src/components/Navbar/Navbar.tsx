import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/logo.svg'; 
import { Li, Logo, Navbar, ThemeToggleButton, Ul } from './Navbar.style';

interface NavbarProps {
  toggleTheme: () => void; 
  isDarkMode: boolean;
}

const Menu: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <Navbar>
      <Logo src={LogoIcon} />
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/lead">Lead</Link>
        </Li>
        <Li>
          <Link to="/about">About</Link>
        </Li>
        <Li>
          <Link to="/contact">Contact</Link>
        </Li>
      </Ul>
      <ThemeToggleButton onClick={toggleTheme}>
        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </ThemeToggleButton>
    </Navbar>
  );
};

export default Menu;
