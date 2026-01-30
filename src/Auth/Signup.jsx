import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Signup.css";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(""); // for backend errors
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.username.trim()) newErrors.username = "Username is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.agree) newErrors.agree = "Please agree to the Terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setApiError("");

    try {
      const res = await fetch("https://smm-backend-5.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          phone: form.phone,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!data.status) {
        setApiError(data.msg || "Signup failed");
        return;
      }

      navigate("/homepage");
    } catch (err) {
      console.error("Signup API error:", err);
      setApiError("Something went wrong. Try again.");
    }
  };

  console.log(form,'this is form');
  

  return (
    <div className="signup-container">

      <div className="top-text">
        <h1>The best SMM panel. Super cheap & super fast!</h1>
        <p>Step up your social media game using various SMM services we offer.</p>
      </div>

      <div className="signup-card">

        <div className="input-group">
          <label>Username</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="input-group">
          <label>E-Mail</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input type="text" name="phone" value={form.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="checkbox-line">
          <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
          <p>
            I have read and agreed with <a href="#">Terms of Service</a>
          </p>
        </div>
        {errors.agree && <span className="error" style={{ marginTop: '7px', display: "block" }}>{errors.agree}</span>}

        {apiError && <span className="error" style={{ marginTop: "10px", display: "block" }}>{apiError}</span>}

        <button className="signup-btn" onClick={handleSubmit}>Signup</button>

        <p className="bottom-text">
          Already have an account? <Link to="/">Sign in</Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
