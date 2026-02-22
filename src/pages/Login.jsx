import React, { useState } from "react";
     import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
 const navigate = useNavigate();
  return (
    <div className="login-page">
  <div className="blobs">
    <span className="blob blob1"></span>
    <span className="blob blob2"></span>
    <span className="blob blob3"></span>
  </div>

  <div className="login-card">

        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to continue to SkillMatch</p>

        <input
          type="text"
          placeholder="User ID / Email"
          className="login-input"
        />

        {/* Password with eye */}
        <div className="password-box">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    className="login-input"
  />
  <span className="eye" onClick={() => setShowPassword(!showPassword)}>
    {showPassword ? "🙈 " : "👁️"}
  </span>
</div>


        <div className="login-options">
          <span className="forgot">Forgot password?</span>
        </div>

        {/* <button className="login-btn">Login</button> */}
        <button 
            className="login-btn"
            onClick={() => navigate("/Home")}
          >
            Login
          </button>

        <p className="signup-text">
  Don’t have an account?{" "}

  <span className="Signup-link" onClick={() => navigate("/signup")}>Sign up</span>
</p>

      </div>
    </div>
  );
}

export default Login;
