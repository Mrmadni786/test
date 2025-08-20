import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom"; // ✅ use NavLink instead of Link
import "./header-flyout.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((s) => !s);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-sm sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          {/* Logo (always visible) */}
          <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center"
            onClick={closeMenu}
          >
            <img
              src="./logo.jpg"
              alt="Fantasy Gems Logo"
              style={{ maxHeight: "45px" }}
              className="me-2"
            />
          </NavLink>

          {/* Hamburger (mobile only) */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarMenu"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu (with slide-in effect) */}
          <div
            className={`nav-flyout collapse navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
            id="navbarMenu"
          >
            {/* Logo for mobile menu */}
            <div className="d-lg-none text-center mb-3">
              <img
                src="./logo.jpg"
                alt="Fantasy Gems Logo"
                style={{ maxHeight: "45px" }}
              />
            </div>

            <ul className="navbar-nav ms-lg-auto align-items-lg-center gap-lg-3">
              {[
                { to: "/", label: "Home" },
                { to: "/activity", label: "Activity" },
                { to: "/promotion", label: "Promotion" },
                { to: "/wallet", label: "Wallet" },
                { to: "/account", label: "Account" },
              ].map((item) => (
                <li key={item.to} className="nav-item">
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `nav-link px-mobile ${
                        isActive ? "fw-bold text-success" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}

              {/* Login & Register */}
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link px-mobile"
                  onClick={closeMenu}
                >
                  <button className="btn btn-outline-success w-100">
                    Login
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className="nav-link px-mobile"
                  onClick={closeMenu}
                >
                  <button className="btn btn-success w-100">Register</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Dim overlay for mobile */}
      {menuOpen && (
        <div
          className="nav-overlay d-lg-none"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
