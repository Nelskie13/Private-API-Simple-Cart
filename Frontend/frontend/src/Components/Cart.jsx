import React from "react";
import { images } from "./Items";

function Cart({ cart }) {
  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.Quantity * item.Price;
    });
    return totalPrice;
  };

  return (
    <>
      <div className="Cart-container">
        <h1 className="Cart-title">🛒 Cart</h1>
        <div className="Selected-Items-container">
          {cart.length > 0 ? (
            // Display each item in the cart
            cart.map((item, id) => {
              return (
                <div className="Selected-Item" key={id}>
                  <img
                    className="Selected-Item-image"
                    src={images[item.id].src} // Retrieve the image source based on the item ID
                    alt={item.Item}
                  />
                  <div className="Selected-Item-details">
                    <div className="Selected-Item-name">{item.Item}</div>
                    <div className="Selected-Item-price">₱{item.Price}</div>
                    <div className="Selected-Item-quantity">
                      Qty: {item.Quantity}
                    </div>
                    <div className="Selected-Item-total-price">
                      Total: ₱{item.Quantity * item.Price}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            // Display a message when the cart is empty
            <h3 className="no-items">No items in cart </h3>
          )}
        </div>
        <div className="Total-Price">
          <div className="TotalPrice">
            Total price: ₱{calculateTotalPrice()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
