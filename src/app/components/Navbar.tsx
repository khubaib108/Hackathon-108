import React from 'react';
import Link from 'next/link';
import vectorLogo from "../../../public/Vector.png";
import nikeLogo from "../../../public/nikeLogo.png";
import search from "../../../public/search.png";
import likeLogo from "../../../public/like.png";
import cartLogo from "../../../public/cart.png";
import Image from 'next/image';

export default function Navbar() {
  return (
    <div>
      {/* Main Navigation Bar */}
      <nav className="h-[96px] w-full">
        {/* Top bar with utilities */}
        <div className="w-full h-[36px] bg-[#F5F5F5] flex justify-between px-8 items-center">
          {/* Logo Section */}
          <div>
            <Link href="/">
              <Image 
                src={vectorLogo} 
                alt="Jordan logo" 
                height={19.2} 
                width={17.97} 
                className="pt-1"
              />
            </Link>
          </div>

          {/* Links for utilities like Help, Join Us */}
          <div className="flex gap-7 text-[11px] font-500">
            <span>Find a Store</span>
            <span>|</span>
            <Link href="/help">Help</Link>
            <span>|</span>
            <Link href="/joinUs">Join Us</Link>
            <span>|</span>
            <Link href="/signIn">Sign In</Link>
          </div>
        </div>

        {/* Main menu */}
        <div className="w-full h-[60px] flex justify-between items-center px-6">
          {/* Nike Logo */}
          <div>
            <Image 
              src={nikeLogo} 
              alt="Nike logo" 
              height={20.54} 
              width={58.85} 
              className="pt-[28.51px] pl-[9.81px]" 
            />
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 font-semibold pl-[120px]">
            <Link href="/products">New & Featured</Link>
            <Link href="/men">Men</Link> {/* Changed div to Link */}
            <Link href="/women">Women</Link> {/* Changed div to Link */}
            <Link href="/kids">Kids</Link> {/* Changed div to Link */}
            <Link href="/sale">Sale</Link> {/* Changed div to Link */}
            <Link href="/snkrs">SNKRS</Link> {/* Changed div to Link */}
          </div>

          {/* Search and Icon Section */}
          <div className="flex gap-5 items-center">
            {/* Search Bar */}
            <div className="w-[180px] h-[40px] bg-[#F5F5F5] flex items-center gap-3 rounded-[100px]">
              <Image 
                src={search} 
                alt="Search button" 
                className="h-[20px] w-[20px] pl-[3.75px]" 
              />
              <input 
                type="text" 
                placeholder="Search" 
                className="w-[120px] h-[36px] bg-[#F5F5F5] border-none focus:outline-none" 
              />
            </div>

            {/* Like and Cart Icons */}
            <div className="flex gap-5 items-center">
              <Image 
                src={likeLogo} 
                alt="Like button" 
                className="h-[20px] w-[25px]" 
              />
              <Image 
                src={cartLogo} 
                alt="Cart button" 
                className="h-[21px] w-[20px]" 
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
