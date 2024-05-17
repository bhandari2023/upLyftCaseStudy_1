import "./Login.css";
import React, { useState } from "react";
import Login1 from "../images/Login1.PNG";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login submission
  const handleLogin = () => {
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <Header />
      <div className="container login-container border">
        <div className="row">
          {/* Image column (for medium and larger screens) */}
          <div className="col-md-7 d-none d-md-block">
            <img src={Login1} alt="Login Image1" className="img-fluid" />
          </div>
          {/* Image column (for small screens) */}
          <div className="col-12 d-md-none text-center">
            <img src={Login1} alt="Login Image2" className="img-fluid" />
          </div>
          {/* Form column */}
          <div className="col-md-5 col-sm-12 shadow">
            <div className="mt-3 text-center">
              <h2>Login</h2>
              {/* Email input field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control input-bg"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email/Ph.No"
                />
              </div>
              {/* Password input field */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control input-bg"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              {/* Login button */}
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
              {/* Signup link */}
              <p className="mt-3">
                New user? <a href="/signup">Sign-up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
