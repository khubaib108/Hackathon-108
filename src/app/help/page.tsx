import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import msg1 from "../../../public/msg1.png";
import msg2 from "../../../public/msg.png";
import pin from "../../../public/location.png";
import mob from "../../../public/mob.png";
import bad from "../../../public/bad.png";
import good from "../../../public/good.png";

export default function Page() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      <div className="min-h-screen p-4 bg-gray-50">
        {/* Page Header with Input Box */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold uppercase">Get Help</h1>
          <input
            type="text"
            placeholder="What can we help you with?"
            className="mt-2 w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              What Payment Options Can I Use on Nike Orders?
            </h2>
            <p className="mb-4">
              We want to make buying your favorite Nike shoes and gear online
              fast and easy. Accepted payment options include:
            </p>
            <ul className="list-disc ml-5 mb-4">
              <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
              <li>Apple Pay</li>
            </ul>
            <p className="mb-6">
              <Link href="#" className="underline">
                Nike Members
              </Link>{" "}
              can save multiple payment methods in their profile for faster
              checkout. Not a Member yet?{" "}
              <Link href="#" className="font-medium underline">
                Join us
              </Link>{" "}
              today.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white py-2 px-4 rounded-full">
                Join Us
              </button>
              <button className="bg-black text-white py-2 px-4 rounded-full">
                Shop Nike
              </button>
            </div>

            {/* FAQs Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">FAQs</h3>
              <div className="mb-4">
                <p className="font-semibold">
                  Does my card need international purchases enabled?
                </p>
                <p className="text-gray-600">
                  Yes, contact your bank to enable international purchases.
                </p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">
                  Can I pay for my order with multiple methods?
                </p>
                <p className="text-gray-600">
                  No, splitting payments isn’t supported.
                </p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">
                  What payment method is accepted for SNKRS orders?
                </p>
                <p className="text-gray-600">
                  You can use any accepted credit card.
                </p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">
                  Why don&apos;t I see Apple Pay as an option?
                </p>
                <p className="text-gray-600">
                  Apple Pay is available for supported devices on Safari.
                </p>
              </div>
            </div>

            {/* Feedback Section */}
            <div>
              <p>Was this answer helpful?</p>
              <div className="flex gap-4">
                <Image src={good} alt="Good" />
                <Image src={bad} alt="Bad" />
              </div>
              <div className="mt-4 text-[#757575]">RELATED</div>
              <div className="mt-5 ml-7">
                <Link href="#" className="underline">
                  WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
                </Link>
              </div>
              <div className="mt-5 ml-7 mb-5">
                <Link href="#" className="underline">
                  HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="border-l-4 pl-16">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="mb-4">
              <Image src={mob} alt="Phone" />
              <strong>000 800 919 0566</strong>
              <br />
              Products & Orders: 24/7
            </p>
            <p className="mb-4">
              <Image src={msg1} alt="Message" />
              <strong>24/7 Support</strong>
            </p>
            <p className="mb-4">
              <Image src={msg2} alt="Email" />
              <strong>Response in five business days</strong>
            </p>
            <p>
              <Image src={pin} alt="Store Locator" />
              <strong>Store Locator</strong>
              <br />
              Find Nike retail stores near you
            </p>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
