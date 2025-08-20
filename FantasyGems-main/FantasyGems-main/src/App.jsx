import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute"; // keep your protected route wrapper

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const WalletPage = lazy(() => import("./pages/WalletPage"));
const Accountpage = lazy(() => import("./pages/Accountpage"));
const ActivityPage = lazy(() => import("./pages/ActivityPage"));
const Promotion = lazy(() => import("./pages/Promotion"));

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route
              path="/wallet"
              element={
                <ProtectedRoute>
                  <WalletPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Accountpage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/activity"
              element={
                <ProtectedRoute>
                  <ActivityPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/promotion"
              element={
                <ProtectedRoute>
                  <Promotion />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
