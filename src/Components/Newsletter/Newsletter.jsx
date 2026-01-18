'use client';

import { useState } from 'react';
import { FaMailBulk } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000); // 3 sec message
  };

  return (
   <section className="py-24 bg-gradient-to-r from-green-600 via-green-500 to-lime-400">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Subscribe for Fresh <br /> Fruits & Offers 🍎
        </h2>

        <p className="text-green-100 max-w-lg mb-8 leading-relaxed">
          Get weekly updates about fresh organic fruits, seasonal discounts,
          and healthy lifestyle tips directly to your inbox.
        </p>

        {/* FEATURES */}
        <ul className="space-y-4 text-green-50">
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            Weekly fresh fruit updates
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            Exclusive subscriber discounts
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            100% organic & farm fresh
          </li>
        </ul>
      </div>

      {/* RIGHT FORM */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">

        {/* Decorative Circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-100 rounded-full"></div>

        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Join Our Newsletter
        </h3>
        <p className="text-gray-500 mb-6">
          No spam. Only freshness 🌱
        </p>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition duration-300 shadow-lg"
          >
            Subscribe Now
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>

    </div>
  </div>
</section>

  );
};

export default Newsletter;
