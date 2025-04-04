import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { FaGoogle, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, loginWithGoogle, error, setError } = useAuth();
  const navigate = useNavigate();

  const validatePassword = () => {
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validatePassword()) return;

    setLoading(true);
    try {
      await signup(email, password, name);
      navigate('/');
    } catch (error) {
      setError('Failed to create an account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      setError('Failed to sign up with Google.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Create Account</h1>
          <p>Join our learning platform today</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">
              <FaUser /> Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <FaLock /> Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
            <small className="password-hint">
              Password must be at least 8 characters long
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              <FaLock /> Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="form-agreement">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the{' '}
              <Link to="/terms" className="auth-link">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy" className="auth-link">Privacy Policy</Link>
            </label>
          </div>

          <button 
            type="submit" 
            className="btn-submit"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <button 
          onClick={handleGoogleSignup}
          className="btn-google"
          disabled={loading}
        >
          <FaGoogle /> Sign up with Google
        </button>

        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="auth-link">
              Log in
            </Link>
          </p>
        </div>
      </div>

      <div className="auth-features">
        <h2>Start Learning Today</h2>
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-icon">📚</div>
            <div className="feature-text">
              <h3>Extensive Library</h3>
              <p>Access thousands of courses in various categories</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💡</div>
            <div className="feature-text">
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals and experts</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <div className="feature-text">
              <h3>Career Growth</h3>
              <p>Enhance your skills and advance your career</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 