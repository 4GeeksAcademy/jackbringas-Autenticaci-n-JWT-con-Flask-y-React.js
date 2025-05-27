import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch(import.meta.env.VITE_BACKEND_URL + "/api/private", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(data => {
        setMessage(data.msg);
      })
      .catch(error => {
        console.error("Access denied:", error);
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #E9D5FF, #C4B5FD)",
      }}
    >
      <div
  className="p-5 shadow-lg d-flex flex-column align-items-center text-center"
  style={{
    backgroundColor: "#ffffffcc",
    borderRadius: "20px",
    maxWidth: "600px",
    width: "100%",
    backdropFilter: "blur(5px)",
  }}
>
  <h2
    style={{
      color: "#6B21A8",
      fontWeight: "700",
      whiteSpace: "nowrap",
    }}
  >
    Welcome to the Private Area
  </h2>
  <p className="fs-5 mt-3" style={{ color: "#4C1D95" }}>
    Hello {message ? message.split(" ")[1] : "user"} you are logged in!
  </p>
</div>

    </div>
  );
};

export default Private;
