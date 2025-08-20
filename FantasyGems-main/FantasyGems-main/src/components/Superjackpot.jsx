import React from "react";

const Superjackpot = () => {
  const jackpots = [
    {
      title: "Super Jackpot",
      img: "jackpot1.png",
      price: "Rs 10.00",
      discount: "20.8X",
      link: "#",
    },
    {
      title: "Chicken Road 2",
      img: "chickenroad2.png",
      price: "Rs 10.00",
      discount: "10.2X",
      link: "#",
    },
    {
      title: "Mega Win",
      img: "jackpot1.png",
      price: "Rs 15.00",
      discount: "15.5X",
      link: "#",
    },
    {
      title: "Lucky Spin",
      img: "chickenroad2.png",
      price: "Rs 8.00",
      discount: "12.1X",
      link: "#",
    },
    {
      title: "Golden Jackpot",
      img: "jackpot1.png",
      price: "Rs 20.00",
      discount: "25.0X",
      link: "#",
    },
    {
      title: "Super Jackpot",
      img: "jackpot1.png",
      price: "Rs 10.00",
      discount: "20.8X",
      link: "#",
    },
  ];

  return (
    <div className="container my-4">
      <h4>🏆 Super Jackpot</h4>
      <p className="text-muted text-sm mb-3">
        When you get the super jackpot you will get extra rewards. Highest{" "}
        <span className="text-danger">Rs 10,000.00</span>
      </p>

      {/* Horizontal Scroll Wrapper */}
      <div
        className="d-flex d-lg-flex flex-lg-wrap"
        style={{
          overflowX: "auto",
          gap: "16px",
          paddingBottom: "8px",
          scrollbarWidth: "none", // Firefox
        }}
      >
        {jackpots.map((jackpot, index) => (
          <div
            key={index}
            className="card shadow-sm position-relative"
            style={{
              flex: "0 0 auto",
              width: "172px",
            }}
          >
            {/* Discount Tag */}
            <span
              className="badge bg-danger position-absolute"
              style={{
                top: "5px",
                left: "5px",
                fontSize: "0.8rem",
                padding: "6px 10px",
                borderRadius: "4px",
                zIndex: "1",
              }}
            >
              {jackpot.discount}
            </span>

            {/* Image */}
            <img
              src={jackpot.img}
              alt={jackpot.title}
              className="card-img-top img-fluid"
              style={{
                height: "180px",
                objectFit: "cover",
              }}
            />

            {/* Card Content */}
            <div className="card-body">
              <h6 className="card-title">{jackpot.title}</h6>
              <p className="card-text text-danger fw-semibold">
                {jackpot.price}
              </p>
            </div>
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

      <button className="btn-success btn my-2 align-center d-flex mx-auto p-2 px-4">
        Look Super Jackpot
      </button>
    </div>
  );
};

export default Superjackpot;
