import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
const AboutUsComPany = () => {
    return (
        <>
            <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h4 className="text-green-700 font-semibold mb-2">
            About Our Shop
          </h4>

          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Fresh Fruits & Vegetables <br /> Directly From Farmers
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We provide fresh, organic, and high-quality fruits and vegetables
            collected directly from trusted local farmers. Our mission is to
            deliver healthy food to your family every day.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            No chemicals, no middlemen — just pure freshness at the best price.
          </p>

          <div className="flex gap-4">
            <Link href={'/About'} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 flex items-center gap-2 rounded-full font-medium transition">
             <span> DISCOVER MORE</span> <FaLongArrowAltRight />
            </Link>

            <Link href={'/Contact'} className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-full font-medium transition">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          <img
            src="https://i.ibb.co.com/HD77884k/top-view-vegetable-composition-with-fruits-white-background.jpg"
            alt="Fresh Fruits and Vegetables"
            className="rounded-2xl shadow-lg"
          />

          {/* Decorative Badge */}
          <div className="absolute -bottom-6 -left-6 bg-green-700 text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm">Organic & Fresh</p>
          </div>
        </div>

      </div>
    </section>  
        </>
    );
};

export default AboutUsComPany;