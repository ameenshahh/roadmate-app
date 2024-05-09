import React, { useState } from "react";
import "../styles/signup.css";
import axiosInstance from "../axios";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const { name, email, password } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Full Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (!isPasswordValid(password)) {
      errors.password =
        "Password should be between 8 to 15 characters and should contain atleast one lowercase letter, one uppercase letter, one number, and one special character";
    }

    if (Object.keys(errors).length === 0) {
      // localStorage.setItem("token", token);
      try {
        const response = await axiosInstance.post("/auth/signup", formData);
        const token = response.data.token;
        if (response.status == 200) {
          setSuccess(true);
          setFormData({
            name: "",
            email: "",
            password: "",
          });
        }
      } catch (error) {
        if (error.response) {
          setError(error.response.data.message);
        } else if (error.request) {
          setError("No response received from the server");
        } else {
          setError("An unexpected error occurred");
        }
      }
    } else {
      setFormErrors(errors);
    }
  };

  // Function to validate email address
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate password
  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    return passwordRegex.test(password);
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear form errors for the field being changed
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };
  return (
    <div className="Auth-form-container">
      {success && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Sign Up successfull</strong>
          <span className="mx-2">
            <NavLink to="/login">Login</NavLink>
          </span>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <span>{error}</span>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered? <span className="link-primary">Login</span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <p className="text-danger">{formErrors.name}</p>
            )}
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-danger">{formErrors.email}</p>
            )}
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <p className="text-danger">{formErrors.password}</p>
            )}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
