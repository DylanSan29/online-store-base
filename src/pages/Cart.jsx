// pages/Cart.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart,updateItemQuantity } from "../redux/CartSlice";
import "../styles/pages/cart.css";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart({ id: productId })); // Dispatch action to remove from cart
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity to less than 1
    dispatch(updateItemQuantity({ id: productId, quantity: newQuantity })); // Dispatch action to update quantity
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div className="quantity">
                <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                <input
                  id={`quantity-${item.id}`}
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                />
              </div>
            </div>
            <div className="item-actions">
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Total: ${totalAmount.toFixed(2)}</h2>
      <button className="proceed">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
