import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { StoreContext } from "../../contexts/StoreContext";

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const totalAmount = food_list.reduce(
    (total, item) => total + (cartItems[item._id] || 0) * item.price,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-left">
        <h2 className="cart-title">Your Cart</h2>

        {Object.keys(cartItems).length === 0 ? (
          <p className="empty-cart">Your cart is empty 🍽️</p>
        ) : (
          <div className="cart-list">
            {food_list.map((item) => {
              const qty = cartItems[item._id] || 0;
              if (qty > 0) {
                return (
                  <div className="cart-item-card" key={item._id}>
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p className="cart-item-price">${item.price.toFixed(2)}</p>
                      <div className="cart-item-qty">
                        <button
                          className="qty-btn"
                          onClick={() => removeFromCart(item._id)}
                        >
                          -
                        </button>
                        <span>{qty}</span>
                        <button
                          className="qty-btn"
                          onClick={() => addToCart(item._id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-total">
                      ${(item.price * qty).toFixed(2)}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>

      <div className="cart-right">
        <div className="cart-summary">
          <h3>Bill Details</h3>
          <div className="summary-row">
            <p>Item Total</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div>
          <div className="summary-row">
            <p>Delivery Fee</p>
            <p>$0.2</p>
          </div>
          <hr />
          <div className="summary-row total">
            <p>Total Amount</p>
            <p>${(totalAmount + 0.2).toFixed(2)}</p>
          </div>
          <button className="checkout-btn" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
