import React from 'react';

const Navbar = () => {
    return (
        <div className=''>
           {/* <!-- TOP INFO BAR --> */}
<div class="bg-green-700 text-white text-sm">
  <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
    <p>Orders of $50 or more qualify for free shipping!</p>
    <div class="flex items-center gap-4">
      <span>📍 8502 Preston Rd. Inglewood, Maine 98380</span>
      <span class="flex gap-3">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin-in"></i>
      </span>
    </div>
  </div>
</div>

{/* <!-- MAIN NAVBAR --> */}
<nav class="bg-white w-full fixed shadow-lg">
  <div class="max-w-7xl mx-auto  py-4 flex items-center justify-between">

    {/* <!-- LOGO --> */}
    <div class="flex items-center brand-wrap  gap-2 h-full bg-green-700  w-xs">
      <span class="text-3xl font-bold text-gray-200">Frutin</span>
    </div>

    {/* <!-- MENU --> */}
    <ul class="hidden md:flex items-center gap-8 font-medium">
      <li class="hover:text-green-600 cursor-pointer">Home <span class="text-green-600">+</span></li>
      <li class="hover:text-green-600 cursor-pointer">About Us</li>
      <li class="hover:text-green-600 cursor-pointer">Service <span class="text-green-600">+</span></li>
      <li class="hover:text-green-600 cursor-pointer">Pages <span class="text-green-600">+</span></li>
      <li class="hover:text-green-600 cursor-pointer">Blog <span class="text-green-600">+</span></li>
      <li class="hover:text-green-600 cursor-pointer">Contact</li>
    </ul>

    {/* <!-- RIGHT ACTIONS --> */}
    <div class="flex items-center gap-5">
      {/* <!-- Search --> */}
      <button class="text-xl">🔍</button>

      {/* <!-- Cart --> */}
      <div class="relative">
        🛒
        <span class="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1.5 rounded-full">
          0
        </span>
      </div>

      {/* <!-- Button --> */}
      <button class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold">
        SHOP NOW →
      </button>
    </div>

  </div>
</nav>
 
        </div>
    );
};

export default Navbar;