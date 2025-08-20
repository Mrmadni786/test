import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Hero = () => {
  return (
    <section className="mt-3">
      <div className="container">
        <div
          id="heroCarousel"
          className="carousel slide hero-slider"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          data-bs-wrap="true"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {[1, 2, 3, 4].map((num, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={num}
              >
                <img
                  src={`/banner${num}.png`}
                  className="hero-img"
                  alt={`Banner ${num}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styling */}
      <style>{`
        .hero-img {
          width: 100%;
          height: 320px;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .hero-img {
            height: 200px; /* smaller height for mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
