import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoryList = ({ activeTab, onTabChange }) => {
  const categories = [
    "For You",
    "Lottery",
    "Original",
    "Fishing",
    "Slots",
    "Casino",
    "PVC",
    "Sports",
  ];

  return (
    <div className="container my-3">
      <div
        className="d-flex gap-1 gap-lg-4 justify-content-start bg-white p-3 rounded shadow-sm"
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollbarWidth: "none", // Firefox
        }}
      >
        {categories.map((tab) => (
          <button
            key={tab}
            className={`btn ${
              activeTab === tab ? "btn-success" : "btn-outline-success"
            }`}
            style={{
              borderRadius: "10px",
              padding: "6px 16px",
              fontWeight: "500",
              flex: "0 0 auto", // Prevent shrinking
            }}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Hide scrollbar for Webkit browsers */}
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default CategoryList;
