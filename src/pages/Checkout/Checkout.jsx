import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { StoreContext } from "../../contexts/StoreContext";

const Checkout = () => {
    const { cartItems, food_list, setCartItems } = useContext(StoreContext);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("COD");

  
    const total = food_list.reduce(
        (sum, item) => sum + (cartItems[item._id] || 0) * item.price,
        0
    );

  
    const placeOrder = (e) => {
        e.preventDefault();
        if (total === 0) return alert("Your cart is empty!");
        setCartItems({}); 
        navigate("/order-confirmation", { state: { name } });
    };

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <h1 className="checkout-title">Checkout</h1>

                {total === 0 ? (
                    <p className="empty-checkout">Your cart is empty 🛒</p>
                ) : (
                    <form onSubmit={placeOrder} className="checkout-form">
                        <div className="checkout-section">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="checkout-section">
                            <label>Delivery Address</label>
                            <textarea
                                placeholder="Enter your delivery address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div className="checkout-section">
                            <label>Payment Method</label>
                            <select
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            >
                                <option value="COD">Cash on Delivery</option>
                                <option value="Card">Credit/Debit Card</option>
                                <option value="UPI">UPI / Wallet</option>
                            </select>
                        </div>

                        <div className="checkout-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-row">
                                <p>Subtotal</p>
                                <p>${total.toFixed(2)}</p>
                            </div>
                            <div className="summary-row">
                                <p>Delivery Fee</p>
                                <p>$0.2</p>
                            </div>
                            <hr />
                            <div className="summary-row total">
                                <p>Total Amount</p>
                                <p>${(total + 0.2).toFixed(2)}</p>
                            </div>
                        </div>

                        <button type="submit" className="checkout-btn">
                            Place Order
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Checkout;
