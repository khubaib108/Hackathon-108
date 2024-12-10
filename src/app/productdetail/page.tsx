import React from "react";
import pic3 from '../../../public/pic3.png';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white">
        <Navbar></Navbar>
      {/* Product Section */}
      <main className="px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src="pic3.png"
            alt=""
            className="max-w-full"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Nike Air Force 1 PLT.AF.ORM</h1>
          <p className="text-gray-600">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its “inside out”-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials, and aged midsole aesthetic give this release
            an artisan finish.
          </p>
          <div className="text-2xl font-semibold">₹ 8,695.00</div>
          <button className="px-6 py-3 bg-black text-white rounded-full">
            Add To Cart
          </button>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ProductPage;
