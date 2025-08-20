import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGem,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3 border-top shadow-sm">
      <div className="container">
        <div className="row gy-4">
          {/* Logo & Description */}
          <div className="col-md-4">
            <h4 className="fw-bold mb-3 text-success">
              <FaGem className="me-2" />
              Fantasy Gems
            </h4>
            <p className="small text-muted">
              Step into the world of fortune and adventure! Play slots, live
              casino, and more — anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="mb-3 text-success">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Lottery
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Slots
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Papular
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Live Games
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Promotions
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="col-md-4">
            <h5 className="mb-3 text-success">Stay Connected</h5>
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-success">
                <FaFacebookF />
              </a>
              <a href="#" className="text-success">
                <FaTwitter />
              </a>
              <a href="#" className="text-success">
                <FaInstagram />
              </a>
              <a href="#" className="text-success">
                <FaYoutube />
              </a>
            </div>
            <p className="mt-3 small text-muted">
              📧 support@fantasygems.com 📞 +1 (800) 777-999
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-4" />

        {/* Bottom Text */}
        <div className="text-center small text-muted">
          © {new Date().getFullYear()} Fantasy Gems Casino. All rights reserved.
          Play responsibly. 18+
        </div>
      </div>
    </footer>
  );
};

export default Footer;
