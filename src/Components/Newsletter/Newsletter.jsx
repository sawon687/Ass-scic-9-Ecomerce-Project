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
    <section className="py-20 bg-green-50 flex justify-center items-center">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full flex flex-col items-center text-center relative overflow-hidden">

        {/* Optional decorative fruits background */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-200 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-40 blur-3xl"></div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-800 mb-3">
          🍓 Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get the latest updates about organic fruits, fresh vegetables, and exclusive deals.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col sm:flex-row gap-4"
        >
          <div className="flex flex-1 items-center border border-gray-300 rounded-2xl px-4 py-2 focus-within:ring-2 focus-within:ring-green-400 transition">
            <FaMailBulk className="text-gray-400 mr-2" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-2xl px-6 py-2 flex items-center gap-2 justify-center"
          >
            Subscribe
          </button>
        </form>

        {/* Confirmation */}
        {submitted && (
          <p className="mt-4 text-green-600 font-semibold animate-pulse">
            ✅ Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
