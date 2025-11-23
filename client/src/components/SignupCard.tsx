import React from 'react';

function SignupCard({ title, children }) {
  return (
    <div className="signup-card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default SignupCard;