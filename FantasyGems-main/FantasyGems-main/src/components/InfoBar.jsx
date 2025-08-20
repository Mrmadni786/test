import React, { useState, useEffect } from "react";
import { FaVolumeUp } from "react-icons/fa";

const InfoBar = () => {
  const messages = [
    "🎮 Welcome to the fastest gaming platform !",
    "🏆 Join today’s tournament and claim rewards.",
    "⚡ Enjoy smoother gameplay than ever!",
    "🎁 Daily bonus unlocked — log in now to collect!",
    "📢 New games added: Try them in the “Latest Releases",
    "💬 Live support is available 24/7 to assist you anytime.",
    "🚀 Boost your score with our special weekend event",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="container">
      <div
        className="d-flex align-items-center justify-content-between bg-light p-3 rounded shadow-sm"
        style={{ margin: "20px 0px" }}
      >
        <div
          className="d-flex align-items-center"
          style={{ flex: 1, minWidth: 0 }}
        >
          <FaVolumeUp className="text-success me-2 flex-shrink-0" size={20} />
          <span
            className="text-muted text-truncate text-small"
            style={{
              whiteSpace: "normal", // allow wrapping
              wordBreak: "break-word",
            }}
          >
            {messages[currentIndex]}
          </span>
        </div>
        <button className="btn btn-success rounded ms-3 flex-shrink-0">
          Details
        </button>
      </div>
    </div>
  );
};

export default InfoBar;
