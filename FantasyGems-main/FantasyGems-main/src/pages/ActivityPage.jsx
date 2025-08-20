import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAward, FaCoins, FaTrophy } from "react-icons/fa";

const ActivityPage = () => {
  // Top features (icons row)
  const features = [
    {
      title: "Activity Award",
      icon: <FaAward size={35} className="text-danger" />,
    },
    {
      title: "Betting Rebate",
      icon: <FaCoins size={35} className="text-warning" />,
    },
    {
      title: "Super Jackpot",
      icon: <FaTrophy size={35} className="text-success" />,
    },
  ];

  // Cards
  const cards = [
    {
      title: "Gifts",
      text: "Enter the redemption code to receive gift rewards",
      img: "gift.webp",
    },
    {
      title: "Attendance Bonus",
      text: "The more consecutive days you sign in, the higher the reward will be.",
      img: "bonus.webp",
    },
  ];

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100 py-4"
      style={{
        backgroundImage: `url("heroimg.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow-lg"
        style={{
          maxWidth: "700px",
          width: "100%",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {/* Title Section */}
        <div
          className="text-white p-4"
          style={{
            background: "linear-gradient(135deg, #00b894, #019875)",
          }}
        >
          <h4 className="fw-bold mb-2">Activity</h4>
          <p className="mb-0">
            Please remember to follow the event page <br />
            We will launch user feedback activities from time to time
          </p>
        </div>

        {/* Features Row */}
        <div className="d-flex justify-content-around text-center p-3">
          {features.map((f, index) => (
            <div key={index}>
              <div className="mb-2">{f.icon}</div>
              <small className="fw-bold">{f.title}</small>
            </div>
          ))}
        </div>

        <hr className="my-0" />

        {/* Cards Section */}
        <div className="row g-3 p-3">
          {cards.map((card, index) => (
            <div className="col-12 col-md-6" key={index}>
              <div className="h-100 shadow-sm text-center p-2 rounded bg-white">
                <img
                  className="img-fluid mb-3"
                  src={card.img}
                  alt={card.title}
                  style={{
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
                <h5 className="fw-bold">{card.title}</h5>
                <p className="text-muted small">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3">
          <img src={"activity1.png"} alt="" className="rounded w-100" />
          <h5 className="fw-bold mt-3">LUCKY 10 DAY'S OF INTREST</h5>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
