import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import nike from "../../../public/nikelogo.png"; // Importing Nike logo

export default function Page() {
  return (
    <div>
      <Navbar /> {/* Navbar component */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
          <div className="text-center">
            <Image
              src={nike} // Nike logo
              alt="Nike Logo"
              className="mx-auto mb-4 h-8"
            />
            <h1 className="text-xl font-bold mb-6">BECOME A NIKE MEMBER</h1>
            <p className="text-sm text-gray-600 mb-6">
              Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
            </p>
          </div>
          <form className="space-y-4">
            {/* Email input */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {/* Password input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {/* First name input */}
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {/* Last name input */}
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {/* Date of birth input */}
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {/* Country selection dropdown */}
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              {/* Add more options as needed */}
            </select>
            {/* Gender radio buttons */}
            <div className="flex justify-between">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="mr-2 focus:ring-black"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="mr-2 focus:ring-black"
                />
                Female
              </label>
            </div>
            {/* Newsletter checkbox */}
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2 focus:ring-black"
              />
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
            </label>
            {/* Terms and privacy policy */}
            <p className="text-xs text-gray-500 mt-4">
              By creating an account, you agree to Nike&apos;s{' '}
              <Link href="#" className="text-black underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="#" className="text-black underline">
                Terms of Use
              </Link>.
            </p>
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
            >
              JOIN US
            </button>
          </form>
          {/* Link to sign in page */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already a Member?{' '}
            <Link href="/signIn" className="text-black underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <Footer /> {/* Footer component */}
    </div>
  );
}
