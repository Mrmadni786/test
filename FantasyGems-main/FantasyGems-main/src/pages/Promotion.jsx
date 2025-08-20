import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaUserFriends,
  FaCopy,
  FaClipboardList,
  FaDollarSign,
  FaBookOpen,
  FaHeadset,
  FaChevronRight,
} from "react-icons/fa";

const Promotion = () => {
  // Subordinates data
  const subordinates = [
    {
      type: "Direct subordinates",
      stats: [
        { label: "number of register", value: 0 },
        { label: "Deposit number", value: 0, color: "text-success" },
        { label: "Deposit amount", value: 0, color: "text-warning" },
        { label: "Number of people making first deposit", value: 0 },
      ],
    },
    {
      type: "Team subordinates",
      stats: [
        { label: "number of register", value: 0 },
        { label: "Deposit number", value: 0, color: "text-success" },
        { label: "Deposit amount", value: 0, color: "text-warning" },
        { label: "Number of people making first deposit", value: 0 },
      ],
    },
  ];

  // Options list
  const options = [
    {
      title: "Partner rewards",
      icon: <FaUserFriends size={20} />,
      action: <FaChevronRight />,
    },
    {
      title: "Copy invitation code",
      icon: <FaCopy size={20} />,
      extra: "656531071835",
      action: <FaCopy />,
    },
    {
      title: "Subordinate data",
      icon: <FaClipboardList size={20} />,
      action: <FaChevronRight />,
    },
    {
      title: "Commission detail",
      icon: <FaDollarSign size={20} />,
      action: <FaChevronRight />,
    },
    {
      title: "Invitation rules",
      icon: <FaBookOpen size={20} />,
      action: <FaChevronRight />,
    },
    {
      title: "Agent line customer service",
      icon: <FaHeadset size={20} />,
      action: <FaChevronRight />,
    },
  ];

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-start min-vh-100 py-4"
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
        {/* Header */}
        <div
          className="text-center text-white p-4"
          style={{
            background: "linear-gradient(135deg, #00b894, #019875)",
          }}
        >
          <h4 className="fw-bold">Agency</h4>
          <h2 className="fw-bold my-2">0</h2>
          <button className="btn btn-light btn-sm px-4 rounded-pill fw-bold mb-2">
            Yesterday's total commission
          </button>
          <p className="mb-0">
            Upgrade the level to increase commission income
          </p>
        </div>

        {/* Subordinates Section */}
        <div className="row g-0 text-center">
          {subordinates.map((item, index) => (
            <div className="col-12 col-md-6 p-3" key={index}>
              <h6
                className="fw-bold text-white p-2 rounded"
                style={{ backgroundColor: "#019875" }}
              >
                {item.type}
              </h6>
              {item.stats.map((stat, i) => (
                <p className="mb-1" key={i}>
                  <span className={`fw-bold ${stat.color || ""}`}>
                    {stat.value}
                  </span>
                  <br />
                  <small className="text-muted">{stat.label}</small>
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Download QR Button */}
        <div className="p-3 text-center">
          <button
            className="btn fw-bold text-white px-4 py-2 rounded-pill"
            style={{ backgroundColor: "#019875", width: "100%" }}
          >
            Download QR Code
          </button>
        </div>

        {/* Options Section */}
        <div className="p-3">
          {options.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between p-3 mb-2 bg-light rounded"
            >
              {/* Left side (icon + title) */}
              <div className="d-flex align-items-center gap-3">
                <span className="text-success">{item.icon}</span>
                <span className="fw-semibold">{item.title}</span>
              </div>

              {/* Right side (extra info + action) */}
              <div className="d-flex align-items-center gap-2 text-muted">
                {item.extra && (
                  <span className="fw-semibold">{item.extra}</span>
                )}
                <span>{item.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotion;
