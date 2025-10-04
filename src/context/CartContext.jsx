import React, { createContext, useContext, useState } from 'react';

// Create context
const CartContext = createContext();

// Custom hook for using the cart
export const useCart = () => useContext(CartContext);

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
        // If item exists, increase quantity
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // If item doesn't exist, add new with quantity = 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove an item completely
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Optional: Update quantity directly
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
