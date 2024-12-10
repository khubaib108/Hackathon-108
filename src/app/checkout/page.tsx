import React from 'react';

function CheckoutPage() {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">How would you like to get your order?</h2>
            <p className="text-sm text-gray-600 mb-4">
            Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. 
            <a className='color-black underlined' href=''>Learn More</a>
            </p>
            <button className="w-full border border-gray-300 p-4 rounded-md flex items-center justify-between hover:border-black">
              <span className="text-sm font-medium">Deliver It</span>
            </button>
          </div>

          {/* Address Form */}
          <form>
            <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="First Name" className="border border-gray-300 p-3 rounded-md w-full" />
              <input type="text" placeholder="Last Name" className="border border-gray-300 p-3 rounded-md w-full" />
            </div>
            <input type="text" placeholder="Address Line 1" className="border border-gray-300 p-3 rounded-md w-full mb-4" />
            <input type="text" placeholder="Address Line 2" className="border border-gray-300 p-3 rounded-md w-full mb-4" />
            <input type="text" placeholder="Address Line 3" className="border border-gray-300 p-3 rounded-md w-full mb-4" />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Postal Code" className="border border-gray-300 p-3 rounded-md w-full" />
              <input type="text" placeholder="Locality" className="border border-gray-300 p-3 rounded-md w-full" />
            </div>
            <select className="border border-gray-300 p-3 rounded-md w-full mb-4">
              <option>State/Territory</option>
              <option>India</option>
            </select>
            <div className="flex items-center gap-4 mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Save this address to my profile
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Make this my preferred address
              </label>
            </div>

            {/* Contact Information */}
            <h3 className="text-lg font-semibold mb-4">What's your contact information?</h3>
            <input type="email" placeholder="Email" className="border border-gray-300 p-3 rounded-md w-full mb-4" />
            <input type="tel" placeholder="Phone Number" className="border border-gray-300 p-3 rounded-md w-full mb-4" />

            {/* PAN Information */}
            <h3 className="text-lg font-semibold mb-4">What's your PAN?</h3>
            <input type="text" placeholder="PAN" className="border border-gray-300 p-3 rounded-md w-full mb-4" />
            <div className="flex items-center gap-4 mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Save PAN details to Nike Profile
              </label>
            </div>
            <label className="flex items-center text-sm text-gray-600 mb-6">
              <input type="checkbox" className="mr-2" />
              I have read and consent to eShopWorld processing my information in accordance with the <a href="#" className="text-blue-600 ml-1">Privacy Statement</a>, <a href="#" className="text-blue-600 ml-1">Cookie Policy</a>. eShopWorld is a trusted Nike partner.
            </label>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
              Continue
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-6">Order Summary</h3>
          <div className="border-b border-gray-300 pb-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-sm font-medium">₹ 20,890.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Delivery/Shipping</span>
              <span className="text-sm font-medium">Included</span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium">Total</span>
            <span className="text-lg font-semibold">₹ 20,890.00</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/path-to-product-image.jpg"
              alt="Product"
              className="w-20 h-20 object-cover border border-gray-300 rounded-md"
            />
            <div>
              <p className="text-sm font-medium">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve</p>
              <p className="text-sm text-gray-600">Size: L</p>
              <p className="text-sm font-medium">₹ 3,895.00</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="/path-to-product-image.jpg"
              alt="Product"
              className="w-20 h-20 object-cover border border-gray-300 rounded-md"
            />
            <div>
              <p className="text-sm font-medium">Nike Air Max 97 SE Men's Shoes</p>
              <p className="text-sm text-gray-600">Size: UK 8</p>
              <p className="text-sm font-medium">₹ 16,995.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
