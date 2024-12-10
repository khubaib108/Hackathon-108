import React from 'react';
import Image from 'next/image';
import twitter from "../../../public/twit.svg";
import facebook from "../../../public/fb.svg";
import youtube from "../../../public/you.svg";
import insta from "../../../public/insta.svg";
import pin from "../../../public/pin.png";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap justify-between items-start gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full sm:w-auto">
            <ul className="text-white text-xs space-y-4">
              <li>FIND A STORE</li>
              <li>BECOME A MEMBER</li>
              <li>SIGN UP FOR EMAIL</li>
              <li>SEND US FEEDBACK</li>
              <li>STUDENT DISCOUNTS</li>
            </ul>

            <ul className="text-xs space-y-3">
              <li className="text-white">GET HELP</li>
              <li className="text-gray-400">Order Status</li>
              <li className="text-gray-400">Delivery</li>
              <li className="text-gray-400">Returns</li>
              <li className="text-gray-400">Payment Options</li>
              <li className="text-gray-400">Contact Us on Nike.com inquiries</li>
              <li className="text-gray-400">Contact Us on All other inquiries</li>
            </ul>

            <ul className="text-xs space-y-3">
              <li className="text-white">ABOUT NIKE</li>
              <li className="text-gray-400">News</li>
              <li className="text-gray-400">Careers</li>
              <li className="text-gray-400">Investors</li>
              <li className="text-gray-400">Sustainability</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Image src={twitter} alt="twitter" className="h-6 w-6" />
            <Image src={facebook} alt="facebook" className="h-6 w-6" />
            <Image src={youtube} alt="youtube" className="h-6 w-6" />
            <Image src={insta} alt="insta" className="h-6 w-6" />
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <Image src={pin} alt="pin" className="h-4 w-3" />
            <span className="text-white">India</span>
            <span className="text-gray-400">©2023 Nike, Inc. All Rights Reserved</span>
          </div>
          <div className="flex gap-4 text-gray-400">
            <span>Guides</span>
            <span>Terms of Sales</span>
            <span>Terms of Use</span>
            <span>Nike Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
