"use client";
import React, { useState } from "react";
import mainShoe from "../../../public/mainShoe.png"; // Import product images
import Image from "next/image"; // Next.js optimized image component
import menMax from "../../../public/menMax.png";
import womenMax from "../../../public/womenMax.png";
import maxBlue from "../../../public/maxBlue.png";
import Fmg from "../../../public/Fmg.png";
import men1 from "../../../public/men1.png";
import men2 from "../../../public/men2.png";
import women1 from "../../../public/women1.png";
import women2 from "../../../public/women2.png";
import Miss from "../../../public/Miss.png";
import ess1 from "../../../public/ess1.png"
import ess2 from "../../../public/ess2.png"
import ess3 from "../../../public/ess3.png"
import Link from "next/link"; // Link component for routing

export default function Hero() {
  // Products for display
  const products = [
    {
      id: 1,
      image: womenMax,
      title: "Nike Air Max Pulse",
      category: "Women's Shoes",
      price: "₹13,995",
    },
    {
      id: 2,
      image: menMax,
      title: "Nike Air Max Pulse",
      category: "Men's Shoes",
      price: "₹13,995",
    },
    {
      id: 3,
      image: maxBlue,
      title: "Nike Air Max 97 SE",
      category: "Men's Shoes",
      price: "₹16,995",
    },
    {
      id: 4,
      image: womenMax,
      title: "Nike Air Max Pulse",
      category: "Women's Shoes",
      price: "₹13,995",
    },
  ];

  // Product collections for men's and women's items
  const menscollection = [
    {
      id: 1,
      image: men1,
      title: "Nike Dri-FIT ADV TechKnit Ultra",
      category: "Men's Short-Sleeve Running Top",
      price: "₹ 3,895",
    },
    {
      id: 2,
      image: men2,
      title: "Nike Dri-FIT Challenger",
      category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
      price: "₹ 3,895",
    },
  ];

  const womencollection = [
    {
      id: 1,
      image: women1,
      title: "Nike Dri-FIT ADV Run Division",
      category: "Women's Long-Sleeve Running Top",
      price: "₹ 5,295",
    },
    {
      id: 2,
      image: women2,
      title: "Nike Fast",
      category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
      price: "₹ 3,795",
    },
  ];

  // States for the sliders to manage the current index
  const [currentIndex, setCurrentIndex] = useState(0); // Best of Air Max slider
  const [menIndex, setMenIndex] = useState(0); // Shop Men's slider
  const [womenIndex, setWomenIndex] = useState(0); // Shop Women's slider

  // Functions to handle navigation for the sliders
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= Math.ceil(products.length / 3) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Math.ceil(products.length / 3) - 1 : prevIndex - 1
    );
  };

  const nextMenSlide = () => {
    setMenIndex((prevIndex) =>
      prevIndex + 1 >= menscollection.length ? 0 : prevIndex + 1
    );
  };

  const prevMenSlide = () => {
    setMenIndex((prevIndex) =>
      prevIndex - 1 < 0 ? menscollection.length - 1 : prevIndex - 1
    );
  };

  const nextWomenSlide = () => {
    setWomenIndex((prevIndex) =>
      prevIndex + 1 >= womencollection.length ? 0 : prevIndex + 1
    );
  };

  const prevWomenSlide = () => {
    setWomenIndex((prevIndex) =>
      prevIndex - 1 < 0 ? womencollection.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-[1344px] items-center">
      {/* Hello Nike App Banner */}
      <div className="w-[1440px] h-[58px] bg-[#F5F5F5] items-center text-center py-2">
        <div className="font-semibold text-[15px] pb-1">Hello Nike App</div>
        <div className="text-[11px]">
          Download the app to access everything Nike.{" "}
          <a href="#" className="underline font-semibold">
            Get Your Great
          </a>
        </div>
      </div>

      {/* Main Shoe Section with large image and description */}
      <div className="w-[1344px] h-[977px] items-center text-center mb-4">
        <Image src={mainShoe} alt="main shoe" className="h-[700px] pl-[48px]" />
        <div className="w-[1008px] h-[299px] pl-[400px] pt-11">
          <div className="font-[500]">First Look</div>
          <h1 className="text-[56px] font-[500]">NIKE AIR MAX PULSE</h1>
          <p className="font-[400] text-[15px] py-5">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse --designed to push your limits and help you to go to the max.
          </p>
          <div className="flex gap-5 pl-[190px]">
            <button className="bg-black text-white w-[111px] h-[40px] rounded-full">
              Notify Me
            </button>
            <button className="bg-black text-white w-[145px] h-[40px] rounded-full">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>

      {/* Slider Section for Best of Air Max */}
      <div className="flex justify-between ml-10 mt-16">
        <div className="text-[23px] font-medium">Best of Air Max</div>
        <div>
          Shop
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-[#757575] ml-2 rounded-full text-white text-2xl"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-[#757575] ml-1 rounded-full text-white text-2xl"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Product Cards - Best of Air Max */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[441px] flex-shrink-0 h-[510px] px-5"
            >
              <Image src={product.image} alt={product.title} />
              <div className="flex justify-between pt-5">
                <div>
                  <div className="font-semibold">{product.title}</div>
                  <div className="text-[#757575]">{product.category}</div>
                </div>
                <div className="font-semibold text-[15px]">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Image Section */}
      <div className="mt-[200px] ml-10">
        <div className="text-[23px] pb-10 font-medium">Featured</div>
        <Image src={Fmg} alt="image" />
      </div>

      {/* Section with Large Call to Action */}
      <div className="mt-16 text-center">
        <div className="font-semibold text-[54px]">
          STEP INTO WHAT FEELS GOOD
        </div>
        <div className="py-7">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </div>
        <button className="bg-black text-white w-[145px] h-[40px] rounded-full my-7">
          <Link href='/products'>Find your Shoe</Link>
        </button>
      </div>

      {/* Gear Up Section for Men's and Women's Collections */}
      <div className="mt-16 ml-10">
        <div className="text-[23px] font-medium">Gear Up</div>
        <div className="m-7 grid grid-cols-2 w-[1344px] h-[561px]">
          {/* Men's Collection Slider */}
          <div className="w-[666px] h-[509px] float-right">
            <div className="mb-10 float-right">
              Shop Men&apos;s
              <button
                onClick={prevMenSlide}
                className="w-12 h-12 bg-[#757575] ml-2 rounded-full text-white text-2xl"
              >
                &lt;
              </button>
              <button
                onClick={nextMenSlide}
                className="w-12 h-12 bg-[#757575] ml-1 rounded-full text-white text-2xl"
              >
                &gt;
              </button>
            </div>
            <div
              className="flex gap-3 transition-transform duration-700 ease-in-out mt-16"
              style={{
                transform: `translateX(-${menIndex * 100}%)`,
              }}
            >
              {menscollection.map((item) => (
                <div key={item.id} className="h-[393px] w-[300px] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-[300px] w-[300px]"
                  />
                  <div className="flex justify-between pt-5">
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-[#757575] w-[140px]">
                        {item.category}
                      </div>
                    </div>
                    <div className="font-semibold text-[15px]">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Women's Collection Slider */}
          <div className="w-[666px] h-[509px] float-right">
            <div className="mb-10 float-right">
              Shop Women&apos;s
              <button
                onClick={prevWomenSlide}
                className="w-12 h-12 bg-[#757575] ml-2 rounded-full text-white text-2xl"
              >
                &lt;
              </button>
              <button
                onClick={nextWomenSlide}
                className="w-12 h-12 bg-[#757575] ml-1 rounded-full text-white text-2xl"
              >
                &gt;
              </button>
            </div>
            <div
              className="flex gap-3 transition-transform duration-700 ease-in-out mt-16"
              style={{
                transform: `translateX(-${womenIndex * 100}%)`,
              }}
            >
              {womencollection.map((item) => (
                <div key={item.id} className="h-[393px] w-[300px] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-[300px] w-[300px]"
                  />
                  <div className="flex justify-between pt-5">
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-[#757575] w-[140px]">
                        {item.category}
                      </div>
                    </div>
                    <div className="font-semibold text-[15px]">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Don't Miss Section */}
      <div className="ml-14">
        <div className="font-medium text-[23px] mb-3">
            Don&apos;t Miss
        </div>
        <div>
            <Image
            src={Miss}
            alt=""
            className="mb-11"/>
            <div className="text-[15px] text-[#8E8E8E]">Stay up to date on the latest</div>
        </div>
      </div>

      {/* Essentials Collection */}
      <div className="mt-16 ml-10">
        <div className="text-[23px] font-medium mb-4">Essentials</div>
        <div className="grid grid-cols-3 gap-5">
            <div className="w-[433px] h-[461px]">
              <Image src={ess1} alt="Essentials 1" />
            </div>
            <div className="w-[433px] h-[461px]">
              <Image src={ess2} alt="Essentials 2" />
            </div>
            <div className="w-[433px] h-[461px]">
              <Image src={ess3} alt="Essentials 3" />
            </div>
        </div>
      </div>
    </div>
  );
}
