import { useState } from 'react';
import './Navbar.css';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Left Section: Brand and Contact */}
        <div className="navbar-left">
          <div className="brand">BOXCARS</div>
        </div>

        {/* Center Section: Navigation Links */}
        <ul className={`menu ${menuActive ? 'active' : ''}`}>
          <li className="dropdown">
            <a href="#">Home</a>
          </li>
          <li className="dropdown">
            <a href="#">Listings</a>
          </li>
          <li className="dropdown">
            <a href="#">Blog</a>
          </li>
          <li className="dropdown">
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Right Section: User Actions */}
        <div className="navbar-right">
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
