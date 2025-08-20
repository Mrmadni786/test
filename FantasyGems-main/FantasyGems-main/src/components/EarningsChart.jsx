import React from "react";

const EarningsChart = () => {
  // Sample data
  const earnings = [
    {
      id: 1,
      name: "Mem***JP7",
      img: "./avator.webp",
      rank: "NO1",
      amount: "Rs65,305,618.28",
      color: "text-warning",
    },
    {
      id: 2,
      name: "Mem***WLZ",
      img: "./avator.webp",
      rank: "NO2",
      amount: "Rs26,540,360.00",
      color: "text-secondary",
    },
    {
      id: 3,
      name: "Mem***PB4",
      img: "./avator.webp",
      rank: "NO3",
      amount: "Rs15,591,408.00",
      color: "text-danger",
    },
    {
      id: 4,
      name: "Ali***em",
      img: "./avator.webp",
      rank: "NO4",
      amount: "Rs14,359,450.00",
      color: "text-primary",
    },
    {
      id: 5,
      name: "Mem***XZ9",
      img: "./avator.webp",
      rank: "NO5",
      amount: "Rs12,785,100.00",
      color: "text-success",
    },
    {
      id: 6,
      name: "Sha***TT2",
      img: "./avator.webp",
      rank: "NO6",
      amount: "Rs10,452,990.00",
      color: "text-info",
    },
  ];

  return (
    <div className="container my-4">
      <h4 className="mb-3">📊 Today's earnings chart</h4>
      <div className="row g-3">
        {earnings.map((user) => (
          <div key={user.id} className="col-lg-6 col-12">
            <div className="d-flex justify-content-between align-items-center p-3 rounded shadow-sm bg-white">
              {/* Avatar */}
              <div className="d-flex align-items-center gap-3">
                <img
                  src={user.img}
                  alt={user.name}
                  className="rounded-circle"
                  height="50"
                  width="50"
                />
                <div>
                  <h6 className="mb-0 fw-semibold">{user.name}</h6>
                  <span className={`${user.color} small fw-bold`}>
                    {user.rank}
                  </span>
                </div>
              </div>

              {/* Amount */}
              <div>
                <p className="mb-0 fw-semibold">{user.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsChart;
