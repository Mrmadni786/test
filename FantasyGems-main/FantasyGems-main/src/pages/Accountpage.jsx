import { FaWallet, FaDownload, FaUpload, FaDotCircle } from "react-icons/fa";
import { MdHistory, MdOutlineSwapHoriz, MdNotifications } from "react-icons/md";
import { BiBookBookmark } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineGift } from "react-icons/ai";
import { BsBarChartLine } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import {
  FaGlobe,
  FaCog,
  FaBullhorn,
  FaUserCircle,
  FaBookOpen,
} from "react-icons/fa";
import { RiFeedbackLine } from "react-icons/ri";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const cards = [
  { icon: <FaWallet size={28} color="red" />, name: "Wallet", link: "" },
  { icon: <FaDownload size={28} color="orange" />, name: "Deposit", link: "" },
  { icon: <FaUpload size={28} color="blue" />, name: "Withdraw", link: "" },
];

const cardData = [
  {
    id: 1,
    title: "Game History",
    description: "My game history",
    icon: <MdHistory size={30} color="#3B82F6" />,
    bg: "bg-primary bg-opacity-10",
  },
  {
    id: 2,
    title: "Transaction",
    description: "My transaction history",
    icon: <MdOutlineSwapHoriz size={30} color="#10B981" />,
    bg: "bg-success bg-opacity-10",
  },
  {
    id: 3,
    title: "Deposit",
    description: "My deposit history",
    icon: <BiBookBookmark size={30} color="#EF4444" />,
    bg: "bg-danger bg-opacity-10",
  },
  {
    id: 4,
    title: "Withdraw",
    description: "My withdraw history",
    icon: <GiTakeMyMoney size={30} color="#F59E0B" />,
    bg: "bg-warning bg-opacity-10",
  },
];

// New: Menu Section (Notification, Gifts, etc.)
const menuData = [
  {
    id: 1,
    title: "Notification",
    icon: <MdNotifications size={24} color="#198754" />,
    badge: 2,
  },
  { id: 2, title: "Gifts", icon: <AiOutlineGift size={24} color="#198754" /> },
  {
    id: 3,
    title: "Game statistics",
    icon: <BsBarChartLine size={24} color="#198754" />,
  },
  {
    id: 4,
    title: "Language",
    icon: <FaGlobe size={24} color="#198754" />,
    rightText: "English",
  },
];

// New: Service Center Section
const serviceData = [
  { id: 1, title: "Settings", icon: <FaCog size={28} color="teal" /> },
  { id: 2, title: "Feedback", icon: <RiFeedbackLine size={28} color="teal" /> },
  { id: 3, title: "Announcement", icon: <FaBullhorn size={28} color="teal" /> },
  {
    id: 4,
    title: "Customer Service",
    icon: <FaUserCircle size={28} color="teal" />,
  },
  {
    id: 5,
    title: "Beginner's Guide",
    icon: <FaBookOpen size={28} color="teal" />,
  },
  { id: 6, title: "About us", icon: <BiBookBookmark size={28} color="teal" /> },
];

const Accountpage = () => {
  const { logoutUser } = useContext(UserContext);
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-start min-vh-100 py-4"
      style={{
        backgroundImage: `url("heroimg.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow w-100"
        style={{ maxWidth: "700px", backgroundColor: "lightgray" }}
      >
        {/* Top profile section */}
        <div
          className="text-white d-flex justify-content-around align-items-center py-4 rounded-top"
          style={{
            background: "linear-gradient(135deg, #00b894, #019875)",
          }}
        >
          <img
            src={"./avator.webp"}
            height={120}
            width={120}
            alt="Profile"
            className="rounded-circle border border-3 border-white"
          />
          <div>
            <h4 className="fw-bold mb-1">MEMBERNNG660GQ</h4>
            <p className="mb-1">UID | 1071835</p>
            <small>Last Login : 2025-08-18 14:24:59</small>
          </div>
        </div>

        {/* Balance + Wallet Cards */}
        <div
          className="bg-light shadow-sm rounded text-dark p-4 mx-auto"
          style={{ width: "90%", transform: "translateY(-25px)" }}
        >
          <h6 className="text-muted">Total Balance</h6>
          <p className="fw-semibold fs-5">RS 560.00</p>
          <hr />
          <div className="d-flex justify-content-around flex-wrap mt-3">
            {cards.map((item, index) => (
              <div
                className="d-flex flex-column align-items-center mx-3"
                key={index}
              >
                {item.icon}
                <p className="mt-2 mb-0 small">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safe Section */}
        <div
          className="bg-light rounded p-3 mx-auto mb-4"
          style={{ width: "90%" }}
        >
          <div className="d-flex align-items-center gap-3">
            <FaDotCircle color="orange" size={30} />
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-semibold mb-0">Safe</h6>
                <p className="text-muted mb-0">RS 0.00</p>
              </div>
              <small className="text-muted">
                The daily interest rate is 0.1%, income is calculated every 1
                minute.
              </small>
            </div>
          </div>
        </div>

        {/* History Cards Section */}
        <div
          className="bg-light rounded p-3 mx-auto mb-4"
          style={{ width: "90%" }}
        >
          <div className="row g-3">
            {cardData.map((card) => (
              <div className="col-12 col-md-6" key={card.id}>
                <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm card-hover">
                  <div className={`p-3 rounded me-3 ${card.bg}`}>
                    {card.icon}
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">{card.title}</h6>
                    <p className="text-muted mb-0 small">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Menu Section */}
        <div
          className="bg-white rounded p-3 mx-auto mb-4"
          style={{ width: "90%" }}
        >
          {menuData.map((item, index) => (
            <div
              key={item.id}
              className={`d-flex justify-content-between align-items-center py-2 ${
                index !== menuData.length - 1 ? "border-bottom" : ""
              }`}
            >
              <div className="d-flex align-items-center gap-3">
                {item.icon}
                <span>{item.title}</span>
              </div>
              {item.badge ? (
                <span className="badge bg-danger">{item.badge}</span>
              ) : item.rightText ? (
                <span className="text-muted">{item.rightText}</span>
              ) : (
                <span className="text-muted">&gt;</span>
              )}
            </div>
          ))}
        </div>

        {/* Service Center Section */}
        <div
          className="bg-white rounded p-3 mx-auto mb-4"
          style={{ width: "90%" }}
        >
          <h6 className="fw-bold mb-3">Service center</h6>
          <div className="row text-center">
            {serviceData.map((item) => (
              <div className="col-4 mb-3" key={item.id}>
                <div className="d-flex flex-column align-items-center">
                  {item.icon}
                  <small className="mt-1">{item.title}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Logout button */}
        <div className="mx-auto mb-5" style={{ width: "90%" }}>
          <button
            className="btn btn-outline-success w-100"
            onClick={logoutUser}
          >
            <span>
              <FaSignOutAlt size={22} className="me-2" />
            </span>{" "}
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accountpage;
