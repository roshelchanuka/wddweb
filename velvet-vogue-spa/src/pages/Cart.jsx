import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cartItems, cartSubtotal } = useContext(CartContext);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-4">
      <h1 className="text-3xl font-extrabold">Your Shopping Cart</h1>
      <p className="text-neutral-500 max-w-md mx-auto">
        You have <span className="font-bold text-neutral-800">{cartItems.length}</span> types of item in your session cart. The interactive ledger allowing quantity adjustments, active item removals, and checkout integrations is coming up in the cart phase!
      </p>
      {cartItems.length > 0 && (
        <div className="mt-4 p-4 bg-brand/5 border border-brand/10 inline-block rounded-xl">
          <p className="text-sm font-semibold text-brand">Subtotal: Rs. {cartSubtotal.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
