import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="app-container">
      <div className="signup-card" style={{maxWidth: '400px'}}>
        <h2>Sign In</h2>
        <p>Login form goes here.</p>
        <Link to="/">Back to Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;