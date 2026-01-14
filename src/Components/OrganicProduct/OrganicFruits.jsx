'use client';

import React, { useEffect, useState, useRef } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Navigation, Autoplay } from 'swiper/modules';

const OrganicFruits = () => {
  const [organicFruits, setOrganicFruits] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('http://localhost:3000/api/fruitsColle');
      const data = await res.json();
      setOrganicFruits(data);
    };
    getProducts();
  }, []);

  return (
    <section className="px-15 py-10 l">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-amber-500">
            Top Organic Products
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mt-2">
            Organic & Fresh Products Daily!
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            ref={prevRef}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-600 text-white text-xl md:text-2xl font-bold flex items-center justify-center shadow-lg hover:bg-green-700 transition"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-600 text-white text-xl md:text-2xl font-bold flex items-center justify-center shadow-lg hover:bg-green-700 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Swiper */}
             

                  <Swiper
        slidesPerView={1} // default mobile
        spaceBetween={40}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // Mobile
          },
          768: {
            slidesPerView: 2, // Tablet
          },
          1024: {
            slidesPerView: 4, // Desktop
          },
        }}
        modules={[FreeMode, Navigation, Autoplay]}
        className="!overflow-visible "
      >
        {organicFruits.map((fruit) => (
          <SwiperSlide key={fruit._id} className="pb-6">
            <FoodCard fruit={fruit} />
          </SwiperSlide>
        ))}
      </Swiper>
            
    </section>
  );
};

export default OrganicFruits;
