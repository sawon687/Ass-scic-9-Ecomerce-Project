'use client';

import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const CounterCard = ({ end, label }) => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('counters-section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setStartCount(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-green-600">
        {startCount ? <CountUp end={end} duration={2.5} separator="," /> : 0}+
      </h3>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
};

export default CounterCard;
