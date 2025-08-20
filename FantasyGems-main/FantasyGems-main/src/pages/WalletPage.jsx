import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaWallet,
  FaDownload,
  FaUpload,
  FaHistory,
  FaCheckCircle,
} from "react-icons/fa";

const WalletPage = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100 py-4"
      style={{
        backgroundImage: `url("heroimg.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow-lg w-100"
        style={{ maxWidth: "600px", borderRadius: "20px" }}
      >
        {/* Header */}
        <div
          className="text-center text-white p-4"
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            background: "linear-gradient(135deg, #1aac80ff, #1b97b0ff)",
          }}
        >
          <FaWallet size={40} className="mb-2" />
          <h2 className="fw-bold">Rs0.00</h2>
          <p className="mb-0">Total balance</p>
        </div>

        {/* Wallets */}
        <div className="row text-center my-4">
          <div className="col">
            <div
              className="border rounded-circle d-flex justify-content-center align-items-center mx-auto"
              style={{ width: "80px", height: "80px" }}
            >
              <span className="fw-bold">0%</span>
            </div>
            <p className="fw-bold mt-2">Rs0.00</p>
            <p className="text-muted small">Main wallet</p>
          </div>

          <div className="col">
            <div
              className="border rounded-circle d-flex justify-content-center align-items-center mx-auto"
              style={{ width: "80px", height: "80px" }}
            >
              <span className="fw-bold">0%</span>
            </div>
            <p className="fw-bold mt-2">Rs0.00</p>
            <p className="text-muted small">3rd party wallet</p>
          </div>
        </div>

        {/* Wallet Transfer */}
        <div className="d-grid px-4 mb-4">
          <button className="btn btn-success fw-bold rounded-pill">
            Main wallet transfer
          </button>
        </div>

        {/* Actions */}
        <div className="row text-center py-3 px-2">
          <div className="col">
            <FaDownload size={28} className="text-warning" />
            <p className="small mt-2">Deposit</p>
          </div>
          <div className="col">
            <FaUpload size={28} className="text-primary" />
            <p className="small mt-2">Withdraw</p>
          </div>
          <div className="col">
            <FaHistory size={28} className="text-danger" />
            <p className="small mt-2">Deposit history</p>
          </div>
          <div className="col">
            <FaCheckCircle size={28} className="text-success" />
            <p className="small mt-2">Withdrawal history</p>
          </div>
        </div>

        <div className="row text-center mb-3 gap-2 justify-content-center">
          <div className="col-4 shadow-sm">
            <p>0.00</p>
            <p className="text-muted">AR Game</p>
          </div>
          <div className="col-4 shadow-sm">
            <p>0.00</p>
            <p className="text-muted">Lottery</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WalletPage;
