import { useNavigate, Link } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { FaLock, FaHeadset } from "react-icons/fa";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Phone");
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useContext(UserContext);

  // Refs
  const number = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build login object based on active tab
    const loginData = {
      userpassword: password.current.value,
      ...(activeTab === "Phone"
        ? { usernumber: number.current.value }
        : { useremail: email.current.value }),
    };

    const success = loginUser(loginData);

    if (success) {
      console.log("✅ Login successful");
      navigate("/");
    } else {
      alert("Invalid credentials ❌");
      return;
    }

    // Clear fields
    password.current.value = "";
    if (activeTab === "Phone") {
      number.current.value = "";
    } else {
      email.current.value = "";
    }

    // Navigate after successful login (dummy)
    navigate("/");
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url("heroimg.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="col-md-5 bg-white shadow rounded my-4">
        {/* Header */}
        <div
          className="text-white p-4 rounded-top"
          style={{
            background: "linear-gradient(135deg, #00b894, #019875)",
          }}
        >
          <h5 className="fw-bold">Log in</h5>
          <p className="mb-0" style={{ fontSize: "0.9rem" }}>
            Please log in with your phone number or email. <br />
            If you forget your password, please contact customer service.
          </p>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-around text-center border-bottom">
          <div
            className={`py-2 flex-fill fw-semibold ${
              activeTab === "Phone"
                ? "text-success border-bottom border-2 border-success"
                : "text-muted"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTab("Phone")}
          >
            Phone number
          </div>
          <div
            className={`py-2 flex-fill fw-semibold ${
              activeTab === "Email"
                ? "text-success border-bottom border-2 border-success"
                : "text-muted"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTab("Email")}
          >
            Email Login
          </div>
        </div>

        {/* Form */}
        <form className="p-4" onSubmit={handleSubmit}>
          {activeTab === "Phone" ? (
            <div className="mb-3">
              <label className="fw-semibold">Phone number</label>
              <div className="input-group">
                <span className="input-group-text">+92</span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter phone number"
                  ref={number}
                  required
                />
              </div>
            </div>
          ) : (
            <div className="mb-3">
              <label className="fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email address"
                ref={email}
                required
              />
            </div>
          )}

          {/* Password */}
          <div className="mb-3">
            <label className="fw-semibold">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                ref={password}
                required
                autoComplete="current-password"
              />
              <span
                className="input-group-text"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Remember checkbox */}
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label htmlFor="remember" className="form-check-label">
              Remember password
            </label>
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="btn btn-success w-100 rounded-pill fw-semibold"
          >
            Log in
          </button>
          <Link to="/register">
            <button
              type="button"
              className="btn btn-outline-success w-100 rounded-pill fw-semibold mt-2"
            >
              Register
            </button>
          </Link>

          {/* Extra Links */}
          <div
            className="d-flex justify-content-around align-items-center mt-2"
            style={{ height: "100px" }}
          >
            <Link to="/forgot-password" className="text-danger fw-semibold">
              <FaLock className="me-1" /> Forgot Password?
            </Link>
            <Link to="/support" className="text-primary fw-semibold">
              <FaHeadset className="me-1" /> Customer Service
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
