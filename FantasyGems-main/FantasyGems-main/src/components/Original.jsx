import React from "react";

const Original = () => {
  const games = [
    {
      img: "org1.png",
    },
    {
      img: "org2.png",
    },
    {
      img: "org3.png",
    },
    {
      img: "org4.png",
    },
    {
      img: "org5.png",
    },
    {
      img: "org6.png",
    },
    { img: "org7.png" },
    { img: "org8.png" },

    { img: "org9.png" },
    { img: "org10.png" },
    { img: "org11.png" },
    { img: "org12.png" },
  ];
  const totalGames = games.length;
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center">
        <h4>🥇 Original</h4>
        <p className="me-2 bg-success text-light px-3 py-2 rounded-3">
          ALL {totalGames}
        </p>
      </div>
      <p className="text-small mb-3">
        The Internal Game Is Independently Developed by the FantasyGems Team,
        Which Is Fun,Fair and Safe.{" "}
      </p>
      {/* Horizontal Scroll Wrapper */}
      <div
        className="d-flex d-lg-flex flex-lg-wrap"
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

export default Original;
