'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Our Organic Collection",
    subtitle: "100% Quality Collection",
    image: "https://i.ibb.co/1tNrkG05/vecteezy-fresh-fruits-and-vegetables-arranged-on-a-bright-white-60363711.png",
  },
  {
    id: 2,
    title: "Fresh & Healthy Vegetables",
    subtitle: "Direct From Farm",
    image: "https://i.ibb.co.com/5gR4d2Dn/foruts.png",
  },
  {
    id: 3,
    title: "Natural & Organic Fruits",
    subtitle: "Best Quality Guaranteed",
    image: "https://i.ibb.co.com/rK8nHNf1/colorful-fruits-tasty-fresh-ripe-juicy-white-desk-removebg-preview.png",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  const textVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: 50, opacity: 0, transition: { duration: 0.8 } },
  };

  const imgVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative w-full h-[560px] bg-green-900  mt-33 flex items-center  select-none overflow-hidden">
      {/* Flex container for text & image */}
      <div className="max-w-7xl mx-auto h-full flex  items-center justify-between px-10">
        {/* Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id + "-text"}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-white max-w-lg pt-15 space-y-4"
          >
            <p className="text-orange-400 font-medium">{slides[current].subtitle}</p>
            <h1 className="text-5xl font-bold">{slides[current].title}</h1>
            <button className="mt-4 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold">
              SHOP NOW →
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[current].id + "-img"}
            src={slides[current].image}
            alt={slides[current].title}
            variants={imgVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-1/2  bg-center object-contain cursor-grab"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
              if (info.offset.x > 50) setCurrent(prev => (prev === 0 ? length - 1 : prev - 1));
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Banner;
