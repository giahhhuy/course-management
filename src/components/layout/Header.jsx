import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { FaShoppingCart, FaBell, FaSearch } from 'react-icons/fa';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="main-header">
      <Link to="/" className="header-logo">
        <img src="/logo.png" alt="Course Platform" />
      </Link>

      <div className="header-categories">
        <select className="category-select">
          <option value="">Categories</option>
          <option value="development">Development</option>
          <option value="business">Business</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>

      <div className="header-search">
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search for anything" 
          />
        </div>
      </div>

      <div className="header-nav">
        {user ? (
          <>
            <Link to="/teach" className="nav-link">Teach on Platform</Link>
            <Link to="/my-learning" className="nav-link">My Learning</Link>
            <div className="nav-cart">
              <FaShoppingCart />
              <span className="cart-count">0</span>
            </div>
            <div className="nav-notifications">
              <FaBell />
              <span className="notification-count">2</span>
            </div>
            <div className="user-menu">
              <img 
                src={user.avatar || '/default-avatar.png'} 
                alt={user.name} 
                className="user-avatar" 
              />
              <div className="user-dropdown">
                <div className="user-info">
                  <p className="user-name">{user.name}</p>
                  <p className="user-email">{user.email}</p>
                </div>
                <div className="dropdown-divider"></div>
                <Link to="/profile" className="dropdown-item">Profile</Link>
                <Link to="/settings" className="dropdown-item">Settings</Link>
                <Link to="/help" className="dropdown-item">Help</Link>
                <button onClick={logout} className="dropdown-item text-danger">
                  Log Out
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline">Log In</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header; 