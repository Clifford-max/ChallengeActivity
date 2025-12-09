import React from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className="container">
      <h1 className="title">This is a Car Component</h1>

      <div className="forms-container">
        {/* Login Form */}
        <div className="form-card">
          <h2 className="form-title">Login</h2>
          <form>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div className="form-card">
          <h2 className="form-title">Sign Up</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="signup-password">Password:</label>
              <input
                type="password"
                id="signup-password"
                placeholder="Create a password"
                required
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;