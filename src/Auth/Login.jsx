import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Styles/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async () => {
    let tempErrors = { username: "", password: "" };
    let isValid = true;

    if (!username.trim()) {
      tempErrors.username = "Username or Email is required";
      isValid = false;
    }

    if (!password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    setApiError("");

    if (!isValid) return;

    const isEmail = /\S+@\S+\.\S+/.test(username);

    const bodyData = isEmail
      ? { email: username, password }
      : { username: username, password };

    try {
      const res = await fetch("https://smm-backend-5.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (!data.status) {
        setApiError(data.msg || "Login failed");
        return;
      }

      // ⭐ Save token & user info in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/homepage");

    } catch (err) {
      console.error("Login API error:", err);
      setApiError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="page">
      <header className="navbar">
        <div className="nav-inner">
          <div className="logo"></div>
        </div>
      </header>

      <main className="content-wrap">
        <section className="hero">
          <h1 className="title">The best SMM panel. Super cheap & super fast!</h1>
          <p className="subtitle">
            Step up your social media game using various SMM services we offer.
          </p>

          <div className="login-card">
            {/* Username */}
            <div className="input-group">
              <label>Username Or Email</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <p className="error-text">{errors.username}</p>
              )}
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            {apiError && <p className="error-text">{apiError}</p>}

            <div className="between">
              <label className="remember">
                <input type="checkbox" className="custom-checkbox" /> Remember
              </label>
              {/* <a href="/" className="forgot">Forgot Password</a> */}
            </div>

            <button className="signin-btn" onClick={handleSubmit}>
              Sign in
            </button>

            <p className="bottom-text">
              Do not have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </section>
      </main>

      <img src="/mnt/data/4e8e107b-0d0c-4918-949a-28e3081a077a.png" className="float emoji1" alt="" />
      <img src="/mnt/data/4e8e107b-0d0c-4918-949a-28e3081a077a.png" className="float emoji2" alt="" />
      <img src="/mnt/data/4e8e107b-0d0c-4918-949a-28e3081a077a.png" className="float rating" alt="" />
    </div>
  );
}

export default Login;
