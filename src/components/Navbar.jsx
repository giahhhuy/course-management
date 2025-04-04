import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          LearnHub
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-links">
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/categories" className="nav-link">Categories</Link>
            <Link to="/teach" className="nav-link">Teach</Link>
          </div>

          <div className="navbar-auth">
            {currentUser ? (
              <>
                <Link to="/cart" className="nav-link cart-link">
                  <FaShoppingCart />
                </Link>
                <div className="user-menu">
                  <button className="user-button">
                    <FaUser />
                  </button>
                  <div className="dropdown-menu">
                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                    <Link to="/profile" className="dropdown-item">Profile</Link>
                    <button onClick={handleLogout} className="dropdown-item">
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">Log in</Link>
                <Link to="/signup" className="nav-button">Sign up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 