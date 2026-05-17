import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Trash2, Plus, Minus, Tag, ShoppingBag, ArrowRight, Lock, ShieldCheck, X } from 'lucide-react';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartSubtotal } = useContext(CartContext);
  const [shippingCost, setShippingCost] = useState(350);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponFeedback, setCouponFeedback] = useState({ text: '', type: '' });
  
  // Checkout Modal State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    payment: 'cod'
  });
  const [isProcessing, setIsProcessing] = useState(false);

  // Format currency helper
  const formatLKR = (amount) => {
    return `Rs. ${parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Handle Coupon Application
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (!code) {
      setCouponFeedback({ text: 'Please enter a coupon code.', type: 'error' });
      return;
    }

    if (code === 'WELCOME20') {
      setAppliedCoupon({ code: 'WELCOME20', type: 'percentage', value: 0.20 });
      setCouponFeedback({ text: 'Coupon "WELCOME20" applied successfully! 20% discount saved.', type: 'success' });
    } else if (code === 'FREESHIP') {
      setAppliedCoupon({ code: 'FREESHIP', type: 'free_shipping', value: 0 });
      setCouponFeedback({ text: 'Coupon "FREESHIP" applied! Free shipping active.', type: 'success' });
    } else {
      setAppliedCoupon(null);
      setCouponFeedback({ text: 'Invalid coupon code. Try "WELCOME20" or "FREESHIP".', type: 'error' });
    }
  };

  // Calculations
  const subtotal = cartSubtotal;
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percentage') {
      discount = subtotal * appliedCoupon.value;
    } else if (appliedCoupon.type === 'free_shipping') {
      discount = shippingCost;
    }
  }

  const finalShipping = appliedCoupon && appliedCoupon.type === 'free_shipping' ? 0 : shippingCost;
  const grandTotal = Math.max(0, subtotal - discount + finalShipping);

  // Update Qty handler
  const handleQtyChange = (item, change) => {
    const newQty = item.quantity + change;
    if (newQty >= 1) {
      updateQuantity(item.id, item.size, newQty, item.name);
    }
  };

  // Input fields handler
  const handleInputChange = (e) => {
    setCheckoutForm({
      ...checkoutForm,
      [e.target.name]: e.target.value
    });
  };

  // Handle Order Placement
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!checkoutForm.name || !checkoutForm.email || !checkoutForm.phone || !checkoutForm.address || !checkoutForm.city) {
      alert('Please fill out all the required checkout details.');
      return;
    }

    setIsProcessing(true);

    const orderData = {
      name: checkoutForm.name,
      email: checkoutForm.email,
      phone: checkoutForm.phone,
      address: checkoutForm.address,
      city: checkoutForm.city,
      c_payment: checkoutForm.payment,
      items: cartItems.map(item => ({
        name: item.name,
        price: item.price,
        size: item.size,
        quantity: item.quantity,
        image: item.image
      })),
      subtotal: subtotal,
      discount: discount,
      shipping: finalShipping,
      appliedCouponCode: appliedCoupon ? appliedCoupon.code : null,
      grandTotal: grandTotal,
      orderId: 'VV-' + Math.floor(100000 + Math.random() * 900000),
      orderDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    // Save order data for invoice page access
    localStorage.setItem('velvet_vogue_last_order', JSON.stringify(orderData));

    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      setIsCheckoutOpen(false);
      // Redirect gracefully to success page
      window.location.href = '/wddweb/order-success.html';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">Shopping Bag</h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-500">
            {cartItems.length > 0 
              ? `Review your premium selected styles (${cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)` 
              : 'Your elegant style collection is currently empty.'
            }
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-12 text-center max-w-lg mx-auto mt-8">
            <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <ShoppingBag size={40} className="text-neutral-300" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-800 mb-3">Your Cart is Empty</h2>
            <p className="text-neutral-500 mb-8 leading-relaxed">
              Before you checkout, you must add some beautiful fashion elements to your shopping cart. You will find lots of interesting products on our shop page!
            </p>
            <a 
              href="/wddweb/shop.html" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-[#088178] hover:bg-[#06665f] shadow-lg shadow-teal-900/10 hover:shadow-teal-900/20 transition-all duration-200"
            >
              Start Shopping Now
            </a>
          </div>
        ) : (
          /* Cart Grid */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Side: Cart Items Table Card */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
              <div className="p-6 border-b border-neutral-100">
                <h2 className="text-lg font-bold text-neutral-900">Items List</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-100 bg-neutral-50/50">
                      <th className="py-4 px-6 text-xs font-bold text-neutral-400 uppercase tracking-wider">Product</th>
                      <th className="py-4 px-6 text-xs font-bold text-neutral-400 uppercase tracking-wider text-center">Price</th>
                      <th className="py-4 px-6 text-xs font-bold text-neutral-400 uppercase tracking-wider text-center">Quantity</th>
                      <th className="py-4 px-6 text-xs font-bold text-neutral-400 uppercase tracking-wider text-right">Subtotal</th>
                      <th className="py-4 px-6 text-xs font-bold text-neutral-400 uppercase tracking-wider text-center"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {cartItems.map((item, idx) => (
                      <tr key={idx} className="group hover:bg-neutral-50/30 transition-colors">
                        
                        {/* Product Detail Cell */}
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-4">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-16 h-16 rounded-lg object-cover border border-neutral-100 flex-shrink-0"
                              onError={(e) => { e.target.src = './image/logo.avif'; }}
                            />
                            <div>
                              <h3 className="font-bold text-sm text-neutral-800 group-hover:text-[#088178] transition-colors line-clamp-1 max-w-[180px] sm:max-w-[240px]">
                                {item.name}
                              </h3>
                              <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-md">
                                Size: {item.size}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Price Cell */}
                        <td className="py-4 px-6 text-center font-semibold text-sm text-neutral-700">
                          {formatLKR(item.price)}
                        </td>

                        {/* Qty Cell */}
                        <td className="py-4 px-6">
                          <div className="flex items-center justify-center">
                            <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden bg-white shadow-sm">
                              <button 
                                onClick={() => handleQtyChange(item, -1)}
                                className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:bg-neutral-100 hover:text-[#088178] transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-10 text-center font-bold text-sm text-neutral-800">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => handleQtyChange(item, 1)}
                                className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:bg-neutral-100 hover:text-[#088178] transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </td>

                        {/* Subtotal Cell */}
                        <td className="py-4 px-6 text-right font-bold text-sm text-neutral-900">
                          {formatLKR(item.price * item.quantity)}
                        </td>

                        {/* Delete Cell */}
                        <td className="py-4 px-6 text-center">
                          <button 
                            onClick={() => removeFromCart(item.id, item.size, item.name)}
                            className="text-neutral-300 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all"
                            title="Remove style"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Side: Cart Summary Card */}
            <div className="space-y-6">
              
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
                <h3 className="text-lg font-bold text-neutral-900 border-b border-neutral-100 pb-4 mb-6">Order Summary</h3>
                
                {/* Coupon Input */}
                <div className="mb-6">
                  <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Apply Promo Code</label>
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="e.g. WELCOME20"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-grow border border-neutral-200 rounded-lg px-3 py-2 text-sm uppercase font-semibold focus:outline-none focus:border-[#088178] transition-colors"
                    />
                    <button 
                      type="submit"
                      className="bg-neutral-950 hover:bg-[#088178] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                  {couponFeedback.text && (
                    <p className={`mt-2 text-xs font-semibold ${couponFeedback.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                      {couponFeedback.text}
                    </p>
                  )}
                </div>

                {/* Shipping Selector */}
                <div className="mb-6">
                  <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Shipping Method</label>
                  <select 
                    value={shippingCost}
                    onChange={(e) => setShippingCost(parseInt(e.target.value))}
                    className="w-full border border-neutral-200 rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:border-[#088178]"
                  >
                    <option value={350}>Standard Delivery (LKR 350.00 - 3-5 days)</option>
                    <option value={600}>Express Priority (LKR 600.00 - 1-2 days)</option>
                    <option value={0}>Store Pickup (LKR 0.00 - Instant)</option>
                  </select>
                </div>

                {/* Price Breakdowns */}
                <div className="border-t border-neutral-100 pt-4 space-y-3.5">
                  <div className="flex justify-between text-sm text-neutral-500 font-medium">
                    <span>Cart Subtotal</span>
                    <span className="text-neutral-800">{formatLKR(subtotal)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600 font-semibold">
                      <div className="flex items-center gap-1">
                        <Tag size={14} />
                        <span>Coupon Savings ({appliedCoupon?.code})</span>
                      </div>
                      <span>-{formatLKR(discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm text-neutral-500 font-medium">
                    <span>Shipping Handling</span>
                    <span className="text-neutral-800">
                      {finalShipping === 0 ? 'FREE' : formatLKR(finalShipping)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-t border-dashed border-neutral-200 pt-4 mt-2">
                    <span className="text-base font-extrabold text-neutral-900">Total Amount</span>
                    <span className="text-xl font-black text-[#088178]">{formatLKR(grandTotal)}</span>
                  </div>
                </div>

                {/* Checkout Trigger Button */}
                <button 
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full mt-6 bg-[#088178] hover:bg-[#06665f] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-teal-900/10 hover:shadow-teal-950/20 transition-all duration-200"
                >
                  <Lock size={16} />
                  <span>Secure Checkout</span>
                </button>
              </div>

              {/* Security Badges */}
              <div className="bg-white rounded-2xl border border-neutral-100 p-4 flex items-center gap-3">
                <ShieldCheck size={36} className="text-teal-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-800">Secured Payments</h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5">SSL encrypted gateways ensure safe order logs and protected processing sheets.</p>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* Checkout Modal Overlay Sheet */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 max-w-lg w-full overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-neutral-100 flex justify-between items-center bg-neutral-50/50">
              <div>
                <h2 className="text-xl font-extrabold text-neutral-900">Checkout Ledger</h2>
                <p className="text-xs text-neutral-500 mt-1">Provide your delivery and payment coordinates.</p>
              </div>
              <button 
                onClick={() => setIsCheckoutOpen(false)}
                className="text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 p-2 rounded-full transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body / Checkout Form */}
            <form onSubmit={handlePlaceOrder} className="p-6 space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-600">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={checkoutForm.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#088178]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-600">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={checkoutForm.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#088178]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-600">Contact Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={checkoutForm.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +94 77 123 4567"
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#088178]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-600">Shipping Street Address *</label>
                <input 
                  type="text" 
                  name="address"
                  required
                  value={checkoutForm.address}
                  onChange={handleInputChange}
                  placeholder="House number, Street name"
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#088178]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-600">City / District *</label>
                  <input 
                    type="text" 
                    name="city"
                    required
                    value={checkoutForm.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Colombo"
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#088178]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-600">Payment Option *</label>
                  <select 
                    name="payment"
                    value={checkoutForm.payment}
                    onChange={handleInputChange}
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#088178]"
                  >
                    <option value="cod">Cash on Delivery (COD)</option>
                    <option value="card">Credit or Debit Card</option>
                    <option value="bank">Direct Bank Transfer</option>
                  </select>
                </div>
              </div>

              {/* Order Placement Trigger */}
              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full mt-6 bg-[#088178] hover:bg-[#06665f] disabled:bg-neutral-300 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                {isProcessing ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Verifying details...</span>
                  </>
                ) : (
                  <>
                    <Lock size={16} />
                    <span>Authorize & Place Order ({formatLKR(grandTotal)})</span>
                  </>
                )}
              </button>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
