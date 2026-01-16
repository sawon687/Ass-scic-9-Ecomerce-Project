'use client';

import CounterCard from "@/Components/Banner/CounterCard";
import { FaSeedling, FaLeaf, FaAppleAlt, FaTruck } from "react-icons/fa";

const AboutPage = () => {

  const counters = [
    { end: 15663, label: "Total Products" },
    { end: 356, label: "Team Members" },
    { end: 2365, label: "Happy Customers" },
    { end: 156, label: "Awards Won" },
  ];

  const farmerImages = [
    { img: "https://i.ibb.co/ym43RQ5j/Screenshot-2026-01-15-131658.png", title: "Organic Apple Farm" },
    { img: "https://i.ibb.co/pvjWLV6Y/Screenshot-2026-01-15-104712.png", title: "Fresh Mango Garden" },
    { img: "https://i.ibb.co/wZrYMhqT/Screenshot-2026-01-15-105840.png", title: "Seasonal Fruit Field" },
    { img: "https://i.ibb.co/mVrnqcQY/Screenshot-2026-01-14-071329.png", title: "Local Farmers Hub" }
  ];

  const processSteps = [
    { img: "https://i.ibb.co/bgt8d4GJ/Screenshot-2026-01-15-131648.png", step: "Step 01", title: "Soil Testing", desc: "Conduct soil tests to understand composition, pH, and nutrients.", icon: <FaSeedling /> },
    { img: "https://i.ibb.co/Y7XD9kJV/Screenshot-2026-01-15-131428.png", step: "Step 02", title: "Farm Growing", desc: "Plants nurtured with natural fertilizers and safe practices.", icon: <FaLeaf /> },
    { img: "https://i.ibb.co/ZphJ2BDR/Screenshot-2026-01-15-131603.png", step: "Step 03", title: "Crop Harvesting", desc: "Harvesting fruits at peak ripeness for maximum flavor.", icon: <FaAppleAlt /> },
    { img: "https://i.ibb.co/Nnf9z6b4/Screenshot-2026-01-15-131623.png", step: "Step 04", title: "Food Processing", desc: "Quality-checked and processed before delivery.", icon: <FaTruck /> },
  ];

  return (
    <main className="bg-gray-50 mt-32">

      {/* HERO */}
      <section className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.ibb.co/Bp3zvk8/top-view-fresh-fruits-different-ripe-mellow-fruits-white-background-berry-tasty-health-color-diet.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">About Our Journey</h1>
          <p className="max-w-2xl text-gray-200">
            Bringing nature’s freshness from trusted farmers directly to your home.
          </p>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="bg-gradient-to-r from-green-50 to-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-green-700 font-semibold mb-3 uppercase tracking-wide">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">
              Fresh Fruits & Vegetables <br /> Directly From Farmers
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed max-w-xl">
              We deliver farm-fresh organic fruits straight from local farmers, ensuring health, purity, and trust.
            </p>
            <p className="text-gray-600 leading-relaxed max-w-xl">
              No chemicals, no middlemen — only natural goodness.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/zhjngt6r/top-view-peaches-basket-with-pineapple-apple-pomegranate-peach-plum-wooden-surface.jpg"
              alt="Fresh Fruits"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-green-700 text-white px-8 py-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-extrabold">100%</p>
              <p className="text-sm">Organic & Fresh</p>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {counters.map((c, i) => (
            <CounterCard key={i} end={c.end} label={c.label} />
          ))}
        </div>
      </section>
{/* PROCESS STEPS */}
<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Process</h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Step by step, from soil to table, we ensure our fruits maintain top quality.
    </p>
  </div>

  <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto px-4">
    {processSteps.map((item, idx) => (
      <div key={idx} className="flex flex-col items-center relative">

        {/* Diamond Image */}
        <div className="relative w-[220px] h-[220px] mb-10">
          <div className="absolute inset-0 overflow-hidden bg-green-500 transform rotate-45 rounded-3xl shadow-lg">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transform -rotate-45"
            />
          </div>

          {/* Floating Icon */}
          <div className="absolute top-52 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-600 text-white flex items-center justify-center rounded-full shadow text-xl">
            {item.icon}
          </div>
        </div>

        {/* Upright Text Content */}
        <div className="text-center max-w-xs ">
          <h3 className="text-lg md:text-base font-semibold text-green-700 mb-2">
            {item.step} — {item.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {item.desc}
          </p>
        </div>

      </div>
    ))}
  </div>
</section>




      {/* FARMER IMAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {farmerImages.map((item, i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden shadow-lg group">
                <img src={item.img} alt={item.title} className="w-full h-56 object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow">
                  100% Organic
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-bold drop-shadow">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* INFO SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white p-12 rounded-3xl shadow-2xl border">
              <h3 className="text-3xl font-extrabold text-gray-800 mb-6">Fresh From Farms</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our fruits come directly from verified farms. We ensure transparency, sustainability, and fair pricing for farmers.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3"><span className="w-3 h-3 bg-green-600 rounded-full" /> Daily fresh harvest</li>
                <li className="flex items-center gap-3"><span className="w-3 h-3 bg-green-600 rounded-full" /> No chemicals used</li>
                <li className="flex items-center gap-3"><span className="w-3 h-3 bg-green-600 rounded-full" /> Farmer-first pricing</li>
                <li className="flex items-center gap-3"><span className="w-3 h-3 bg-green-600 rounded-full" /> Trusted local farms</li>
              </ul>
            </div>
            <div>
              <img src="https://i.ibb.co/ym43RQ5j/Screenshot-2026-01-15-131658.png" alt="Organic Farming" className="w-full h-[480px] object-cover rounded-3xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
