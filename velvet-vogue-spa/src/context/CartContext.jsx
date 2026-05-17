import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('velvet_vogue_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('velvet_vogue_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, size = 'M') => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => (product.id && item.id === product.id && item.size === size) ||
                  (product.name && item.name && item.name.toLowerCase() === product.name.toLowerCase() && item.size === size)
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      } else {
        return [...prevItems, { 
          id: product.id || null,
          name: product.name,
          price: parseFloat(product.price),
          image: product.image || './image/logo.avif',
          quantity: parseInt(quantity),
          size: size || 'N/A'
        }];
      }
    });
  };

  const removeFromCart = (id, size, name) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(
        (id && item.id === id && item.size === size) ||
        (name && item.name === name && item.size === size)
      ))
    );
  };

  const updateQuantity = (id, size, newQuantity, name) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        ((id && item.id === id && item.size === size) ||
         (name && item.name === name && item.size === size))
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartSubtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartSubtotal,
        cartTotalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
