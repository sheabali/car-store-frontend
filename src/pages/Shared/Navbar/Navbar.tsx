import { useState } from 'react';
import './Navbar.css';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout } from '@/redux/features/auth/authSlice';

const Navbar = () => {
  // State to toggle the menu
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const user = useAppSelector((state) => state.auth.user) as { role?: string };
  console.log('user', user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="flex items-center -my-4 p-2 md:p-4">
          <div className="text-xl sm:text-sm font-bold md:text-2xl">
            BOXCARS
          </div>
          <div>
            <img
              src="/src/images/auto_car-16-removebg-preview.png"
              alt="car logo"
              className="w-16 md:w-24 object-contain"
            />
          </div>
        </Link>

        {/* Center Section: Navigation Links */}
        <ul className={`menu ${menuActive ? 'active' : ''}`}>
          <li className="dropdown">
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link to="/allproduct">Cars</Link>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          {user ? (
            <li>
              <Link to={`/${user?.role ?? ''}`}>Dashboard</Link>
            </li>
          ) : null}
        </ul>

        {/* Right Section: User Actions */}
        <div className="navbar-right">
          {user ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          )}
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
