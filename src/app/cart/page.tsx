import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  return (
   
    <div className="min-h-screen bg-white">
         <Navbar></Navbar>
      {/* Free Delivery Banner */}
      <div className="bg-gray-100 text-sm text-center py-4">
        Free Delivery Applies to orders of ₹ 14,000.00 or more.{" "}
        <a href="#" className="underline">
          View details
        </a>
      </div>

      {/* Cart Section */}
      <main className="px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Bag</h2>

          {/* Item 1 */}
          <div className="flex items-start space-x-4 py-4 border-b">
            <img
              src="/item1.png"
              alt="Nike Dri-FIT ADV TechKnit Ultra"
              className="w-20 h-20 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Nike Dri-FIT ADV TechKnit Ultra</h3>
              <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>
              <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
              <p className="text-sm text-gray-600">Size: L</p>
              <p className="text-sm text-gray-600">Quantity: 1</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">MRP: ₹ 3,895.00</p>
              <div className="flex space-x-2 mt-2">
                <button className="hover:text-gray-500">♥</button>
                <button className="hover:text-gray-500">🗑️</button>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-4 py-4 border-b">
            <img
              src="/item2.png"
              alt="Nike Air Max 97 SE"
              className="w-20 h-20 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Nike Air Max 97 SE</h3>
              <p className="text-sm text-gray-600">Men's Shoes</p>
              <p className="text-sm text-gray-600">
                Flat Pewter/Light Bone/Black/White
              </p>
              <p className="text-sm text-gray-600">Size: 8</p>
              <p className="text-sm text-gray-600">Quantity: 1</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">MRP: ₹ 16,995.00</p>
              <div className="flex space-x-2 mt-2">
                <button className="hover:text-gray-500">♥</button>
                <button className="hover:text-gray-500">🗑️</button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="p-20 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹ 20,890.00</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹ 20,890.00</span>
            </div>
          </div>
          <button className="w-full py-3 mt-6 bg-black text-white rounded-full">
            Member Checkout
          </button>
        </div>
      </main>
<Footer></Footer>
    </div>
  );
};

export default CartPage;
