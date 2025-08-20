import React from "react";

const Lotery = () => {
  const lotteries = [
    {
      img: "lottery1.png",
    },
    {
      img: "lottery2.png",
    },
    {
      img: "lottery3.png",
    },
    {
      img: "lottery4.png",
    },
    {
      img: "lottery5.png",
    },
    {
      img: "lottery1.png",
    },
  ];
  const totalLotteries = lotteries.length;
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>🎲 Lottery</h4>
        <p className="me-2 bg-success text-light px-3 py-2 rounded-3">
          ALL {totalLotteries}
        </p>
      </div>
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
        {lotteries.map((lotteries, index) => (
          <div
            key={index}
            className="position-relative"
            style={{
              flex: "0 0 auto",
              width: "172px",
            }}
          >
            {/* Image */}
            <img
              src={lotteries.img}
              alt={""}
              className="card-img-top rounded-3"
              style={{
                height: "220px",
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

      <div className="mt-3">
        <img
          src={"heroimg.webp"}
          alt=""
          style={{ width: "100%", height: "300px", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
};

export default Lotery;
