'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 2499.99,
      imageUrl: "/products/diamond-ring.jpg",
      quantity: 1
    },
    {
      id: 2,
      name: "Pearl Necklace",
      price: 899.99,
      imageUrl: "/products/pearl-necklace.jpg",
      quantity: 1
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
            <Link
              href="/products"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 border-b last:border-b-0">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-24 w-24 flex-shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border rounded-md">
                          <button
                            className="px-3 py-1 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="px-3 py-1 border-x">{item.quantity}</span>
                          <button
                            className="px-3 py-1 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition"
                    onClick={() => alert('Checkout functionality coming soon!')}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 