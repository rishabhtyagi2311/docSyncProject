import React from 'react';
import { Link } from 'react-router-dom';
import SignupCard from '../components/SignupCard';
import InputGroup from '../components/InputGroup';
import '../App.css';

function SignupPage() {
  return (
    <div className="app-container">
      <div className="main-content">
        <h1>Create your account</h1>
        
        <div className="signup-wrapper">
            
            {/* LEFT BOX: Reference User */}
            <SignupCard title={<>Sign Up as <br />Reference User</>}>
                <button type="button" className="google-btn">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google Logo" width="20" />
                    Sign in with Google
                </button>

                <div className="divider">OR</div>

                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup label="Name" type="text" id="ref-name" name="ref-name" required />
                    <InputGroup label="Email" type="email" id="ref-email" name="ref-email" required />
                    <InputGroup label="Password" type="password" id="ref-password" name="ref-password" required />
                    {/* No 'Continue' button here, per request */}
                </form>

                {/* Moved "Already have an account" inside this card */}
                <div className="login-link-inner">
                    Already have an Account? <Link to="/login">Sign in</Link>
                </div>
            </SignupCard>

            {/* RIGHT BOX: Repository Administrator */}
            <SignupCard title={<>Sign Up as <br />Repository Administrator</>}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="input-row">
                        <InputGroup label="First Name" type="text" id="admin-fname" name="admin-fname" required />
                        <InputGroup label="Last Name" type="text" id="admin-lname" name="admin-lname" required />
                    </div>
                    <InputGroup label="Email" type="email" id="admin-email" name="admin-email" required />
                    <InputGroup label="Password" type="password" id="admin-password" name="admin-password" required />
                    {/* No 'Continue' button here, per request */}
                </form>
            </SignupCard>
        </div>

        {/* Removed the global "Already have an Account?" link from here */}
      </div>
    </div>
  );
}

export default SignupPage;