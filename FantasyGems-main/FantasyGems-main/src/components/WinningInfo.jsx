import React from "react";

const WinningInfo = () => {
  // Array of card data
  const cards = [
    { id: 1, img1: "./cas1.png", img2: "./lottery1.png", amount: "RS 250.00" },
    { id: 2, img1: "./slot5.png", img2: "./cas2.png", amount: "RS 5,000.00" },
    {
      id: 3,
      img1: "./lottery2.png",
      img2: "./cas3.png",
      amount: "RS 12,500.00",
    },
    { id: 4, img1: "./cas4.png", img2: "./slot5.png", amount: "RS 20,000.00" },
    {
      id: 5,
      img1: "./lottery3.png",
      img2: "./cas5.png",
      amount: "RS 50,000.00",
    },
    {
      id: 6,
      img1: "./cas6.png",
      img2: "./cas3.png",
      amount: "RS 1,00,000.00",
    },
  ];

  return (
    <div className="container my-4">
      <h4 className="fw-bold mb-4">💰 Winning Info</h4>

      <div className="row container g-4 justify-content-between">
        {cards.map((card) => (
          <div
            key={card.id}
            className="col-lg-5 col-md-12 col-sm-12 d-flex align-items-center justify-content-between mx-2 mx-sm-3"
            style={{
              backgroundImage: `url("./winning_bg.webp")`,
              backgroundRepeat: "no-repeat",
              height: "110px",
            }}
          >
            {/* Image 1 */}
            <div>
              <img
                src={card.img1}
                style={{
                  borderRadius: "50%",
                  transform: "translateY(-10px)",
                  height: "90px",
                  width: "90px",
                }}
                alt="casino"
              />
            </div>

            {/* Image 2 */}
            <div className="d-flex justify-content-center align-items-center">
              <img src={card.img2} height="70" width="70" alt="slot game" />
            </div>

            {/* Text */}
            <div className="text-end d-flex flex-column justify-content-center">
              <p className="mb-1 text-light fw-semibold fs-6 fs-md-5">
                {card.amount}
              </p>
              <p className="mb-0 text-light text-sm">Winning Amount</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinningInfo;
