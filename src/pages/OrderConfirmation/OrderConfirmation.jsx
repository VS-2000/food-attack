import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // using react-icons for tick
import "./OrderConfirmation.css";

export default function OrderConfirmation() {
  const loc = useLocation();
  const name = loc.state?.name || "Customer";

  return (
    <div className="order-confirmation-page">
      <div className="order-card">
        <FaCheckCircle className="order-tick" />
        <h1 className="order-title">Order Placed!</h1>
        <p className="order-message">
          Thanks <span className="order-name">{name}</span>! Your delicious food is on its way.
        </p>
        <p className="order-submessage">
          This is a static confirmation (no backend). Sit tight and enjoy your meal!
        </p>
        <Link to="/" className="back-home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
