import React from "react";

const Slots = () => {
  const games = [
    { img: "slot1.png" },
    { img: "slot5.png" },
    { img: "slot3.png" },
    { img: "slot4.png" },
    { img: "slot5.png" },
    { img: "slot4.png" },
  ];
  const totalGames = games.length;

  return (
    <div className="container my-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center">
        <h4>🎮 Slots</h4>
        <p className="me-2 bg-success text-light px-3 py-2 rounded-3">
          ALL {totalGames}
        </p>
      </div>

      {/* Grid layout */}
      <div className="row g-3">
        {games.map((game, index) => (
          <div
            key={index}
            className="col-6 col-md-4" // 2 per row on mobile, 3 per row on desktop
          >
            <div className="shadow-sm h-100">
              <img
                src={game.img}
                alt={`Slot ${index + 1}`}
                className="card-img-top"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slots;
