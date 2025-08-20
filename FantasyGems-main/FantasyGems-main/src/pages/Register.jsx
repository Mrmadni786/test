import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
  FaHeadset,
  FaUser,
} from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { use } from "react";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [activeTab, setActiveTab] = useState("Phone");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext);

  const name = useRef();
  const number = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      alert("❌ Password and Confirm Password do not match!");
      return;
    }

    const newUser = {
      username: name.current.value,
      userpassword: password.current.value,
      confirmpassword: confirmPassword.current.value,
      ...(activeTab === "Phone"
        ? { usernumber: number.current.value }
        : { useremail: email.current.value }),
    };

    registerUser(newUser);

    name.current.value = "";
    password.current.value = "";
    confirmPassword.current.value = "";
    if (activeTab === "Phone") {
      number.current.value = "";
    } else {
      email.current.value = "";
    }

    navigate("/login");
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
      <div className="col-md-6 col-lg-5 bg-white shadow rounded my-4">
        {/* Header */}
        <div
          className="text-white p-4 rounded-top"
          style={{
            background: "linear-gradient(135deg, #00b894, #019875)",
          }}
        >
          <h5 className="fw-bold">Register</h5>
          <p className="mb-0" style={{ fontSize: "0.9rem" }}>
            Create your account using phone or email. <br />
            Already have an account? Please log in.
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
            <FaPhoneAlt className="me-2" />
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
            <FaEnvelope className="me-2" />
            Email
          </div>
        </div>

        {/* Form */}
        <form className="p-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label className="fw-semibold">
              <FaUser className="me-2 text-success" />
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              ref={name}
              required
            />
          </div>

          {activeTab === "Phone" ? (
            <div className="mb-3">
              <label className="fw-semibold">
                <FaPhoneAlt className="me-2 text-success" />
                Phone number
              </label>
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
              <label className="fw-semibold">
                <FaEnvelope className="me-2 text-success" />
                Email
              </label>
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
            <label className="fw-semibold">
              <FaLock className="me-2 text-success" />
              Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                ref={password}
                required
                autoComplete="new-password"
              />
              <span
                className="input-group-text"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="fw-semibold">
              <FaLock className="me-2 text-success" />
              Confirm Password
            </label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                placeholder="Confirm password"
                ref={confirmPassword}
                required
                autoComplete="new-password"
              />
              <span
                className="input-group-text"
                style={{ cursor: "pointer" }}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="btn btn-success w-100 rounded-pill fw-semibold"
          >
            Register
          </button>

          {/* Back to login link */}
          <Link
            to="/login"
            className="btn btn-outline-success w-100 rounded-pill fw-semibold mt-2"
          >
            Back to Login
          </Link>

          {/* Extra options */}
          <div className="d-flex justify-content-around mt-3">
            <div className="text-center">
              <FaHeadset className="text-success" size={20} />
              <p className="small">Customer Service</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
