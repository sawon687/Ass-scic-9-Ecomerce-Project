'use client';

import Link from "next/link";
import { FaStar } from "react-icons/fa";

const FoodCard = ({ fruit }) => {
 
  return (
    <div
      className="
        group
        w-[300px]
        bg-white
        rounded-2xl
        border border-green-100
        shadow-md
        overflow-hidden
        transition-all
        duration-500
        ease-out
        hover:-translate-y-1.5
        hover:shadow-xl
      
      "
    >
      {/* Image Section */}
      <div className="relative h-[200px] bg-green-50 organic-shape overflow-hidden">
        {/* Image */}
        <img
          src={fruit?.images?.[0]}
          alt={fruit?.name}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-150
          "
        />

        {/* Water-like soft overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-green-400/25
            via-green-500/15
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-700
            pointer-events-none
          "
        />
      </div>

      {/* Content */}
      <div className="px-5 py-4 text-center">
        <span className="text-xs font-semibold text-green-600 tracking-wide uppercase">
           {fruit.isOrganic===true?'organic':'not-organic'}
        </span>

        <h2 className="text-lg font-semibold text-gray-800 mt-1">
          {fruit?.name}
        </h2>

        {/* Price */}
        <div className="mt-2 text-xl font-bold text-green-700">
          ৳{fruit?.price} / kg
        </div>

        {/* Rating */}
        <div className="flex justify-center gap-1 mt-2">
          {[...Array(Math.floor(fruit?.rating || 0))].map((_, i) => (
            <FaStar key={i} className="text-amber-500 text-sm" />
          ))}
        </div>

        {/* Link */}
        <button 
          className="
            mt-4
            w-full
            bg-green-500
            text-white
            py-2
            rounded-lg
            text-sm
            font-semibold
            transition
            duration-300
            hover:bg-green-700
            active:scale-95
          "
        >

          <Link href={`/AllFruits/${fruit?._id}`}>  Add to Cart</Link>
         
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
