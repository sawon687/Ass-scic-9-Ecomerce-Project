'use client'
import React, { useState, useRef, useEffect } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const OrganicFruits = () => {
  const [organicFruits, setOrganicFruits] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('http://localhost:3000/api/fruitsColle?type=organic');
      const data = await res.json();
      setOrganicFruits(data);
    };
    getProducts();
  }, []);

  return (
    <section className="px-20 py-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-amber-500">
            Top Organic Products
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mt-2">
            Organic & Fresh Products Daily!
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 rounded-full bg-green-600 text-white text-xl"
          >
            ←
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 rounded-full bg-green-600 text-white text-xl"
          >
            →
          </button>
        </div>
      </div>

      {/* ❗ Render Swiper ONLY when data exists */}
      {organicFruits.length > 0 && (
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1224: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
        >
          {organicFruits.map((fruit) => (
            <SwiperSlide key={fruit._id}>
              <FoodCard fruit={fruit} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default OrganicFruits;
