import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    alert("Logged out successfully.");
    navigate("/login");
  };

  const isAuthenticated = sessionStorage.getItem("token");

  return (
    <nav
      style={{
        backgroundColor: "#E9D5FF",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
      }}
      className="navbar py-3"
    >
      <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand fw-bold" style={{ color: "#5B21B6" }}>
          Autenticación JWT con Flask y React.js
        </Link>

        <div className="d-flex ms-auto gap-2">
          <Link to="/signup">
            <button className="btn text-white" style={{ backgroundColor: "#7C3AED", borderRadius: "8px" }}>
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="btn text-white" style={{ backgroundColor: "#7C3AED", borderRadius: "8px" }}>
              Login
            </button>
          </Link>
          {isAuthenticated && (
            <button
              className="btn text-white"
              style={{ backgroundColor: "#7C3AED", borderRadius: "8px" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
