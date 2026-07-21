import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, CreditCard, CheckCircle } from 'lucide-react';

function CartDrawer({ isOpen, onClose, cart, setCart }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    payment: 'cod'
  });

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => {
    const numericPrice = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
    return acc + numericPrice * item.quantity;
  }, 0);

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      alert('Please fill in all checkout details.');
      return;
    }
    // Simulate API call
    setOrderPlaced(true);
    setTimeout(() => {
      setCart([]);
      setOrderPlaced(false);
      setIsCheckingOut(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-2xl">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-150 px-6 py-5">
                <h2 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  {isCheckingOut ? 'Checkout Details' : 'Shopping Cart'}
                </h2>
                <button type="button" className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" onClick={onClose}>
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Success Notification */}
              {orderPlaced ? (
                <div className="flex flex-1 flex-col items-center justify-center p-8 text-center bg-green-50/50">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-green-800">Order Placed Successfully!</h3>
                  <p className="mt-2 text-sm text-green-600">
                    Thank you for shopping with Xcessories Hub. Your order is being processed.
                  </p>
                  <p className="mt-4 text-xs text-gray-500 animate-pulse">
                    Returning to shop in a few seconds...
                  </p>
                </div>
              ) : isCheckingOut ? (
                /* Checkout Form */
                <form onSubmit={handleCheckoutSubmit} className="flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-xl mb-4">
                      <div className="flex justify-between text-base font-semibold text-blue-900">
                        <span>Order Total:</span>
                        <span>Rs {subtotal.toLocaleString()}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white text-gray-800 animate-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0300-1234567"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white text-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Shipping Address</label>
                      <textarea
                        name="address"
                        required
                        rows="3"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Street Name, House No, Area..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white text-gray-800"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Lahore, Karachi, Islamabad..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white text-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Method</label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className={`flex items-center justify-center gap-2 border p-3 rounded-lg cursor-pointer transition ${formData.payment === 'cod' ? 'border-blue-900 bg-blue-50 text-blue-900 font-semibold' : 'border-gray-200 text-gray-600'}`}>
                          <input type="radio" name="payment" value="cod" checked={formData.payment === 'cod'} onChange={handleInputChange} className="sr-only" />
                          <span>Cash On Delivery</span>
                        </label>
                        <label className={`flex items-center justify-center gap-2 border p-3 rounded-lg cursor-pointer transition ${formData.payment === 'card' ? 'border-blue-900 bg-blue-50 text-blue-900 font-semibold' : 'border-gray-200 text-gray-600'}`}>
                          <input type="radio" name="payment" value="card" checked={formData.payment === 'card'} onChange={handleInputChange} className="sr-only" />
                          <CreditCard className="w-4 h-4" />
                          <span>Credit Card</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-150 pt-4 mt-6 flex gap-4">
                    <button
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      className="w-1/3 border border-gray-300 py-3 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-[#d1cd4c] text-white py-3 rounded-full text-sm font-bold shadow-md hover:bg-[#c5c13e] transition active:scale-95 flex items-center justify-center"
                    >
                      Confirm Order (Rs {subtotal.toLocaleString()})
                    </button>
                  </div>
                </form>
              ) : (
                /* Cart Items List */
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex-1 overflow-y-auto px-6 py-4">
                    {cart.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                        <ShoppingBag className="w-12 h-12 mb-3 text-gray-300" />
                        <p className="text-lg font-medium">Your cart is empty</p>
                        <p className="text-sm mt-1">Add items to get started!</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100 animate-none">
                            <img src={item.pic || 'data:image/gif;base64,R0lGODlhAQABAAAAACw='} alt={item.detail} className="w-16 h-16 object-contain rounded bg-white p-1" />
                            <div className="flex-1">
                              <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{item.detail}</h4>
                              <p className="text-xs text-blue-900 font-bold mt-1">{item.price}</p>
                              
                              <div className="flex items-center gap-2 mt-2">
                                <button onClick={() => updateQuantity(item.id, -1)} className="p-1 rounded-md bg-white border border-gray-200 text-gray-600 hover:bg-gray-100">
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-sm text-gray-800 font-medium px-2">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="p-1 rounded-md bg-white border border-gray-200 text-gray-600 hover:bg-gray-100">
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                            <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {cart.length > 0 && (
                    <div className="border-t border-gray-150 px-6 py-6 bg-gray-50">
                      <div className="flex justify-between text-base font-bold text-gray-900 mb-4">
                        <span>Subtotal</span>
                        <span>Rs {subtotal.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-6">Shipping & taxes are calculated at checkout.</p>
                      
                      <button
                        onClick={() => setIsCheckingOut(true)}
                        className="w-full bg-[#d1cd4c] text-white py-3.5 rounded-full text-base font-bold shadow-md hover:bg-[#c5c13e] transition active:scale-95 flex items-center justify-center gap-2"
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
