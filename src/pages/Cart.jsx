import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} × {item.quantity}
          </p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
          {/* Optionally add quantity controls */}
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
