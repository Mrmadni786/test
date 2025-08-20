import React from "react";

const Hotslots = () => {
  const popgames = [
    {
      img: "javelin.png",
      percent: "97.87%",
    },
    {
      img: "cricket.png",
      percent: "98.87%",
    },
    {
      img: "dragon.png",
      percent: "97.87%",
    },
    {
      img: "aviator.png",
      percent: "97.87%",
    },
    {
      img: "lottery1.png",
      percent: "97.87%",
    },
    {
      img: "fortune.png",
      percent: "97.87%",
    },
  ];
  const total = popgames.length;
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>🔥 HotSlots</h4>
        <p className="me-2 bg-success text-light px-3 py-2 rounded-3">
          ALL {total}
        </p>
      </div>
      {/* Horizontal Scroll Wrapper */}
      <div
        className="d-flex d-lg-flex flex-lg-wrap"
        style={{
          overflowX: "auto",
          gap: "16px",
          scrollbarWidth: "none",
        }}
      >
        {popgames.map((pop, index) => (
          <div
            key={index}
            className=""
            style={{
              flex: "0 0 auto",
              width: "172px",
            }}
          >
            {/* Image */}
            <img
              src={pop.img}
              alt={""}
              className="card-img-top"
              style={{
                objectFit: "contain",
              }}
            />
            <p className="text-small bg-success text-light text-center rounded-3 mt-2">
              Winning: {pop.percent}
            </p>
          </div>
        ))}
      </div>

      {/* Hide scrollbar for Webkit */}
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

export default Hotslots;
