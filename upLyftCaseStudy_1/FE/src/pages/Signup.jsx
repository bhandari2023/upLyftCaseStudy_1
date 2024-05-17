import React, { useState } from "react";
import Login1 from "../images/Login1.PNG";
import "./Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios"; // Import axios for making HTTP requests

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");

  // Function to handle signup submission
  const handleSignup = () => {
    // Create an object with signup data
    const signupData = {
      email: email,
      password: password,
      phone: phone,
      fullname: fullname,
    };

    // Send a POST request to the backend server
    axios
      .post("/signup", signupData)
      .then((response) => {
        console.log("Signup successful:", response.data);
        // Add any further logic here (e.g., redirect user to login page)
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        // Handle error (e.g., display error message to user)
      });
  };

  return (
    <div>
      <Header />
      <div className="container login-container border">
        <div className="row">
          {/* Image column (for medium and larger screens) */}
          <div className="col-md-7 d-none d-md-block">
            <img src={Login1} alt="Login Image3" className="img-fluid" />
          </div>
          {/* Image column (for small screens) */}
          <div className="col-12 d-md-none text-center">
            <img src={Login1} alt="Login Image4" className="img-fluid" />
          </div>
          {/* Form column */}
          <div className="col-md-5 col-sm-12 shadow">
            <div className="mt-3 text-center">
              <h2>Sign-UP</h2>
              <div className="mb-3">
                <input
                  type="phone"
                  className="form-control input-bg"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ph.No"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control input-bg"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email/Ph.No"
                />
              </div>
              <div className="mb-3">
                <input
                  type="fullname"
                  className="form-control input-bg"
                  id="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control input-bg"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              {/* Signup button */}
              <button className="btn btn-primary" onClick={handleSignup}>
                Sign-UP
              </button>
              {/* Login link */}
              <p className="mt-3">
                Already have an Account? <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
