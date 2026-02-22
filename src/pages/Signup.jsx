import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();     
  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2 className="signup-title">
          Make the most of your professional life
        </h2>

        <div className="signup-form">
          <label>First name</label>
          <input type="text" />

          <label>Last name</label>
          <input type="text" />

          <label>Email</label>
          <input type="email" />

          <label>Password (6 or more characters)</label>
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
            />
            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <p className="terms">
            By clicking Join now, you agree to SkillMatch’s{" "}
            <span>User Agreement</span>, <span>Privacy Policy</span>, and{" "}
            <span>Cookie Policy</span>.
          </p>

          {/* <button className="join-btn">Join now</button> */}
          <button 
            className="join-btn"
            onClick={() => navigate("/Home")}
          >
            Join now
          </button>
          <p className="login-text">
               Already on SkillMatch?{" "}
  <span onClick={() => navigate("/login")}>
                 Login
  </span>
</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
