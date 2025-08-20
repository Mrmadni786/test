import React from "react";

const Fishing = () => {
  const games = [
    {
      img: "fish1.png",
    },
    {
      img: "fish2.png",
    },
    {
      img: "fish3.png",
    },
    {
      img: "fish4.png",
    },
    {
      img: "fish5.png",
    },
    { img: "fish6.png" },
  ];
  const totalGames = games.length;
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center">
        <h4>🐟 Fishing</h4>
        <p className="me-2 bg-success text-light px-3 py-2 rounded-3">
          ALL {totalGames}
        </p>
      </div>
      {/* Horizontal Scroll Wrapper */}
      <div
        className="d-flex d-lg-flex flex-lg-wrap my-3"
        style={{
          overflowX: "auto",
          gap: "16px",
          scrollbarWidth: "none", // Firefox
        }}
      >
        {games.map((game, index) => (
          <div
            key={index}
            className="card shadow-sm position-relative"
            style={{
              flex: "0 0 auto",
              width: "172px",
            }}
          >
            {/* Image */}
            <img
              src={game.img}
              alt={""}
              className="card-img-top"
              style={{
                objectFit: "cover",
              }}
            />
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

export default Fishing;
